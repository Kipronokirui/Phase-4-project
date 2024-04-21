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
import ToastPage from './pages/ToastPage';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HealthcareProviderLogin from './pages/HealthcareProviderLogin';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='header'>
          <Navbar />
        </header>
        <main className='min-h-screen'>
          <ToastContainer 
            autoClose={2000}
          />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/login/healthcare-provider' element={<HealthcareProviderLogin />} />
              <Route path='/register' element={<Register />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/book-appointment' element={<BookAppointment />} />
              <Route path='/find-specialist' element={<FindSpecialist />} />
              <Route path='/toast' element={<ToastPage />} />
            </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
