import React from 'react';
import './App.css';
import GradientGenerator from './components/GradientGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gradient Generator Tool</h1>
      </header>
      <main>
        <GradientGenerator />
      </main>
      <footer>
        <p>Create beautiful gradients for your web projects</p>
      </footer>
    </div>
  );
}

export default App;
