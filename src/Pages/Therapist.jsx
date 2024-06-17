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
    // This is the therapist's Component
    return (
        <>
            <Navbar user={userAuth} componentMobile={ProfileNavMobile} component={ProfileNav} />
            <TherapistHero user={userAuth} />
            <div className="flex justify-center items-center">
                <div className="w-[80%]">
                    <Testimonials />
                </div>
            </div>
            <TherapistBannar heading="More Therapists" />
            <Footer />
        </>
    )
}

export default Therapist