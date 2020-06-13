import React from 'react';
import { render } from 'react-dom';
import App from './App';

import '@mdi/font/scss/materialdesignicons.scss';
import 'assets/styles/_index.scss';

const root = document.getElementById('root') as HTMLElement;

render(<App />, root);
