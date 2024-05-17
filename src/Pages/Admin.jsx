import AdminSideBar from "../components/AdminSidebar"
import AdminStatBannar from "../components/AdminStatBannar"
import AdminStatCard from "../components/AdminStatCard"
import { Navbar } from "../components/Navbar"
import ProfileNav from "../components/ProfileNav"
import ProfileNavMobile from "../components/ProfileNavMobile"

const Admin = () => {

    const userAuth = {
        id: 1,
        name: "Admin",
        profilePic: "/user.png",
        token: "abc123",
    }

    const stats = {

    }

    return (
        <>
            <Navbar user={userAuth} imgClass="scale-[0.9] border-2 border-[#ccc]" componentMobile={ProfileNavMobile} component={ProfileNav} />
            <div className="flex justify-around gap-4 mt-2 p-2 flex-col lg:flex-row ">
                <AdminSideBar />
                <AdminStatBannar />
            </div>
        </>
    )
}


export default Admin