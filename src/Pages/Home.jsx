import { Navbar } from "../components/Navbar";
import { ChatWithBloom } from "../components/ChatWithBloomBtn";
import { Hero } from "../components/Hero";
import { TherapistBannar } from "../components/TherapistBanner";
import { Footer } from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Aboutus from "../components/Aboutus";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TherapistBannar />
      <Aboutus class="my-5" />
      <ContactUs class="my-2 bg-[#ccc]" />
      <ChatWithBloom />
      <Footer />
    </>
  );
}
