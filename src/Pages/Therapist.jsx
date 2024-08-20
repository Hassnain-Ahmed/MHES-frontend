import { Outlet, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from 'react'

import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

import ProfileNav from "../components/ProfileNav"
import ProfileNavMobile from "../components/ProfileNavMobile"
import Testimonials from "../components/Testimonials"

const TherapistDashboardSidebar = lazy(() => import("../components/TherapistDashboardSidebar"))
const PatientProfile = lazy(() => import("../components/PatientProfile"))
const TherapistHeroEdit = lazy(() => import("../components/TherapistHeroEdit"))
const TherapistPatients = lazy(() => import("../components/TherapistPatients"))
const PatientSessions = lazy(() => import("../components/PatientSessions"))
const TherapistAppointments = lazy(() => import("../components/TherapistAppointments"))

const userAuth = {
    id: 1,
    name: "DR. Mirza K",
    username: "mirza.k",
    email: "k.mirza.dr@gmail.com",
    password: "somePass123",
    profilePic: "/ProfileImage.png",
    token: "abc123",
}

const TherapistLayout = () => {
    return (
        <>
            <Navbar user={userAuth} componentMobile={ProfileNavMobile} component={ProfileNav} />
            <div className="flex flex-col md:flex-row items-start justify-between px-4 py-2 gap-5">
                <TherapistDashboardSidebar data={userAuth} />
                <div className="w-full">
                    <Suspense fallback={<div> Loading... </div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
            <Footer />
        </>
    )
}


const Therapist = () => {

    return (
        <Routes>
            <Route element={<TherapistLayout />}>
                <Route
                    path="/"
                    element={
                        <div className="w-full">
                            <TherapistHeroEdit user={userAuth} />
                            <div className="flex flex-col justify-center items-center relative">
                                <div className="w-[90%] mt-4">
                                    <Testimonials />
                                </div>

                                <div className="flex justify-center">
                                    <button className="bg-zinc-200 py-2 px-4 hover:bg-zinc-300 transition-colors rounded-3xl mt-2">Manage Testimonials</button>
                                </div>
                            </div>
                        </div>
                    } />

                <Route path="/profile" element={<PatientProfile userData={userAuth} />} />
                <Route path="/MyPatients" element={<TherapistPatients />} />
                <Route path="/Sessions" element={<PatientSessions />} />
                <Route path="/Appointments" element={<TherapistAppointments />} />
            </Route>
        </Routes>
    )
}

export default Therapist