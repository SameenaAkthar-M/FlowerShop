import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Birthday from './pages/Birthday'
import Wedding from './pages/Wedding'
import Anniversary from './pages/Anniversary'
import Flowers from './pages/Flowers'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import CartProvider from './context/CartContext'
import Successful from './pages/Successful'
import { useLocation } from 'react-router-dom';

const AnimatedRoutes = () => {
  const location = useLocation(); // Detects route changes

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/successful" element={<Successful />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <CartProvider>
    <Navbar/>
    <AnimatedRoutes />
    <Footer/>
    </CartProvider>
  )
}

export default App