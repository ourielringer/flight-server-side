import { Injectable } from '@nestjs/common';
import { CreateOrderingDto } from './dto/create-ordering.dto';
import { UpdateOrderingDto } from './dto/update-ordering.dto';
import { Ordering } from './entities/ordering.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderingService {

  constructor(@InjectRepository(Ordering) private readonly repo: Repository<Ordering>) { }

  createOrder(createOrderingDto: CreateOrderingDto) {
    const origin = new Ordering;
      origin.name = createOrderingDto.name
      origin.email = createOrderingDto.email
      origin.phonenumber = createOrderingDto.phonenumber
      origin.password = createOrderingDto.password

    return this.repo.save(origin);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(objorder) {
    console.log('server servic');
    console.log(objorder);
    return this.repo.find({where:{ name: objorder.username, password: objorder.password}})
  }

  update(id: number, updateOrderingDto: UpdateOrderingDto) {
    return `This action updates a #${id} ordering`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordering`;
  }
}
