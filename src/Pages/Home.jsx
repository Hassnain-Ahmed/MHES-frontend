import { useContext, useState } from "react";
import { Navbar } from "../components/Navbar";
import { ChatWithBloomBtn } from "../components/ChatWithBloomBtn";
import { Hero } from "../components/Hero";
import { TherapistBannar } from "../components/TherapistBanner";
import { Footer } from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Aboutus from "../components/Aboutus";
import ChatWithBloom from "./ChatWithBloom";

export default function Home() {

  const { body } = document
  const [showChat, setShowChat] = useState(false)
  const toggleChat = () => {
    setShowChat(!showChat)
  }


  showChat ? body.style.overflow = "hidden" : body.style.overflow = "auto"

  const userAuth = {
    id: 0,
    name: "Hassnain Ahmed",
    profilePic: "/img1.jpg",
    token: "abc123",
  }
  // This is the initial landing page
  return (
    <>
      {
        showChat && <ChatWithBloom toggle={toggleChat} />
      }
      <Navbar user={userAuth} />
      <Hero />
      <TherapistBannar heading="OUR THERAPISTS" />
      <Aboutus class="my-5" />
      <ContactUs class="my-2 bg-[#ccc]" />
      <ChatWithBloomBtn toggle={toggleChat} />
      <Footer />
    </>
  );
}
