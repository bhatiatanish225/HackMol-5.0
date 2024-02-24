import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import React from 'react';
import Payment from './components/Payment/Payment';
import EnterAmount from './components/Payment/EnterAmount';
import Auth from './components/Balance/Auth.js';
import Balance from './components/Balance/Balance.js';

function App() {
  return <React.Fragment>
    <main>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/enteramount' element={<EnterAmount/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/balance' element={<Balance/>}></Route>


     
      
    </Routes>
  </main>
</React.Fragment>
}

export default App;