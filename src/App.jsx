import { useEffect, useState } from 'react';
import Admin from './Pages/Admin';
import UserDashboard from './Pages/UserDashboard';
import Therapist from './Pages/Therapist';
import Home from './Pages/Home';
import LoginSignupLayout from './Pages/LoginSignupLayout';
import { ThemeProvider } from './context/ThemeContext';

import { Route, Routes } from "react-router-dom"

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

  {/* <Admin /> */ }
  {/* <UserDashboard /> */ }
  {/* <Therapist /> */ }
  {/* <LoginSignupLayout /> */ }
  {/* <Home /> */ }
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<UserDashboard />} />
        <Route path="/therapist" element={<Therapist />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginSignupLayout />} />
      </Routes>

    </ThemeProvider>
  )
}
