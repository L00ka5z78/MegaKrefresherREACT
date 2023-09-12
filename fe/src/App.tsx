import React from 'react';
import './App.css';
import { GiftsView, NotFoundView, SingleGiftView, TestView } from './views';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/gift" element={<GiftsView />} />
        <Route path="/gift/:idOfGift" element={<SingleGiftView />} />
        <Route path="/test" element={<TestView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  );
};
