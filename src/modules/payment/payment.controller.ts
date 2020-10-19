import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PaymentReq } from './dto/create-payment.req';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) { }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() req: PaymentReq) {
        return this.paymentService.createPayment(req);
    }
}
