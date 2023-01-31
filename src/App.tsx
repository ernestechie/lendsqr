import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginPage, UserDetailsPage, UsersPage } from '.';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/users' element={<UsersPage />} />
      <Route path='/users/:userID' element={<UserDetailsPage />} />
    </Routes>
  );
}

export default App;
