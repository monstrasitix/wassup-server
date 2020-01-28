import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 500 })
    username: string;

    @Column({ length: 500 })
    password: string;
};