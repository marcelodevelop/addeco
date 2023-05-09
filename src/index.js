import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme";
import GlobalStyle from "./theme/global";

import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="signin" index element={<SignIn />} />
            <Route path="home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
