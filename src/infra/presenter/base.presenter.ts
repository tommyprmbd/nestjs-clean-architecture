import { PresenterInterface } from "src/domain/presenter";
import { MetaResponseDto, StatusResponseDto } from "../dtos";
import { ModelInterface } from "src/domain/models/model.interface";
import { ApiProperty } from "@nestjs/swagger";
import { NotFoundException } from "@nestjs/common";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

export class BasePresenter implements PresenterInterface {
    @ApiProperty()
    readonly status: StatusResponseDto

    @ApiProperty()
    readonly data: ModelInterface[]|ModelInterface|null

    @ApiProperty()
    readonly meta: MetaResponseDto

    constructor(
        data = null,
        status: StatusResponseDto = new StatusResponseDto(),
        meta: MetaResponseDto = new MetaResponseDto()
    ){
        this.status = status
        this.meta = meta

        this.data = this.transform(data)
    }

    transform(data: any) {
        if (data == null && this.status.code == 0) {
            throw new NotFoundException()
        }

        if (data instanceof InsertResult) {
            const dataLength = data.identifiers.length
            this.status.message = dataLength > 0 ? 'Created.' : 'Failed to create.'
            data = dataLength > 0 ? data.identifiers.at(0) : null
        }

        if (data instanceof UpdateResult) {
            const affected = data.affected
            this.status.message = affected == 1 ? 'Updated.' : 'Failed to update.'

            data = {
                affected
            }
        }

        if (data instanceof DeleteResult) {
            const affected = data.affected
            this.status.message = affected == 1 ? 'Deleted.' : 'Failed to delete.'

            data = {
                affected
            }
        }

        if (data instanceof Object) {
            return data
        }

        return null
    }
}