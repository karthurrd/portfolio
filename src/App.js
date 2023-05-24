import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Introduction from './components/intro.js';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Introduction />
      </Router>
    </div>
  );
}

export default App;
