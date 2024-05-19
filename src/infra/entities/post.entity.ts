import { Post } from "src/domain/models";
import { Column, Entity } from "typeorm";

@Entity({ name: 'posts' })
export class PostEntity extends Post {
    @Column('varchar', { length: 180, nullable: false })
    title: string;

    @Column('text')
    content: string;
}