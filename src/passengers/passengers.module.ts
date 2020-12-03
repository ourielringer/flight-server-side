import { Module } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { PassengersController } from './passengers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passenger } from './entities/passenger.entity';

@Module({
  controllers: [PassengersController],
  providers: [PassengersService],
  imports:[TypeOrmModule.forFeature([Passenger])]
})
export class PassengersModule {}
