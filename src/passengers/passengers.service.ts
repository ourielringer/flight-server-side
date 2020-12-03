import { Injectable } from '@nestjs/common';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { Passenger } from './entities/passenger.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PassengersService {

  constructor(@InjectRepository(Passenger) private readonly repo: Repository<Passenger>){}


  addPssenger(createPassengerDto: CreatePassengerDto) {

   let pasenger = new Passenger
   pasenger.name = createPassengerDto.firstname
   pasenger.lastname = createPassengerDto.lastname
   pasenger.ID = createPassengerDto.id
   pasenger.MorMr = createPassengerDto.MorMr
   pasenger.age = createPassengerDto.age
   pasenger.sity = createPassengerDto.sity
   pasenger.idorder = createPassengerDto.idorder
   pasenger.idflightgo = createPassengerDto.idflightgo
   pasenger.idflightback = createPassengerDto.idflightback


   return  this.repo.save(pasenger)   
 }

 findAll() {
   return `This action returns all passengers`;
 }

  findOne(id: number) {
    console.log('servic' ,id);
    
    return this.repo.find({where:{ idorder : id}})
  }

  update(id: number, updatePassengerDto: UpdatePassengerDto) {
    return `This action updates a #${id} passenger`;
  }

  remove(id: number) {
    return `This action removes a #${id} passenger`;
  }
}
