import { PaymentStatus } from "../payment-status.enum"

export class PaymentResp {
    paymentId: string;
    paymentStatus: PaymentStatus;
}