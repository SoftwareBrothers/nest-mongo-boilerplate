import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import { ROOT_ELEMENT } from './app.const';

const AppEntryPoint = (): ReactElement => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

ReactDOM.hydrate(
  <AppEntryPoint />,
  document.getElementById(ROOT_ELEMENT),
);
