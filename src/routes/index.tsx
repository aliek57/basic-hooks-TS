import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import HookState from '../pages/HookState';
import HookEffect from '../pages/HookEffect';
import HookMemo from '../pages/HookMemo';

const IndexRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/state" element={<HookState />} />
        <Route path="/effect" element={<HookEffect />} />
        <Route path="/memo" element={<HookMemo />} />
      </Routes>
    </Router>
  );
};

export default IndexRoutes;