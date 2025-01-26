
import { Navbar } from "../components/home/Navbar";
import { Hero } from "../components/home/Hero";
import { TherapistBannar } from "../components/therapist/TherapistBanner";
import ContactUs from "../components/home/ContactUs";
import Aboutus from "../components/home/Aboutus";
import { Footer } from "../components/home/Footer";
import { ChatWithBloomBtn } from "../components/chatbot/ChatWithBloomBtn";



export default function Home() {

  const userAuth = {
    id: 0,
    name: "Hassnain Ahmed",
    profilePic: "/img1.jpg",
    token: "abc123",
  }
  // This is the initial landing page
  return (
    <>
      {/* <Navbar user={userAuth} /> */}
      <Hero />
      <TherapistBannar heading="OUR THERAPISTS" id="Therapist" />
      <Aboutus />
      <ContactUs />
      <ChatWithBloomBtn />
      {/* <Footer /> */}
    </>
  );
}
