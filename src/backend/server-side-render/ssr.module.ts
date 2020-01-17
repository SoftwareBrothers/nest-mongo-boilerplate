import { Module } from '@nestjs/common';

import { ServerSideRenderController } from './ssr.controller';

@Module({
  controllers: [ServerSideRenderController],
})
export class ServerSideRenderModule {}
