import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import {faHome} from  '@fortawesome/free-solid-svg-icons';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<ProductList/>}/>
        <Route exact path="/details" element={<Details/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Default/>}/>
      </Routes>
      <Modal></Modal>
    </React.Fragment>
  );
}

export default App;
