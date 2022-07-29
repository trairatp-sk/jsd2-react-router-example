import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/home';
import { OtherPage } from './pages/otherPage';
import { Navbar } from './components/navbar';
import { ActivityPage } from './pages/activity';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <OtherPage />
    </div>
  );
}

export default App;
