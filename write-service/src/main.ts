import { Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: process.env.GRPC_URL,
      package: 'cart_w',
      protoPath: join(__dirname, '../assets/cart-w.proto'),
    },
  });
  await app.startAllMicroservices();
  await app.listen(3100);
}
bootstrap();
