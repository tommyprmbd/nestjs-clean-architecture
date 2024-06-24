import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsEnum, IsInt, IsOptional } from "class-validator";
import { OrderDirectionEnum } from "./../../../domain/common/enums/order-direction.enum";
import { PageOptionsDtoInterface } from "src/domain/dtos";

export class PageOptionsDto implements PageOptionsDtoInterface {
    @ApiProperty({
        default: OrderDirectionEnum.DESC,
        enum: OrderDirectionEnum,
        required: false,
    })
    @IsEnum(OrderDirectionEnum)
    @IsOptional()
    @Transform(({value}) => value.toUpperCase())
    readonly orderDirection?: OrderDirectionEnum = OrderDirectionEnum.DESC

    @ApiProperty({
        default: 1,
        required: false,
    })
    @Type(() => Number)
    @IsInt()
    @IsOptional()
    readonly page?: number = 1    

    @ApiProperty({
        default: 10,
        required: false,
    })
    @Type(() => Number)
    @IsInt()
    @IsOptional()
    readonly take?: number = 10

    getOrder(): OrderDirectionEnum {
        return this.orderDirection    
    }

    getPage(): number {
        return this.page
    }

    getSkip(): number {
        return (this.page - 1) * this.take
    }
    
    getTake(): number {
        return this.take
    }
}