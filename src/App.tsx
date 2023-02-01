import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginPage, UserDetailsPage, UsersPage } from '.';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/dashboard' element={<UsersPage />} />
      <Route path='/dashboard/:userID' element={<UserDetailsPage />} />
    </Routes>
  );
}

export default App;
