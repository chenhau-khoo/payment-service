import { Test, TestingModule } from '@nestjs/testing';
import { async } from 'rxjs';
import { PaymentStatus } from './payment-status.enum';
import { PaymentController } from './payment.controller';
import { Payment } from './payment.entity';
import { PaymentRepository } from './payment.repository';
import { PaymentService } from './payment.service';

describe('PaymentController', () => {
  let paymentController: PaymentController;
  // const paymentService = new PaymentService(new PaymentRepository());

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [PaymentService, PaymentRepository]
    }).compile();
    paymentController = module.get<PaymentController>(PaymentController);
  });

  it('should be defined', () => {
    expect(paymentController).toBeDefined();
  });

});
