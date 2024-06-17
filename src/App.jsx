import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Dashboard />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
