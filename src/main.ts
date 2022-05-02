import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 7000;
  const app = await NestFactory.create(AppModule,{
    cors: true,
  });
  app.enableCors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Accept",
    credentials: true,
  });
  await app.listen(PORT, ()=>console.log(`Server started at port = ${PORT}`));
}
bootstrap();
