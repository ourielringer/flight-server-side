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


@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ouri1q2w',
      database: 'flight',
      entities: [Ticket, Ordering, Passenger],
      logging: true,
      synchronize: true,
    }),
    TicketModule,
    OrderingModule,
    PassengersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

