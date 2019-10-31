import React from 'react';
import './App.css';
import Login from './components/login';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        <Routes/>
      </header>
    </div>
  );
}

export default App;
