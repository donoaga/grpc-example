import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ClientsModule } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'CART_PACKAGE_R',
        transport: Transport.GRPC,
        options: {
          package: 'cart_r',
          url: process.env.READ_GRPC_URL,
          protoPath: join(__dirname, '../assets/cart-r.proto'),
        },
      },
    ]),

    ClientsModule.register([
      {
        name: 'CART_PACKAGE_W',
        transport: Transport.GRPC,
        options: {
          package: 'cart_w',
          url: process.env.WRITE_GRPC_URL,
          protoPath: join(__dirname, '../assets/cart-w.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
