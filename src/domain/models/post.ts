import { ModelAbstract } from "./model.abstract";

export class Post extends ModelAbstract {
    title: string

    content: string

    public getTitle() {
        return this.title
    }

    public getContent() {
        return this.content
    }
}