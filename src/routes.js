import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontpage from '../src/components/Frontpage';
import JewelleryPage from './components/JewelleryPage';
import Householdpage from './components/Householdpage';
import Mantra from './components/Mantra';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Frontpage />} />
        <Route path="/jewellery" element={<JewelleryPage />} />
        <Route path="/household" element={<Householdpage />} />
        <Route path="/mantra" element={<Mantra />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
