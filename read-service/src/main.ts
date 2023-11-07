import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './modules/app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: process.env.GRPC_URL,
      package: 'cart_r',
      protoPath: join(__dirname, '../assets/cart-r.proto'),
    },
  });
  await app.startAllMicroservices();

  await app.listen(3200);
}
bootstrap();
