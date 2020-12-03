import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {

  constructor(@InjectRepository(Ticket) private readonly repo: Repository<Ticket>) {
  }
  create(createTicketDto: CreateTicketDto) {
    return 'This action adds a new ticket';
  }

  // findAll(n) {
  //   console.log(n);

  //   return {ouri:n};

  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} ticket`;
  // }
  findflights(createTicketDto) {
    console.log(createTicketDto.from);
    return this.repo.find({where:{ from: createTicketDto.from, to: createTicketDto.to, date: createTicketDto.date}})
  }

  findflightsByid(id){
    console.log('tiserver',id);
    
    return this.repo.find({where:{id: id}})

  }

  updated(id: number, numplase: number) {
    console.log('servis');
    return this.repo.update({id},{numplaces:numplase})
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
