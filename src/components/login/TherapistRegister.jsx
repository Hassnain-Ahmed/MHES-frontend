import { lazy, Suspense } from "react"
import { helix } from "ldrs"

import { Footer } from "../home/Footer"
import { Navbar } from "../home/Navbar"


const TherapistRegistrationStepInformation = lazy(() => import("./TherapistRegistrationStepInformation"))

export const TherapistRegister = () => {

    helix.register()

    const userAuth = {
        id: 0,
        name: "Hassnain Ahmed",
        profilePic: "/img1.jpg",
        token: "abc123",
    }

    // const localStorageFormState = parseInt(localStorage.getItem("therepistRegisterStep"))
    // localStorageFormState ||
    // const [therepistRegisterStep, setTherepistRegisterStep] = useState(1)

    // const handleSetTherapistStep = (stepNumber) => {
    //     setTherepistRegisterStep(parseInt(stepNumber))
    //     localStorage.setItem("therepistRegisterStep", parseInt(stepNumber))
    // }

    return (
        <>
            <Navbar user={userAuth} />
            <div className="p-5 w-full">
                <h1 className="p-2 border-b text-xl font-semibold  text-neutral-700 dark:text-neutral-300">Register Yourself as a Therapist</h1>

                {/* <div>
                    <TherapistRegisterStepsBar therepistRegisterStep={therepistRegisterStep} />
                </div> */}

                <div className="w-[100%] md:w-[80%] lg:w-[70%] mx-auto pb-4 flex items-center flex-col bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-stone-700/70 dark:to-stone-800/80 rounded-lg my-5">
                    <Suspense fallback={<div><l-helix color="#555" /></div>}>

                        <TherapistRegistrationStepInformation />

                        {/* {
                            therepistRegisterStep == 2 && (<TherapistRegistrationStepEducation handleSetTherapistStep={handleSetTherapistStep} />)
                        }

                        {
                            therepistRegisterStep == 3 && (<TherapistRegistrationStepExperience handleSetTherapistStep={handleSetTherapistStep} />)
                        } */}
                    </Suspense>
                </div>

            </div>
            <Footer />
        </>
    )
}
