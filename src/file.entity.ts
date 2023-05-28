import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class fileEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 30})
    username: string;

    @Column({ length: 255})
    password: string;
}