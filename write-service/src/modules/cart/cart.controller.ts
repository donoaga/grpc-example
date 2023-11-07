import { Body, Controller } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './entity/cart.entity';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @GrpcMethod('CartWriteGrpcService', 'create')
  async create(@Body() createCartDto: CreateCartDto): Promise<Cart> {
    return await this.cartService.create(createCartDto);
  }
}
