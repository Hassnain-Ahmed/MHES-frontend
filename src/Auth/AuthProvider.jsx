import { useContext, useState } from 'react'


const AuthContext = useContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const Login = (user) => {
        return setUser(user)
    }

    const Logout = (user) => {
        return setUser(user)
    }

    return (
        <div>
            he
        </div>
    )
}

export default AuthProvider