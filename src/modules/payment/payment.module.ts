import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { PaymentRepository } from './payment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentRepository])],
  providers: [PaymentService],
  controllers: [PaymentController]
})
export class PaymentModule { }
