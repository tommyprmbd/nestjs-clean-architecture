import { OrderDirectionEnum } from "src/domain/common";

export interface PageOptionsDtoInterface {
    getOrder(): OrderDirectionEnum

    getPage(): number

    getTake(): number

    getSkip(): number
}