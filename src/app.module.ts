import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketModule } from './ticket/ticket.module';
import { Ticket } from './ticket/entities/ticket.entity';
import { Ordering } from './ordering/entities/ordering.entity';
import { OrderingModule } from './ordering/ordering.module';
import { Passenger } from './passengers/entities/passenger.entity';
import { PassengersModule } from './passengers/passengers.module';
import { JwtModule } from '@nestjs/jwt';
import { ManagerModule } from './manager/manager.module';
import { PassengerforReservationModule } from './passengerfor-reservation/passengerfor-reservation.module';
import { ReservationModule } from './reservation/reservation.module';
import { Reservation } from './reservation/entities/reservation.entity';
import { PassengerforReservation } from './passengerfor-reservation/entities/passengerfor-reservation.entity';


@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ouri1q2w',
      database: 'flight',
      entities: [Ticket, Ordering, Passenger,Reservation,PassengerforReservation],
      logging: true,
      synchronize: true,
    }),
    TicketModule,
    OrderingModule,
    PassengersModule,
    ManagerModule,
    ReservationModule,
    PassengerforReservationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

