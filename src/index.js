import './index.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import { QueryClientProvider,QueryClient } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient();
ReactDom.render(
  <QueryClientProvider client={client}>
    <App/>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider> ,
  document.getElementById('root')
)