import { useLayoutEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"
// import dotenv from "dotenv"

import { LoginV2 } from './components/login/LoginV2';
import { ThemeProvider } from './context/ThemeContext';

import { AdminRoutes } from './routes/adminRoutes';
import { TherapistRoutes } from './routes/therapistRoutes';
import { PatientRoutes } from './routes/patientRoutes';

import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Therapist from './Pages/Therapist';
import PatientDashboard from './Pages/PatientDashboard';


// dotenv.config()

export default function App() {

  const servers = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
      }
    ],
    iceCandidatePoolSize: 10
  }
  let peerConnection = new RTCPeerConnection(servers)

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
