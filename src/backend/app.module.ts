import { Module } from '@nestjs/common';

import { ServerSideRenderModule } from './server-side-render/ssr.module';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    ServerSideRenderModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
