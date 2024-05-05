import { User } from "src/domain/models";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity extends User {

    @Column('varchar', { length: 100 })
    fullName: string

    @Column('varchar', { length: 120, unique: true })
    email: string

    @Column('varchar', { length: 160 })
    password: string

    @Column('varchar', { length: 20, unique: true })
    phone: string

    @Column()
    isActive: boolean
}