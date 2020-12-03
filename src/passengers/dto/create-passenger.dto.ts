import { IsString, IsNumber } from "class-validator"

export class CreatePassengerDto {

  @IsString()
  firstname: string

  @IsString()
  lastname: string

  @IsNumber()
  ID: number

  @IsString()
  MorMr: string

  @IsString()
  age: string

  @IsString()
  sity: string

  id: number
  
  @IsNumber()
  idorder:number

  @IsNumber()
  idflightgo:number

  @IsNumber()
  idflightback:number
}
