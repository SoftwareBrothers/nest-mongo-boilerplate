import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL, { useNewUrlParser: true }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
