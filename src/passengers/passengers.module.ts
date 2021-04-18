import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { PassengersController } from './passengers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passenger } from './entities/passenger.entity';
import { OrderMiddleware } from 'src/order.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [PassengersController],
  providers: [PassengersService],
  imports:[TypeOrmModule.forFeature([Passenger]),  
  JwtModule.register({secret:"ouriel",signOptions: { expiresIn: '60s' }}),
]
})
export class PassengersModule {
 
}
