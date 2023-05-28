import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("regions", { schema: "public" })
export class Regions {
  @PrimaryGeneratedColumn({ type: "integer", name: "region_id" })
  regionId: number;

  @Column("character varying", {
    name: "region_name",
    nullable: true,
    length: 50,
  })
  regionName: string | null;
}
