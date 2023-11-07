import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Cart, CartsListResponse } from './interfaces/cart.interface';
import type { Request } from 'express';

interface CartGrpcService {
  findAll(o: {}): Promise<CartsListResponse>;
  create(request: Request): Promise<Cart>;
}

@Controller('cart')
export class AppController implements OnModuleInit {
  private cartWriteGrpcService: CartGrpcService;
  private cartReadGrpcService: CartGrpcService;

  constructor(
    @Inject('CART_PACKAGE_R') private readonly clientR: ClientGrpc,
    @Inject('CART_PACKAGE_W') private readonly clientW: ClientGrpc,
  ) {}

  onModuleInit() {
    this.cartWriteGrpcService = this.clientW.getService<CartGrpcService>(
      'CartWriteGrpcService',
    );

    this.cartReadGrpcService = this.clientR.getService<CartGrpcService>(
      'CartReadGrpcService',
    );
  }

  @Get()
  async find(): Promise<CartsListResponse> {
    return await this.cartReadGrpcService.findAll({});
  }

  @Post()
  async create(@Body() request: Request): Promise<Cart> {
    return await this.cartWriteGrpcService.create(request);
  }
}
