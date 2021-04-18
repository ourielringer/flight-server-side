import { Controller, Get, Post, Body, Put, Param, Delete, Query, UseGuards, SetMetadata } from '@nestjs/common';
import { OrderingService } from './ordering.service';
import { CreateOrderingDto } from './dto/create-ordering.dto';
import { UpdateOrderingDto } from './dto/update-ordering.dto';
import { AdminGuard } from './admin.guard';

@Controller('ordering')
@UseGuards(AdminGuard)
export class OrderingController {
  constructor(private readonly orderingService: OrderingService) {}

  @Post()
  createOrder(@Body() createOrderingDto: CreateOrderingDto) {
    console.log('controler', createOrderingDto);
    return this.orderingService.createOrder(createOrderingDto);
  }

  @Get()
  findAll() {
    return this.orderingService.findAll();
  }

  @Get('findone')
  findOne(@Query() createOrderingDto: CreateOrderingDto) {
    return this.orderingService.findOne(createOrderingDto);
  }

  @Get('permition')
  @SetMetadata('roles', ['admin'])
  permition(@Query() createOrderingDto: CreateOrderingDto) {
    console.log(createOrderingDto ,'controler');
    return this.orderingService.findOne(createOrderingDto);
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
