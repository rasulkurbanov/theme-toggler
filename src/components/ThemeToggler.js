import React, { useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const themeTogglerStyle = {
  cursor: "pointer"
}

const ThemeToggler = () => {
  const [ themeMode, setThemeMode ] = useState(ThemeContext)

  function changeHandler() {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }

  
  return (
    <div style={themeTogglerStyle}>
      <span title="switch theme">
        {themeMode === 'light' ? 'Moon' : "Sun"}
      </span>
      <button onClick={changeHandler}>Switch Theme</button>
      
    </div>
  )
}


export default ThemeToggler