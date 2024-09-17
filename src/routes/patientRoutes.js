import { authService } from "../service/authService"

export const PatientRoutes = ({ children }) => {
    if (authService.isLoggedIn() && authService.getUserRole() == "user") {
        return children
    }
    else {
        window.location.href = '/'
    }
}
