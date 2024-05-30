import { ChatWithBloomBtn } from "../components/ChatWithBloomBtn";
import { Navbar } from "../components/Navbar";
import UserDashboardHero from "../components/UserDashboardHero";

const userAuth = {
    id: 1,
    name: "Hassnain Ahmed",
    profilePic: "/img1.jpg",
    token: "abc123",
}

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