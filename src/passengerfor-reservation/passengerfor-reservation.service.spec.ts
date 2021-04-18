import { Test, TestingModule } from '@nestjs/testing';
import { PassengerforReservationService } from './passengerfor-reservation.service';

describe('PassengerforReservationService', () => {
  let service: PassengerforReservationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassengerforReservationService],
    }).compile();

    service = module.get<PassengerforReservationService>(PassengerforReservationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
