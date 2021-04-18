import { Module } from '@nestjs/common';
import { PassengerforReservationService } from './passengerfor-reservation.service';
import { PassengerforReservationController } from './passengerfor-reservation.controller';
import { PassengerforReservation } from './entities/passengerfor-reservation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PassengerforReservationController],
  providers: [PassengerforReservationService],
  imports:[TypeOrmModule.forFeature([PassengerforReservation])]

})
export class PassengerforReservationModule {}
