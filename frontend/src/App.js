import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import React from 'react';
import Payment from './components/Payment/Payment';
import EnterAmount from './components/Payment/EnterAmount';
import Auth from './components/Balance/Auth.js';
import Balance from './components/Balance/Balance.js';
import Investments from './components/Investment/Investments.js';
import PaymentDone from './components/Payment/PaymentDone.js';
import IncorrectPass from './components/Payment/IncorrectPass.js';
import Profile from './components/Profile/Profile.js';
import AddBalance from './components/Balance/AddBalance.js';
import CheckBalance from './components/Balance/CheckBalance.js';
import MetaMaskLogin from './components/Login/MetaMaskLOgin.jsx';

function App() {
  return <React.Fragment>
      
    
    <main>
    <Routes>
      <Route path='/' element={<MetaMaskLogin/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/enteramount' element={<EnterAmount/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/balance' element={<Balance/>}></Route>
      <Route path='/investments' element={<Investments/>}></Route>
      <Route path='/done' element={<PaymentDone/>}></Route>
      <Route path='/again' element={<IncorrectPass/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/addbalance' element={<AddBalance/>}></Route>
      <Route path='/checkbalance' element={<CheckBalance/>}></Route>
    </Routes>
  </main>
</React.Fragment>
}

export default App;