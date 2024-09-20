import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TherapistHero from "../therapist/TherapistHero";
import Testimonials from "./Testimonials";

const PatientTherapist = () => {
    const [userAuth, setUserAuth] = useState();
    const [fireFetch, setFireFetch] = useState(0);
    const [userId, setUserId] = useState("");

    const getTherapist = async () => {
        try {
            const userId = JSON.parse(localStorage.getItem("credentials")).response.docId;
            const { data } = await axios.post("http://localhost:5000/api/users/byUser", { userId });
            setUserAuth(data.message[0]);
            setUserId(userId);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getTherapist();
    }, [fireFetch]);

    return (
        <div className="rounded-md md:p-5">
            {userAuth?.therapistId ? (
                <div>
                    <TherapistHero setFireFetch={setFireFetch} user={userAuth} userTherapistIDs={{ therapistId: userAuth.therapistId, userId }} />
                    <Testimonials therapistId={userAuth.therapistId} fireFetch={fireFetch} />
                </div>
            ) : (
                <div className="p-2 text-lg dark:text-white">
                    <p>No Therapist is Subscribed Yet.</p>
                    <p>
                        Click <Link to="/patient/listings" className="text-sky-500">View Therapists</Link> to subscribe
                    </p>
                </div>
            )}
        </div>
    );
};

export default PatientTherapist;