import { useEffect, useState } from 'react';
import Admin from './Pages/Admin';
import UserDashboard from './Pages/UserDashboard';
import Therapist from './Pages/Therapist';
import Home from './Pages/Home';
import LoginSignupLayout from './Pages/LoginSignupLayout';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  const htmlDark = document.querySelector('html')
  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light")
    document.querySelector('html').classList.add(themeMode)
    themeMode == "dark" ? htmlDark.style.backgroundColor = "#444" : htmlDark.style.backgroundColor = "#f9f9f9"
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      {/* <Admin /> */}
      {/* <UserDashboard /> */}
      {/* <Therapist /> */}
      {/* <LoginSignupLayout /> */}
      <Home />
    </ThemeProvider>
  )
}
