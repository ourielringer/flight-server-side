import { Test, TestingModule } from '@nestjs/testing';
import { PassengerforReservationController } from './passengerfor-reservation.controller';
import { PassengerforReservationService } from './passengerfor-reservation.service';

describe('PassengerforReservationController', () => {
  let controller: PassengerforReservationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassengerforReservationController],
      providers: [PassengerforReservationService],
    }).compile();

    controller = module.get<PassengerforReservationController>(PassengerforReservationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
