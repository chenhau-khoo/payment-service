import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentReq } from './dto/payment-req';
import { PaymentResp } from './dto/payment-resp';
import { PaymentStatus } from './payment-status.enum';
import { Payment } from './payment.entity';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentService {

    constructor(private paymentRepository: PaymentRepository) { }

    async processPayment(req: PaymentReq) {
        const resp = new PaymentResp();
        let payment: Payment = await this.paymentRepository.findByReferenceId(req.referenceId);

        if (payment) {
            resp.paymentId = payment.id;
            resp.paymentStatus = payment.status;
            return resp;
        }

        payment = new Payment();
        payment.referenceId = req.referenceId;
        payment.status = isPaymentSuccess();

        const savedPayment = await this.paymentRepository.save(payment);

        resp.paymentStatus = savedPayment.status;
        resp.paymentId = savedPayment.id;

        return resp;

        function isPaymentSuccess() {
            return Math.floor(Math.random() * Math.floor(2)) == 0 ? PaymentStatus.ERROR : PaymentStatus.SUCCESS;
        }
    }



}

