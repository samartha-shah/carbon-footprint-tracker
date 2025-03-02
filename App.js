import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import ActivityForm from './components/dashboard/ActivityForm';
import CarbonFootprint from './components/dashboard/CarbonFootprint';
import Suggestions from './components/dashboard/Suggestions';
import Insights from './components/dashboard/Insights';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/activities" element={<ActivityForm />} />
        <Route path="/carbon-footprint" element={<CarbonFootprint />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
