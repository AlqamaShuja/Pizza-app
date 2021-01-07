import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './components/Contact';
import Order from './components/Order';
import MainBody from './components/MainBody';
import MainHeader from './components/MainHeader';
import Navbar from './components/Navbar';
import PizzaTypes from './components/PizzaTypes';
import "./styles.css";


const Home = () => {
  return(
      <div >
        {/* <Navbar />
        <MainHeader /> */}
        <MainBody />
        <PizzaTypes />
      </div>
  );
}

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <MainHeader />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/contact" exact element={<ContactUs/>} />
        <Route path="/order" exact element={<Order/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
