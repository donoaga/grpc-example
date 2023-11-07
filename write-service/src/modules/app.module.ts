import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartModule } from './cart/cart.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CartModule,
    MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
})
export class AppModule {}
