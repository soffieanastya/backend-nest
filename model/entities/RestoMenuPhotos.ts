import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_remp_id", ["rempId"], { unique: true })
@Entity("resto_menu_photos", { schema: "public" })
export class RestoMenuPhotos {
  @PrimaryGeneratedColumn({ type: "integer", name: "remp_id" })
  rempId: number;

  @Column("character varying", {
    name: "remp_thumbnail_filename",
    nullable: true,
    length: 50,
  })
  rempThumbnailFilename: string | null;

  @Column("character varying", {
    name: "remp_photo_filename",
    nullable: true,
    length: 50,
  })
  rempPhotoFilename: string | null;

  @Column("bit", { name: "remp_primary", nullable: true })
  rempPrimary: string | null;

  @Column("character varying", {
    name: "remp_url",
    nullable: true,
    length: 255,
  })
  rempUrl: string | null;

  @Column("integer", { name: "remp_reme_id", nullable: true })
  rempRemeId: number | null;
}
