import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdatePaymentTable1602844304629 implements MigrationInterface {
    name = 'UpdatePaymentTable1602844304629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `payment` ADD `status` enum ('Success', 'Error') NOT NULL");
        await queryRunner.query("CREATE INDEX `IDX_5e5bd6f071edb08fb28719b2f0` ON `payment` (`reference_id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_5e5bd6f071edb08fb28719b2f0` ON `payment`");
        await queryRunner.query("ALTER TABLE `payment` DROP COLUMN `status`");
    }

}
