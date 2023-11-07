import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'cart',
  autoCreate: true,
})
export class CartPersistence {
  @Prop()
  readonly name: string;

  @Prop()
  readonly price: number;
}

export const CartSchema = SchemaFactory.createForClass(CartPersistence);

export type CartDocument = Document & CartPersistence;
