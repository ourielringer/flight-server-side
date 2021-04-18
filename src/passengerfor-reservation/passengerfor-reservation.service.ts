import { Injectable } from '@nestjs/common';
import { CreatePassengerforReservationDto } from './dto/create-passengerfor-reservation.dto';
import { UpdatePassengerforReservationDto } from './dto/update-passengerfor-reservation.dto';

@Injectable()
export class PassengerforReservationService {
  create(createPassengerforReservationDto: CreatePassengerforReservationDto) {
    return 'This action adds a new passengerforReservation';
  }

  findAll() {
    return `This action returns all passengerforReservation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passengerforReservation`;
  }

  update(id: number, updatePassengerforReservationDto: UpdatePassengerforReservationDto) {
    return `This action updates a #${id} passengerforReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} passengerforReservation`;
  }
}
