import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import ProfileNav from "../components/ProfileNav"
import ProfileNavMobile from "../components/ProfileNavMobile"
import Testimonials from "../components/Testimonials"
import { TherapistBannar } from "../components/TherapistBanner"
import TherapistHero from "../components/TherapistHero"

const Therapist = () => {

    const userAuth = {
        id: 1,
        name: "DR. Mirza K",
        profilePic: "/ProfileImage.png",
        token: "abc123",
    }
    return (
        <>
            <Navbar user={userAuth} componentMobile={ProfileNavMobile} component={ProfileNav} />
            <TherapistHero user={userAuth} />
            <Testimonials />
            <TherapistBannar heading="More Therapists" />
            <Footer />
        </>
    )
}

export default Therapist