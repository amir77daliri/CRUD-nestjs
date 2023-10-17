// import {IsString, IsOptional, IsNotEmpty, MinLength, IsNumber} from 'class-validator'

// export class CreateProductDto {
    
//     @IsNotEmpty()
//     @MinLength(6)
//     @IsString()
//     readonly name: string;

//     @IsNotEmpty()
//     @IsNumber()
//     readonly price: number;

//     @IsOptional()
//     readonly is_available: boolean

// }

export class CreateProductDto {
    
    readonly name: string;
    readonly price: number;
    readonly is_available: boolean

}

export class DTO {
    
    readonly name: string;
    readonly price: number

}