import { Outlet, Routes, Route } from 'react-router-dom';
import PatientDashboardProfileBannar from "../components/PatientDashboardProfileBannar"
import { TherapistBannar } from "../components/TherapistBanner"
import { Footer } from "../components/Footer"
import { Navbar } from '../components/Navbar';
import { ChatWithBloomBtn } from '../components/ChatWithBloomBtn';
import PatientProfile from '../components/PatientProfile';
import PatientTherapist from '../components/PatientTherapist';
import PatientSessions from '../components/PatientSessions';


const userAuth = {
    id: 1,
    name: "Hassnain Ahmed",
    profilePic: "/img1.jpg",
    token: "abc123",
}

const PatientLayout = () => {
    return (
        <>
            <Navbar user={userAuth} />
            <div className="flex flex-col md:flex-row items-start justify-between px-4 py-2 gap-5">
                <PatientDashboardProfileBannar data={userAuth} />
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
            <ChatWithBloomBtn />
            <Footer />
        </>
    );
};

const PatientDashboard = () => {
    return (
        <Routes>
            <Route path='/' element={<PatientLayout />}>
                <Route path='/' element={<TherapistBannar heading="Recommended Therapists" />} />
                <Route path='/profile' element={<PatientProfile />} />
                <Route path='/mytherapist' element={<PatientTherapist />} />
                <Route path='/sessions' element={<PatientSessions />} />
            </Route>
        </Routes>
    );
};

export default PatientDashboard