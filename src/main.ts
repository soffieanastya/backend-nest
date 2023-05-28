import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config'

async function bootstrap() {

  // ini servernya
  const app = await NestFactory.create(AppModule);
  

  app.enableCors(
    // ditambah ini buat upload file
    { origin:"*"}
  );

  await app.listen(process.env.PORT, () => {
    console.log('listen on '+ process.env.PORT);
  });
}
bootstrap();
