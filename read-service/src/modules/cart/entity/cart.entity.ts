import { CartDocument } from '../persistance/cart.persistance';

export class Cart {
  readonly id: string;
  readonly name: string;
  readonly price: number;

  constructor(entityLike: CartDocument) {
    this.id = entityLike._id.toString();
    this.name = entityLike.name;
    this.price = entityLike.price;
  }

  static create(entityLike: CartDocument): Cart {
    return new Cart(entityLike);
  }
}

export type CartsListResponse = {
  list: Cart[];
};
