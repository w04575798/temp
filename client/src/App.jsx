import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Register from './components/Register'; 
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;