import { ChatWithBloom } from "../components/ChatWithBloomBtn";
import { Navbar } from "../components/Navbar";
import ProfileNav from "../components/ProfileNav";
import ProfileNavMobile from "../components/ProfileNavMobile";
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
            <Navbar user={userAuth} componentMobile={ProfileNavMobile} component={ProfileNav} />
            <UserDashboardHero data={userAuth} />
            <ChatWithBloom />
        </>
    )
}

export default UserDashboard;