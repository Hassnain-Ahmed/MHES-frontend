import { ChatWithBloomBtn } from "../components/ChatWithBloomBtn";
import { Navbar } from "../components/Navbar";
import PatientDashboardProfileBannar from "../components/PatientDashboardProfileBannar";

const userAuth = {
    id: 1,
    name: "Hassnain Ahmed",
    profilePic: "/img1.jpg",
    token: "abc123",
}

// This is the patient's interface component

const UserDashboard = () => {
    return (
        <>
            <Navbar user={userAuth} />
            <PatientDashboardProfileBannar data={userAuth} />
            <ChatWithBloomBtn />
            <Footer />
        </>
    )
}

export default UserDashboard;