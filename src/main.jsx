import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Favoritos from './pages/Favoritos.jsx';
import Contacto from './pages/Contacto.jsx';
import Single from './pages/Single.jsx';
import NotFound from './pages/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="favoritos" element={<Favoritos/>}/>
          <Route path="contacto" element={<Contacto/>}/>
          <Route path="evento/:id" element={<Single/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
