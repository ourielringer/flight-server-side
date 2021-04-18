import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderingDto } from './dto/create-ordering.dto';
import { UpdateOrderingDto } from './dto/update-ordering.dto';
import { Ordering } from './entities/ordering.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class OrderingService {

  constructor(@InjectRepository(Ordering) private readonly repo: Repository<Ordering>,public jwt: JwtService) { }

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

  findOne(createOrderingDto) {
    console.log('order servic');
    console.log(createOrderingDto);

    return this.repo.find({where:{ name: createOrderingDto.username, password: createOrderingDto.password}})
    .then(order => {
      
      if(order.length > 0){
        console.log('yea');
        
       let token = this.jwt.sign(createOrderingDto) 
        order[0]['token'] = token
        return order
      }
      else {
        console.log('else');
        
       return new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'לא נמצא',
      }, HttpStatus.FORBIDDEN);
      }
    })

  }

  update(id: number, updateOrderingDto: UpdateOrderingDto) {
    return `This action updates a #${id} ordering`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordering`;
  }
}
