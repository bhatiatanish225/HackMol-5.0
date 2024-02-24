import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import React from 'react';
// import Header from './components/Header';
function App() {
  return <React.Fragment>
  
     
     {/* <header>
      <Header></Header>
    </header> */}
    <main>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>


     
      
    </Routes>
  </main>
</React.Fragment>
}

export default App;
