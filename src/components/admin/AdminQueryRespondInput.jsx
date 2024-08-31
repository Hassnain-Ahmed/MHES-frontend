import { useRef, useState } from 'react'

export const AdminQueryRespondInput = ({ setShowRespondForm }) => {

    const respondsInputRef = useRef(null)
    const [respondInput, setRespondInput] = useState("")

    const handleRespondInput = () => {
        setRespondInput(respondsInputRef.current.value)
        console.log(respondInput);
    }


    return (

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="dark:bg-neutral-800 bg-neutral-400 rounded-lg p-4 m-4 w-[30%]">
                <div className="my-5">
                    <label htmlFor="responseInput">Write your response...</label>
                    <input
                        id='responseInput'
                        type="text"
                        className="rounded-md w-full my-1 p-2"
                        placeholder="Response"
                        ref={respondsInputRef}
                        onChange={handleRespondInput}
                    />
                </div>
                <button className="mx-2 p-2 rounded-md bg-emerald-200 hover:bg-green-400 transition-colors text-neutral-900">Submit</button>
                <button className="mx-2 p-2 rounded-md bg-red-400 hover:bg-red-500 transition-colors" onClick={() => { setShowRespondForm(false) }}>Close</button>
            </div>
        </div>

    )
}
