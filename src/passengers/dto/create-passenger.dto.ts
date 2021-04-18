import { IsString, IsNumber, IsObject } from "class-validator"
import { Reservation } from "src/reservation/entities/reservation.entity"

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
  
  @IsNumber()
  idReservation: number
}
