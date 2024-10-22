import { Outlet, Route, Routes } from "react-router-dom"
import { lazy, Suspense, useEffect, useState } from 'react'

import { Footer } from "../components/home/Footer"
import { Navbar } from "../components/home/Navbar"

import ProfileNav from "../components/home/ProfileNav"
import ProfileNavMobile from "../components/home/ProfileNavMobile"
import Testimonials from "../components/patient/Testimonials"

const TherapistListing = lazy(() => import("../components/therapist/TherapistListing"))
const TherapistDashboardSidebar = lazy(() => import("../components/therapist/TherapistDashboardSidebar"))
const TherapistProfileUpdate = lazy(() => import("../components/therapist/TherapistProfileUpdate"))
const TherapistHeroEdit = lazy(() => import("../components/therapist/TherapistHeroEdit"))
const TherapistPatients = lazy(() => import("../components/therapist/TherapistPatients"))
const PatientSessions = lazy(() => import("../components/patient/PatientSessions"))
const TherapistAppointments = lazy(() => import("../components/therapist/TherapistAppointments"))

const TherapistLayout = () => {
    const [userAuth, setUserAuth] = useState(null);

    useEffect(() => {
        const credentials = JSON.parse(localStorage.getItem("credentials")) || {};
        if (!credentials?.response) {
            console.error("Credentials not found or corrupted");
        }

        const user = credentials?.response ? {
            id: credentials.response?.docId || "Unknown ID",
            name: credentials.response?.therapistData?.therapistFullName || "Unknown Therapist",
            email: credentials.response?.therapistData?.therapistEmail || "unknown@example.com",
            password: credentials.response?.therapistData?.therapistPassword || "no-password",
            profilePic: credentials.response?.therapistData?.profilePictureURL || "/placeholderProfileImg.png",
            role: credentials.response?.role || "unknown role",
        } : {};

        setUserAuth(user);
    }, []);

    if (!userAuth) {
        return <div>Loading user data...</div>; // Optionally add a loading state
    }

    return (
        <>
            <Navbar user={userAuth} componentMobile={ProfileNavMobile} component={ProfileNav} />
            <div className="flex flex-col md:flex-row items-start justify-between px-4 py-2 gap-5">
                <TherapistDashboardSidebar data={userAuth} />
                <div className="w-full">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
            <Footer />
        </>
    )
}

const Therapist = () => {
    const [userAuth, setUserAuth] = useState(null);

    useEffect(() => {
        const credentials = JSON.parse(localStorage.getItem("credentials")) || {};
        if (!credentials?.response) {
            console.error("Credentials not found or corrupted");
        }

        const user = credentials?.response ? {
            id: 1,
            name: credentials.response?.therapistData?.therapistFullName || "Unknown Therapist",
            username: "mirza.k",
            email: credentials.response?.therapistData?.therapistEmail || "unknown@example.com",
            password: credentials.response?.therapistData?.therapistPassword || "no-password",
            profilePic: credentials.response?.therapistData?.profilePictureURL || "/placeholderProfileImg.png",
        } : {};

        setUserAuth(credentials?.response);
    }, []);

    if (!userAuth) {
        return <div>Loading user data...</div>;
    }

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
                                {/* <div className="flex justify-center">
                                    <button className="bg-zinc-200 py-2 px-4 hover:bg-zinc-300 transition-colors rounded-3xl mt-2">Manage Testimonials</button>
                                </div> */}
                            </div>
                        </div>
                    } />
                <Route path="/profile" element={<TherapistProfileUpdate userData={userAuth} />} />
                <Route path="/MyPatients" element={<TherapistPatients />} />
                <Route path="/Sessions" element={<PatientSessions />} />
                <Route path="/Appointments" element={<TherapistAppointments />} />
                <Route path="/listing" element={<TherapistListing />} />
                <Route path="*" element={<TherapistProfileUpdate userData={userAuth} />} />
            </Route>
        </Routes>
    )
}

export default Therapist;