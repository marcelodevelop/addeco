import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';

import store from 'store';

import { theme } from "./theme";
import GlobalStyle from "./theme/global";

import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import Posts from 'Pages/Posts';
import Album from 'Pages/Album';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="signin" index element={<SignIn />} />
              <Route path="home" element={<Home/>} />
              <Route path="posts/:id" element={<Posts/>} />
              <Route path="user/:id/album" element={<Album/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
