import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ModelInterface } from "./model.interface";
import { Exclude } from "class-transformer";

export abstract class ModelAbstract implements ModelInterface {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)'
    })
    @Exclude()
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: "CURRENT_TIMESTAMP(6)"
    })
    @Exclude()
    updatedAt: Date;
}