import './App.css';
import ThemeContext from "./context/ThemeContext";
import Main from './components/MainWithClass'

function App() {
  const theme = 'dark'

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Main/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
