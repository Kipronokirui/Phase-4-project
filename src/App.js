import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Footer from './components/common/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import BookAppointment from './pages/BookAppointment';
import FindSpecialist from './pages/FindSpecialist';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Navbar />
      </header>
      <main className='min-h-screen'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/book-appointment' element={<BookAppointment />} />
            <Route path='/find-specialist' element={<FindSpecialist />} />
          </Routes>
          
        </Router>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
