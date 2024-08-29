import { lazy, Suspense, useState } from "react"
import { helix } from "ldrs"

import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

import { TherapistRegisterStepsBar } from "./TherapistRegisterStepsBar"
import TherapistRegistrationStepExperience from "./TherapistRegistrationStepExperience"

const TherapistRegistrationStepInformation = lazy(() => import("./TherapistRegistrationStepInformation"))
const TherapistRegistrationStepEducation = lazy(() => import("./TherapistRegistrationStepEducation"))
const TherapistRegistrationStepDocuments = lazy(() => import("./TherapistRegistrationStepDocuments"))

export const TherapistRegister = () => {

    helix.register()

    const userAuth = {
        id: 0,
        name: "Hassnain Ahmed",
        profilePic: "/img1.jpg",
        token: "abc123",
    }

    // const [therepistRegisterStep, setTherepistRegisterStep] = useState(1)

    // const handleSetTherapistStep = (stepNumber) => {
    //     // setTherepistRegisterStep(parseInt(stepNumber))
    //     localStorage.setItem("therepistRegisterStep", parseInt(stepNumber))
    // }

    return (
        <>
            <Navbar user={userAuth} />
            <div className="p-5 w-full">
                <h1 className="p-2 border-b text-xl font-semibold  text-neutral-700 dark:text-neutral-300">Register Yourself as a Therapist</h1>

                <div className="w-[100%] md:w-[80%] lg:w-[70%] mx-auto pb-4 flex items-center flex-col bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-stone-700/70 dark:to-stone-800/80 rounded-lg my-5">
                    <Suspense fallback={<div><l-helix color="#555" /></div>}>
                        <TherapistRegistrationStepInformation />
                        <TherapistRegistrationStepEducation />
                        <TherapistRegistrationStepExperience />

                        <div className="col-span-2 flex items-center justify-center gap-2 mt-3">
                            <button type="button" className="py-2 px-5 rounded-lg bg-gradient-to-br from-emerald-300 to-emerald-600 text-white">Save</button>
                            <button type="button" className="py-2 px-5 rounded-lg bg-gradient-to-br from-sky-300 to-sky-600 text-white">Save & Continue</button>
                        </div>
                    </Suspense>
                </div>

            </div>
            <Footer />
        </>
    )
}
