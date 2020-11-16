import React from 'react';
import './App.css';
import Container from './Components/Container/Container';
import Logo from './Components/Logo/Logo';

function App() {
  return (
    <div data-test-id="App" className="App">
      <Logo />
      <Container />
    </div>
  );
}

export default App;
