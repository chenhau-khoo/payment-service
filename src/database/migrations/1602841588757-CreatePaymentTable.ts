import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePaymentTable1602841588757 implements MigrationInterface {
    name = 'CreatePaymentTable1602841588757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `payment` (`id` varchar(36) NOT NULL, `reference_id` varchar(150) NOT NULL, `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `payment`");
    }

}
