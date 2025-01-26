import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PatientExercise() {

    const [exercises, setExercises] = useState([])


    const getExercises = async () => {
        const { data } = await axios.post("https://mhes-backend.vercel.app/api/users/exercise")
        console.log(data);
        setExercises(data.message)
    }

    useEffect(() => {
        getExercises()
    }, [])


    return (
        <div className="p-5">

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 max-h-[75svh] overflow-auto">

                {
                    exercises &&
                    exercises.map(exercise => (
                        <div key={exercise?.id}>
                            <iframe
                                src={exercise.url}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className='w-full aspect-video'
                            ></iframe>
                        </div>
                    ))
                }
                {
                    exercises.length < 1 && (<span className='dark:text-white'>Loading...</span>)
                }

                {/* <div>
                    <iframe
                        src="https://www.youtube.com/embed/65snrWJTNDU"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className='w-full aspect-video'
                    ></iframe>
                </div> */}

            </div>

        </div>
    )
}
