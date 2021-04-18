import { IsNumber, IsString } from "class-validator"

export class CreateReservationDto {

    @IsString()
    numReservation: string

    @IsNumber()
    idFlightGo: number

    @IsNumber()
    idFlightBack: number
    
    @IsNumber()
    idOrdering: number
}
