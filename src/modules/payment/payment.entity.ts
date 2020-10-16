import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm'
import { PaymentStatus } from './payment-status.enum';

@Entity()
@Index(["referenceId"])
export class Payment {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 150 })
    referenceId: string;

    @Column({
        nullable: false,
        type: "enum",
        enum: PaymentStatus
    })
    status: PaymentStatus;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
    })
    createdOn: Date;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
    })
    updatedOn: Date;

}
