import { Outlet, Route, Routes } from 'react-router-dom'

import { Navbar } from '../home/Navbar'
import { Footer } from '../home/Footer'

import { UserLogin } from './UserLogin'
import { UserRegister } from './UserRegister'
import { TherapistRegister } from './TherapistRegister';
import { BecomeTherapistLoginCard } from './BecomeTherapistLoginCard';

export const LoginV2 = () => {


    const userAuth = {
        id: 0,
        name: "Hassnain Ahmed",
        profilePic: "/img1.jpg",
        token: "abc123",
    }

    const LoginLayout = () => {
        return (
            <>
                <Navbar user={userAuth} />
                <main>
                    <div className='p-5 md:p-10 flex flex-col lg:flex-row'>
                        <Outlet />
                        <BecomeTherapistLoginCard />
                    </div >
                </main>
                <Footer />
            </>
        )
    }

    return (
        <Routes>
            <Route element={<LoginLayout />}>
                <Route path='/login' element={<UserLogin />} />
                <Route path='/Register' element={<UserRegister />} />
                <Route path='/*' element={<UserLogin />} />
            </Route>
            <Route path='/Therapist' element={<TherapistRegister />} />
        </Routes>

    )
}
