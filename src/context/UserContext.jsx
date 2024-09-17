import { createContext, useState } from "react"

export const userContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState(() => ({}))

    return (
        <userContext.Provider value={user} >
            {children}
        </userContext.Provider >
    )
}