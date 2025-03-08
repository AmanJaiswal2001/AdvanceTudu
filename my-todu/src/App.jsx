import { useState } from 'react'

import './App.css'

import appStore from './utils/appStore'
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import {  BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Important from './components/Important';
import Nav from './components/Nav';
import { useEffect } from 'react';
function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
      setLoading(false); // Token hai to `true` set hoga
  }, []);
  if (loading) return <div>Loading...</div>; 
  return (
    <Provider store={appStore}>
   <Nav/>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" 
       element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
       />
        <Route path="/important" 
       element={isAuthenticated ? <Important /> : <Navigate to="/" />}
       />
      
      </Routes>
    </Router>
  </Provider>
  )
}

export default App
