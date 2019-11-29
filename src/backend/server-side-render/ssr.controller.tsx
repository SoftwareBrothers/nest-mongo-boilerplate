import {
  Controller, Get, Req, Res,
} from '@nestjs/common';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';

import { ROOT_PATH } from '../../frontend/app.const';
import index from '../../frontend';
import Home from '../../frontend/components/Home';

@Controller(`${ROOT_PATH}*`)
export class ServerSideRenderController {
  @Get()
  public get(@Req() req, @Res() res): void {
    const component = renderToString(
      <Router location={req.url}>
        <Home />
      </Router>,
    );

    res.send(index({ app: component, state: {} }));
  }
}
