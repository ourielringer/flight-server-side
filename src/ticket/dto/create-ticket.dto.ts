import { IsNumber, IsAlphanumeric, IsEmail, IsString } from "class-validator";

export class CreateTicketDto {

    @IsString()
    from?:string

    @IsString()
    to?:string
    
    @IsString()
    date?:string
}
