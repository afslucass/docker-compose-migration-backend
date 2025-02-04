import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCpfColumn1738629850435 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE users ADD cpf VARCHAR(11)");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE users DROP COLUMN cpf");
  }
}
