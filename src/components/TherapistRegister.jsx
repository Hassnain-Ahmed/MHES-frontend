import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const TherapistRegister = () => {

    const userAuth = {
        id: 0,
        name: "Hassnain Ahmed",
        profilePic: "/img1.jpg",
        token: "abc123",
    }

    return (
        <>
            <Navbar user={userAuth} />
            <main>
                TherapistRegister
            </main>
            <Footer />
        </>
    )
}
