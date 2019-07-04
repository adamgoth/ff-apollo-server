import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePeaksTable1562204497197 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "peak" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "longitude" integer NOT NULL, "latitude" integer NOT NULL, "range" character varying NOT NULL, "class" character varying NOT NULL, "distance" integer NOT NULL, "totalGain" integer NOT NULL, "route" character varying NOT NULL, CONSTRAINT "PK_638f426f513cba624c3011aa0e4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "peak"`);
    }

}
