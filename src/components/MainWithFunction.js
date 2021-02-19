import React, { useContext } from 'react'
import AppTheme from '../Colors'
import ThemeContext from '../context/ThemeContext'

const MainF = () => {
  const { colour, setColour } = useContext(ThemeContext)
  const currentTheme = AppTheme[colour]


  function changeColorHandler() {
    setColour(colour === "light" ? "dark" : "light")    
  }
  
  return (
    <main style={{
      padding: "1rem",
      backgroundColor: `${currentTheme.backgroundColor}`,
      color: `${currentTheme.textColor}`
    }}>
        <h1>Heading 1</h1>
        <p>This is a paragraph</p>
        <button onClick={changeColorHandler}>Switch</button>
        <h3>Current Color:</h3>
      </main>
  )

}


export default MainF