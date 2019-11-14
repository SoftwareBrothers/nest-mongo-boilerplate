import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import SwaggerSetup from './config/swagger.config';

import Bundler from 'parcel-bundler';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { BUNDLE_FILENAME } from '../frontend/app.const';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  SwaggerSetup(app);

  app.useStaticAssets(join(__dirname, '../public'), { prefix: '/static' });
  const bundler = new Bundler(join(__dirname, '../frontend/*.js'), {
    outDir: join(__dirname, '../public'),
    outFile: BUNDLE_FILENAME,
  });
  const express = app.get(HttpAdapterHost).httpAdapter;
  express.use(bundler.middleware());

  await app.listen(3000);
}

bootstrap();
