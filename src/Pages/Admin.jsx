import { Outlet, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

import AdminSideBar from "../components/admin/AdminSidebar"

import { Navbar } from "../components/home/Navbar"
import ProfileNav from "../components/home/ProfileNav"
import ProfileNavMobile from "../components/home/ProfileNavMobile"

const AdminStatBannar = lazy(() => import("../components/admin/AdminStatBannar"))
const AdminUsers = lazy(() => import("../components/admin/AdminUsers"))
const AdminQuery = lazy(() => import("../components/admin/AdminQuery"))
const PatientSessions = lazy(() => import("../components/patient/PatientSessions"))
const AdminTherapists = lazy(() => import("../components/admin/AdminTherapists"))
const AdminRevenue = lazy(() => import("../components/admin/AdminRevenue"))

const Admin = () => {

    const adminData = JSON.parse(localStorage.getItem("credentials"))

    const userAuth = {
        id: 1,
        name: "Admin",
        profilePic: "/user.png",
        token: "abc123",
        ...adminData.response
    }

    const AdminLayout = () => {
        return (
            <>
                <Navbar user={userAuth} imgClass="scale-[0.9] border-2 border-[#ccc]" componentMobile={ProfileNavMobile} component={ProfileNav} />
                <div className="flex justify-around gap-4 px-2 py-4 flex-col lg:flex-row">
                    <AdminSideBar />
                    <Suspense fallback={<div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg dark:bg-neutral-800 dark:text-white">Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </>
        )
    }


    // This is the Admin's interface component
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/" element={<AdminStatBannar />} />
                <Route path="Users" element={<AdminUsers />} />
                <Route path="Query" element={<AdminQuery />} />
                <Route path="Therapists" element={<AdminTherapists />} />
                <Route path="Revenue" element={<AdminRevenue />} />
                {/* <Route path="DB-Rec" element={<div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg dark:bg-neutral-800"><PatientSessions /> </div>} /> */}
            </Route>
        </Routes>
    )
}


export default Admin