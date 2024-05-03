import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TherapistBannar } from "./components/TherapistBanner";
import { ChatWithBloom } from "./components/ChatWithBloomBtn";
import Home from "./Pages/Home";
import LoginSignupLayout from "./Pages/LoginSignupLayout";
import ContactUs from "./components/ContactUs";
import Aboutus from "./components/Aboutus";
import UserDashboard from "./Pages/UserDashboard";
// import Footer from "./components/Footer";

export default function App() {
  return <UserDashboard />
}
