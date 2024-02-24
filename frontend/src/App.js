import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import React from 'react';
import Auth from './components/Balance/Auth.js';
import Balance from './components/Balance/Balance.js';
import Payment from './components/Payment/Payment';
import EnterAmount from './components/Payment/EnterAmount';

// import Header from './components/Header';
function App() {
  return <React.Fragment>
  
     
     {/* <header>
      <Header></Header>
    </header> */}
    <main>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/balance'element={<Balance/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/enteramount' element={<EnterAmount/>}></Route>


     
      
    </Routes>
  </main>
</React.Fragment>
}

export default App;
