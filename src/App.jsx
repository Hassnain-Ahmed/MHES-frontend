import { useLayoutEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"

import { ThemeProvider } from './context/ThemeContext';
import { AdminRoutes } from './routes/adminRoutes';
import { TherapistRoutes } from './routes/therapistRoutes';
import { PatientRoutes } from './routes/patientRoutes';

import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Therapist from './Pages/Therapist';
import PatientDashboard from './Pages/PatientDashboard';
import LoginSignupLayout from './Pages/LoginSignupLayout';

import { LoginV2 } from './components/login/LoginV2';


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

        <Route path="/admin/*" element={
          <AdminRoutes>
            <Admin />
          </AdminRoutes>
        } />

        <Route path="/patient/*" element={
          <PatientRoutes>
            <PatientDashboard />
          </PatientRoutes>
        } />


        <Route path="/therapist/*" element={
          <TherapistRoutes>
            <Therapist />
          </TherapistRoutes>
        } />

        <Route path="/loginV2/*" element={<LoginV2 />} />
        <Route path="*" element={<Home />} />

      </Routes>

    </ThemeProvider>
  )
}
