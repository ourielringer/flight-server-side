import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {

  constructor(@InjectRepository(Reservation) private readonly repo: Repository<Reservation>) { }

  create(createReservationDto: CreateReservationDto) {
    console.log(createReservationDto);

    const reservation = new Reservation;
    reservation.numReservation = createReservationDto.numReservation
    reservation.idFlightGo = createReservationDto.idFlightGo
    reservation.idFlightBack = createReservationDto.idFlightBack
    reservation.idOrdering = createReservationDto.idOrdering

    return this.repo.save(reservation);

  }

  findAll() {
    return `This action returns all reservation`;
  }

  findOne(id: number) {
    // console.log('servis');
    return this.repo.find({ where: { idOrdering: id } })
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
