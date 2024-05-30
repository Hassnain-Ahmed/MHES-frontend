import { createContext, useState } from "react"

export const userContext = createContext({ LoggenIn: false })

const UserContext = ({ children }) => {
    const [user, setUser] = useState(() => ({ LoggenIn: false }))

    return (
        <userContext.Provider value={user} >
            {children}
        </userContext.Provider >
    )
}