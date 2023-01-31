import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        
        <Footer />
    </div>
  )
}

export default Home