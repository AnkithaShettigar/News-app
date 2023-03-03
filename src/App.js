import React from 'react';
import Header from './components/common/header/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import Footer from './components/common/Footer/Footer';
import Culture from './components/Culture/Culture';
import Singlepage from './components/SinglePage/Singlepage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/singlepage/:id" element={<Singlepage />} />
          <Route path="/culture" element={<Culture />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
