import { useEffect, useLayoutEffect, useState } from 'react';
import Admin from './Pages/Admin';
import Therapist from './Pages/Therapist';
import Home from './Pages/Home';
import LoginSignupLayout from './Pages/LoginSignupLayout';
import { ThemeProvider } from './context/ThemeContext';
import { Route, Routes } from "react-router-dom"
import PatientDashboard from './Pages/PatientDashboard';
import { TherapistBannar } from './components/TherapistBanner';

export default function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  const htmlDark = document.querySelector('html')
  useLayoutEffect(() => {
    document.querySelector('html').classList.remove("dark", "light")
    document.querySelector('html').classList.add(themeMode)
    themeMode == "dark" ? htmlDark.style.backgroundColor = "#444" : htmlDark.style.backgroundColor = "#f9f9f9"
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient/*" element={<PatientDashboard />} />
        <Route path="/therapist" element={<Therapist />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginSignupLayout />} />
      </Routes>

    </ThemeProvider>
  )
}
