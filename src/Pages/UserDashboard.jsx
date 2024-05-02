import { Navbar } from "../components/Navbar";
import ProfileNav from "../components/ProfileNav";

const userAuth = {
    id: 1,
    name: "Hassnain Ahmed",
    token: "abc123"
}

const UserDashboard = () => {
    return (
        <>
            <Navbar user={userAuth} component={ProfileNav} />
        </>
    )
}

export default UserDashboard;