import { ChatWithBloomBtn } from "../components/ChatWithBloomBtn";
import { Navbar } from "../components/Navbar";
import UserDashboardHero from "../components/UserDashboardHero";

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
            <UserDashboardHero data={userAuth} />
            <ChatWithBloomBtn />
        </>
    )
}

export default UserDashboard;