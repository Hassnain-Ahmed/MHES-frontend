import { Outlet, Routes, Route } from 'react-router-dom';
import PatientDashboardProfileBannar from "../components/patient/PatientDashboardProfileBannar"
import { TherapistBannar } from "../components/therapist/TherapistBanner"
import { Footer } from "../components/home/Footer"
import { Navbar } from '../components/home/Navbar';
import { ChatWithBloomBtn } from '../components/chatbot/ChatWithBloomBtn';
import PatientProfile from '../components/patient/PatientProfile';
import PatientTherapist from '../components/patient/PatientTherapist';
import PatientSessions from '../components/patient/PatientSessions';
import PatientSubscription from '../components/patient/PatientSubscription';


const userAuth = {
    id: 1,
    name: "Hassnain Ahmed",
    username: "hassnain77",
    email: "ahmedhasnain625@gmail.com",
    password: "somePass123",
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
                <Route path='/profile' element={<PatientProfile userData={userAuth} />} />
                <Route path='/mytherapist' element={<PatientTherapist subscribed={true} />} />
                <Route path='/sessions' element={<PatientSessions />} />
                <Route path='/subscription' element={<PatientSubscription />} />
            </Route>
        </Routes>
    );
};

export default PatientDashboard