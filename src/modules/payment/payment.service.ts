import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentReq } from './dto/create-payment.req';
import { PaymentResp } from './dto/payment-resp';
import { PaymentStatus } from './payment-status.enum';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentService {

    constructor(@InjectRepository(Payment) private paymentRepository: Repository<Payment>) { }

    async createPayment(req: PaymentReq) {
        const resp = new PaymentResp();
        let payment: Payment = await this.findByReferenceId(req.referenceId);

        if (payment) {
            throw new ForbiddenException(`The referenceId ${req.referenceId} has already been processed`);
        }

        const isPaymentSuccess = await this.processPayment();

        payment = new Payment();
        payment.referenceId = req.referenceId;
        payment.status = isPaymentSuccess ? PaymentStatus.CONFIRMED : PaymentStatus.DECLINED;

        const savedPayment = await this.paymentRepository.save(payment);

        resp.paymentStatus = savedPayment.status;
        resp.paymentId = savedPayment.id;

        return resp;
    }

    async processPayment() {
        return Math.floor(Math.random() * Math.floor(2)) == 0 ? false : true;
    }

    async findOne(id: string) {
        return this.paymentRepository.findOne(id);
    }

    async findByReferenceId(referenceId: string) {
        return this.paymentRepository.findOne({ referenceId });
    }

}

