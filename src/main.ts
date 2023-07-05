import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Documentação da API - Quadrinhos Turma da Mônica')
    .setDescription(
      'A API de Quadrinhos da Turma da Mônica é uma interface de programação de aplicações (API) que permite o gerenciamento de quadrinhos e usuários relacionados ao universo da Turma da Mônica. Essa API oferece operações de CRUD (Create, Read, Update, Delete) para quadrinhos e usuários, permitindo que desenvolvedores criem aplicativos, sites ou serviços com funcionalidades de cadastro, visualização, atualização e exclusão de quadrinhos e usuários.',
    )
    .setVersion('0.1.5')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
