import { Navbar } from "../components/Navbar";
import { ChatWithBloom } from "../components/ChatWithBloomBtn";
import { Hero } from "../components/Hero";
import { TherapistBannar } from "../components/TherapistBanner";
import { Footer } from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Aboutus from "../components/Aboutus";
import ProfileNavMobile from "../components/ProfileNavMobile";
import ProfileNav from "../components/ProfileNav";

export default function Home() {

  const userAuth = {
    id: 1,
    name: "Hassnain Ahmed",
    profilePic: "/img1.jpg",
    token: "abc123",
  }

  return (
    <>
      <Navbar user={userAuth} componentMobile={ProfileNavMobile} component={ProfileNav} />
      <Hero />
      <TherapistBannar heading="OUR THERAPISTS" />
      <Aboutus class="my-5" />
      <ContactUs class="my-2 bg-[#ccc]" />
      <ChatWithBloom />
      <Footer />
    </>
  );
}
