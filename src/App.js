import React, { useState } from 'react'
import './App.css';
import ThemeContext from "./context/ThemeContext";
import MainF from './components/MainWithFunction';

function App() {
  const [colour, setColour] = useState('dark')
  const value = {colour, setColour}

  return (
    <ThemeContext.Provider value={value}>
      <div>
        <MainF/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
