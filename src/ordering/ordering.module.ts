import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { OrderingService } from './ordering.service';
import { OrderingController } from './ordering.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ordering } from './entities/ordering.entity';
import { OrderMiddleware } from '../order.middleware';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports:[TypeOrmModule.forFeature([Ordering]),
  JwtModule.register({secret:"ouriel",signOptions: { expiresIn: '60s' }}),
],
  controllers: [OrderingController],
  providers: [OrderingService]
})
export class OrderingModule {

}
