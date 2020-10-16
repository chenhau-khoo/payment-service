import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PaymentReq } from './dto/payment-req';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() req: PaymentReq) {
        return this.paymentService.processPayment(req);
    }
}
