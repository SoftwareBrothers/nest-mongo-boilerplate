import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const setupSwagger = (app): void => {
  const options = new DocumentBuilder()
    .setTitle(process.env.APP_NAME)
    .setDescription(process.env.APP_DESC)
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
};

export default setupSwagger;
