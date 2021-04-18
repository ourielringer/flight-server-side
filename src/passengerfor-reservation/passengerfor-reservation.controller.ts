import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PassengerforReservationService } from './passengerfor-reservation.service';
import { CreatePassengerforReservationDto } from './dto/create-passengerfor-reservation.dto';
import { UpdatePassengerforReservationDto } from './dto/update-passengerfor-reservation.dto';

@Controller('passengerfor-reservation')
export class PassengerforReservationController {
  constructor(private readonly passengerforReservationService: PassengerforReservationService) {}

  @Post()
  create(@Body() createPassengerforReservationDto: CreatePassengerforReservationDto) {
    return this.passengerforReservationService.create(createPassengerforReservationDto);
  }

  @Get()
  findAll() {
    return this.passengerforReservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengerforReservationService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePassengerforReservationDto: UpdatePassengerforReservationDto) {
    return this.passengerforReservationService.update(+id, updatePassengerforReservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengerforReservationService.remove(+id);
  }
}
