import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  // @Get()
  // findAll(n) {

  //   return this.ticketService.findAll(n);
  // }

  @Get(':id')
  findOneByid(@Param('id') id: string) {
    console.log('tict', id);
    
    return this.ticketService.findflightsByid(+id);
  }

  @Get()
  findOne(@Query() createTicketDto:CreateTicketDto) {
    console.log(createTicketDto);
    return this.ticketService.findflights(createTicketDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('numplaces') numplase:number) {
    console.log('Controller',numplase);
    return this.ticketService.updated(+id, numplase);
  }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.ticketService.remove(+id);
//   }
}
