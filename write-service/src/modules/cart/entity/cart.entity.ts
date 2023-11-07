import { CartDocument, CartPersistence } from '../persistence/cart.persistence';

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
