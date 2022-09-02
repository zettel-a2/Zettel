import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import {Global} from '@emotion/react';

import GlobalStyle from './styles/Global';

import Index from '@/pages/Index';
import Input from '@/pages/Input';
import List from '@/pages/List';
import Output from '@/pages/Output';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Global styles={GlobalStyle}/>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Index />} />
          <Route path={'input'} element={<Input />} />
          <Route path={'list'} element={<List />} />
          <Route path={'output'} element={<Output />} />
          {/* 上から順番にマッチしていく */}
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
);
