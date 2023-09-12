import React from 'react';
import './App.css';
import { GiftsView, NotFoundView, TestView } from './views';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/gift" element={<GiftsView />} />
        <Route path="/test" element={<TestView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  );
};
