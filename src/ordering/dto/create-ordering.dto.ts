import { IsString, IsEmail, IsNumber, IsAlphanumeric } from "class-validator"

export class CreateOrderingDto {

    @IsString()
    name : string

    // @IsEmail()
    email : string

    @IsNumber()
    phonenumber : number 

    @IsAlphanumeric()
    password : string
}
