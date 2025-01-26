import { useLayoutEffect, useState } from 'react';
import { Outlet, Route, Routes } from "react-router-dom"

import { LoginV2 } from './components/login/LoginV2';
import { ThemeProvider } from './context/ThemeContext';

import { AdminRoutes } from './routes/adminRoutes';
import { TherapistRoutes } from './routes/therapistRoutes';
import { PatientRoutes } from './routes/patientRoutes';

import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Therapist from './Pages/Therapist';
import PatientDashboard from './Pages/PatientDashboard';
import ChatWithBloom from './components/home/ChatWithBloom';
import VideoChatting from './components/home/VideoChatting';
import { Navbar } from './components/home/Navbar';
import { Footer } from './components/home/Footer';
import SubscriptionPackages from './components/home/SubscriptionPackages';
import ContactUs from './components/home/ContactUs';
import Aboutus from './components/home/Aboutus';
import { TherapistBannar } from './components/therapist/TherapistBanner';
import SiteMap from './components/home/SiteMap';
import TermsCondition from './components/home/TermsCondition';


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


  const HomeLayout = () => {
    const userAuth = {
      id: 0,
      name: "Hassnain Ahmed",
      profilePic: "/img1.jpg",
      token: "abc123",
    }
    return (
      <>
        <Navbar user={userAuth} />
        <Outlet />
        <Footer />
      </>
    )
  }


  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

      <Routes>

        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ChatWithBloom" element={<ChatWithBloom />} />
          <Route path="/VideoChatting" element={<VideoChatting />} />
          <Route path="/SubscriptionPackages" element={<SubscriptionPackages />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/Therapists" element={<TherapistBannar heading="OUR THERAPISTS" />} />
          <Route path="/Sitemap" element={<SiteMap />} />
          <Route path="/TermsConditions" element={<TermsCondition />} />

          <Route path="/loginV2/*" element={<LoginV2 />} />
          <Route path="*" element={<Home />} />
        </Route>

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

      </Routes>

    </ThemeProvider>
  )
}
