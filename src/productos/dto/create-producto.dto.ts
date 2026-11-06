import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateProductoDto {
    @ApiProperty({example:'Mensaje'})
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    nombre:string;

    @ApiProperty({example:'Descripcion'})
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    descripcion?:string;

    @ApiProperty({example:'3.50'})
    @IsNumber({maxDecimalPlaces:2})
    @IsPositive()
    precio:number;

    @ApiProperty({example:'0', default:0})
    @IsInt()
    @Min(0)
    @IsOptional()
    stock?:number;

    @ApiProperty({example:true, default:true})
    @IsBoolean()
    @IsOptional()
    activo?:boolean;

}
