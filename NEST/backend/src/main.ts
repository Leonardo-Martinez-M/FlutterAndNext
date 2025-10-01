import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // <-- 1. Importar el Pipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
        // Opciones recomendadas para seguridad y robustez:
        whitelist: true,           // Remueve propiedades que NO están definidas en el DTO
        forbidNonWhitelisted: true, // Lanza error si se envían propiedades no definidas
        transform: true,           // Permite que el DTO sea una instancia de la clase
    }),
  );
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
