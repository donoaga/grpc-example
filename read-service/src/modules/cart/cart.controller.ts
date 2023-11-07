import { Controller, Get } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart, CartsListResponse } from './entity/cart.entity';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @GrpcMethod('CartReadGrpcService', 'findAll')
  findAll(): Promise<CartsListResponse> {
    return this.cartService.findAll();
  }
}
