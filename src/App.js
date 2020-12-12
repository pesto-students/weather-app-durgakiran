import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Container from './Components/Container/Container';
import Logo from './Components/Logo/Logo';

function App() {
  return (
    <div data-test-id="App" className="App">
      <Router>
        <Logo />
        <Route path="/" component={Container} />
      </Router>
    </div>
  );
}

export default App;
