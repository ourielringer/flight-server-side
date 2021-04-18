import { PartialType } from '@nestjs/mapped-types';
import { CreatePassengerforReservationDto } from './create-passengerfor-reservation.dto';

export class UpdatePassengerforReservationDto extends PartialType(CreatePassengerforReservationDto) {}
