import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { OrderingService } from './ordering.service';
import { CreateOrderingDto } from './dto/create-ordering.dto';
import { UpdateOrderingDto } from './dto/update-ordering.dto';

@Controller('ordering')
export class OrderingController {
  constructor(private readonly orderingService: OrderingService) {}

  @Post()
  createOrder(@Body() createOrderingDto: CreateOrderingDto) {
    console.log('controler');
    return this.orderingService.createOrder(createOrderingDto);
  }

  @Get()
  findAll() {
    
    
    return this.orderingService.findAll();
  }

  @Get('findone')
  findOne(@Query() obj) {
    console.log(obj ,'controler');
    return this.orderingService.findOne(obj);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateOrderingDto: UpdateOrderingDto) {
  //   return this.orderingService.update(+id, updateOrderingDto);
  // }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.orderingService.remove(+id);
//   }
}
