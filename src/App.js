import * as React from 'react';
import './App.css';

import Home from './Home';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/> 
        <Route path='/Dashboard' element={<Dashboard />}/>
      </Routes>
      
      {/* <Hero />
      <About />
      <Contact />
      <Footer />   */}
    </div>
  );
}

export default App;
