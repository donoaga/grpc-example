import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CartPersistence } from './persistence/cart.persistence';
import type { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './entity/cart.entity';
@Injectable()
export class CartService {
  constructor(
    @InjectModel(CartPersistence.name)
    private cartModel: Model<CartPersistence>,
  ) {}
  async create(createCatDto: CreateCartDto): Promise<Cart> {
    const createdCat = new this.cartModel(createCatDto);
    const doc = await createdCat.save();
    return Cart.create(doc);
  }
}
