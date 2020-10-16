import { IsNotEmpty, IsString, IsInt, IsNumber } from 'class-validator';

export class PaymentReq {

    @IsString()
    @IsNotEmpty()
    referenceId: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

}