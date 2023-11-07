import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CartDocument, CartPersistence } from './persistance/cart.persistance';
import { Cart, CartsListResponse } from './entity/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(CartPersistence.name)
    private cartModel: Model<CartPersistence>,
  ) {}
  async findAll(): Promise<CartsListResponse> {
    const docs = await this.cartModel.find();
    return { list: docs.map((el: CartDocument) => Cart.create(el)) };
  }
}
