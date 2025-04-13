import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import Portfolio from './pages/PortFolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <Router>
            <Header />
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
