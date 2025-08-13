import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import './App.css'

const App: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? "light";
  const toggleTheme = themeContext?.toggleTheme ?? (() => {});

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <h1>Hooks do React</h1>
      <Navbar />
      <Outlet />
      <p>A troca de cor de tema é fornecida pelo Context</p>
      <p id='info'>O tema atual é: <span className='highlight'>{theme}</span></p>
      <div className='theme-toggle'>
        <h4>Mudar tema</h4>
        <label className="switch">
          <input 
            type="checkbox"
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  )
}

export default App
