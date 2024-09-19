import { useEffect, useRef, useState } from "react";
import { TherapistCard } from "../therapist/TherapistCard";
import axios from "axios";

export function PatientTherapistBanner({ heading }) {

  const subscribeBtnRef = useRef(null)

  const [therapists, setTherapists] = useState(null);

  const [showModal, setShowModel] = useState(false)
  const handleShowModel = () => {
    setShowModel(prev => !prev)
  }

  const therapistJsonFetch = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/users/listings");
      setTherapists(data);

      localStorage.setItem("therapistListings", JSON.stringify(data.message))

    } catch (error) {

      console.error("Error fetching therapist data:", error);
    }
  }

  useEffect(() => {
    therapistJsonFetch();
  }, []);

  const credentials = JSON.parse(localStorage.getItem("credentials"))

  const [userTherapistIDs, setUserTherapistIDs] = useState({
    therapistId: "",
    userId: credentials.response.docId
  })

  const [status, setStatus] = useState({
    uploading: false,
    success: false,
    error: false
  })

  const subscribeTherapist = async () => {
    try {
      subscribeBtnRef.current.disabled = true
      setStatus({
        uploading: true, success: false, error: ""
      })
      const { data } = await axios.post("http://localhost:5000/api/users/subscribeTherapist", { therapistId: userTherapistIDs.therapistId, userId: userTherapistIDs.userId })
      console.log(data);
      setStatus({
        uploading: false, success: true, error: ""
      })
      credentials.response.userData.isSubscribed = true;
    } catch (error) {
      setStatus({
        uploading: false, success: false, error: error.message
      })
      console.error(error);
    } finally {
      setTimeout(() => {
        subscribeBtnRef.current.disabled = false
        setStatus({
          uploading: false,
          success: false,
          error: ""
        })
        setShowModel(false)
        localStorage.setItem("credentials", JSON.stringify(credentials))
      }, 3000)
    }
  }

  // useEffect(() => {
  //   console.log(credentials.response.userData.isSubscribed);
  // }, [showModal])



  if (!therapists) {
    return <p className="dark:text-white">Loading...</p>;
  }

  return (
    <div className="bg-neutral-300 dark:bg-neutral-800 rounded-lg p-5">
      <h1 className="text-center font-bold text-[#555] dark:text-neutral-200 text-2xl md:text-2xl border-b mb-4">
        {heading}
      </h1>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full`}>

        {therapists.message.map((info) => (
          <div key={info.listingId} >
            <div aria-valuetext={info.therapistId} onClick={() => setUserTherapistIDs(prev => ({ ...prev, therapistId: info.therapistId }))} >
              <TherapistCard
                key={info.listingId}
                name={info.therapistDetails.therapistFullName}
                img={info.therapistDetails.profilePictureURL}
                slogan={info.slogan}
                about={info.description}
                handleShowModel={handleShowModel}
                isSubscribed={credentials.response.userData.isSubscribed}
              />
            </div>
          </div>
        ))}

      </div>

      {
        showModal &&
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-neutral-50/40 backdrop-blur-md dark:bg-neutral-600 p-4 rounded-lg">
            <p className="absolute -top-6 font-bold bg-slate-300 px-4 rounded-full animate-bounce">
              {
                status.success && "Successfully Subscribed"
              }
              {
                status.uploading && "Subscribing..."
              }
              {
                status.error && status.error
              }
            </p>
            <p className="text-xl mb-4">Are you sure you want to Unsubscribe?</p>
            <button className="px-4 py-2 rounded-full bg-emerald-400/50 hover:bg-emerald-400 transition-colors disabled:bg-emerald-200" ref={subscribeBtnRef} onClick={subscribeTherapist} >Yes, Subscribe</button>
            <button
              className="px-4 py-2 rounded-full border-2 border-neutral-700 hover:bg-neutral-700 hover:text-white ml-2 transition-colors"
              onClick={handleShowModel}
            >
              Cancel
            </button>
          </div>
        </div>
      }

    </div >
  );
}
