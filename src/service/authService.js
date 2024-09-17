import axios from "axios";

const saveLoginInfo = (data) => {
    localStorage.setItem("credentials", JSON.stringify(data));
}

const isLoggedIn = () => {
    const cred = JSON.parse(localStorage.getItem("credentials"));
    const currentTime = Date.now();

    const expirationTime = cred?.response?.user?.stsTokenManager?.expirationTime;

    if (expirationTime) {
        if (currentTime > expirationTime) {
            return false;
        } else {
            return true;
        }
    }

    return false;
};

const getUserRole = () => {
    const cred = JSON.parse(localStorage.getItem("credentials"));
    if (cred) {
        return cred.response.role;
    }
}

const logout = async (navigate) => {
    const { data } = await axios.post("http://localhost:5000/api/users/logout");
    if (data?.message) {
        localStorage.clear();
        navigate("/");
    } else {
        console.error("Error Signing out");
    }
}

export const authService = {
    isLoggedIn,
    saveLoginInfo,
    getUserRole,
    logout
};