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
import PatientListings from '../components/patient/PatientListings';
import { PatientTherapistGig } from '../components/patient/PatientTherapistGig';

const PatientLayout = () => {

    const userData = JSON.parse(localStorage.getItem("credentials"))
    // console.log(userData);
    const userAuth = {
        id: userData?.response?.docId,
        name: userData?.response?.userData?.name,
        contact: userData?.response?.userData?.contact,
        email: userData?.response?.userData?.email,
        password: userData?.response?.userData?.password,
        profilePic: userData?.response?.userData?.profileUrl,
        plan: userData?.response?.subscriptionData?.plan || "Trail",
        created_at: userData?.response?.subscriptionData?.plan || "Trail",
    }

    return (
        <>
            <Navbar user={userAuth} />
            <div className="flex flex-col md:flex-row items-start justify-between px-4 py-2 gap-5">
                <PatientDashboardProfileBannar data={userAuth} />
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
            {/* <ChatWithBloomBtn /> */}
            <Footer />
        </>
    );
};

const PatientDashboard = () => {

    const userData = JSON.parse(localStorage.getItem("credentials"))
    const userAuth = {
        id: userData?.response?.docId,
        name: userData?.response?.userData?.name,
        contact: userData?.response?.userData?.contact,
        email: userData?.response?.userData?.email,
        password: userData?.response?.userData?.password,
        profilePic: userData?.response?.userData?.profileUrl
    }

    return (
        <Routes>
            <Route path='/' element={<PatientLayout />}>
                <Route path='/' element={<PatientProfile userData={userAuth} />} />
                {/* <Route path='/dashboard' element={<TherapistBannar heading="Recommended Therapists" />} /> */}
                <Route path='/profile' element={<PatientProfile userData={userAuth} />} />
                <Route path='/mytherapist' element={<PatientTherapist subscribed={true} />} />
                <Route path='/sessions' element={<PatientSessions />} />
                <Route path='/subscription' element={<PatientSubscription />} />
                <Route path='/listings' element={<PatientListings />} />
                <Route path='/chatbot' element={<PatientListings />} />
                {/* <Route path='/listings/:id' element={<PatientListings />} /> */}
                <Route path='*' element={<TherapistBannar heading="Recommended Therapists" />} />
            </Route>
        </Routes>
    );
};

export default PatientDashboard