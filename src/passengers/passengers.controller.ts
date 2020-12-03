import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';

@Controller('passengers')
export class PassengersController {
  constructor(private readonly passengersService: PassengersService) {}

  @Post()
  addPssenger(@Body() createPassengerDto: CreatePassengerDto) {
    console.log('controler' , createPassengerDto);
    return this.passengersService.addPssenger(createPassengerDto);
  }

  @Get()
  findAll() {
    return this.passengersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('id', id);
    
    return this.passengersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePassengerDto: UpdatePassengerDto) {
    return this.passengersService.update(+id, updatePassengerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengersService.remove(+id);
  }
}
