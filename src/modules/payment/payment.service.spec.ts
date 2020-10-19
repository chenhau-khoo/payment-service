import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PaymentResp } from './dto/create-payment.resp';
import { PaymentStatus } from './payment-status.enum';
import { Payment } from './payment.entity';
import { PaymentRepository } from './payment.repository';
import { PaymentService } from './payment.service';

describe('The PaymentService', () => {
  let service: PaymentService;
  let findOne: jest.Mock;
  beforeEach(async () => {
    findOne = jest.fn();
    const module: TestingModule = await Test.createTestingModule({
      // providers: [PaymentService, PaymentRepository],
      providers: [
        PaymentService,
        {
          provide: getRepositoryToken(Payment),
          useValue: {
            findOne
          }
        }
      ],
    }).compile();

    service = module.get(PaymentService);
  });

  describe('when getting a payment by referenceId', () => {
    describe('and the referenceId is matched', () => {
      let payment: Payment;
      beforeEach(() => {
        payment = new Payment();
        findOne.mockReturnValue(Promise.resolve(payment));
      })
      it('should return a payment', async () => {
        const fetchedPayment = await service.findByReferenceId('referenceId-xxxx-xxx');
        expect(fetchedPayment).toEqual(payment);
      })
    })
    describe('and the referenceId is not matched', () => {
      beforeEach(() => {
        findOne.mockReturnValue(null);
      })
      it('should throw an error', async () => {
        expect(service.findByReferenceId('referenceId-xxxx-xxx')).rejects.toThrow();
      })
    })
  });

  describe('when create a payment', () => {
    describe('and the referenceId exists', () => {
      let payment: Payment;
      beforeEach(() => {
        payment = new Payment();
        findOne.mockReturnValue(Promise.resolve(payment));
      })
      it('should throw an error', async () => {
        expect(service.findByReferenceId('referenceId-xxxx-xxx')).rejects.toThrow();
      })
    })
    describe('and the referenceId not exists', () => {
      beforeEach(() => {
        findOne.mockReturnValue(null);
      })
      it('should throw an error', async () => {
        expect(service.findByReferenceId('referenceId-xxxx-xxx')).rejects.toThrow();
      })
    })

    it('should return a success payment', async () => {
      const result = new PaymentResp();
      jest.spyOn(service, 'createPayment').mockImplementation(() => Promise.resolve(result));
    });
  });

});
