import { authService } from "../service/authService"

export const TherapistRoutes = ({ children }) => {
    if (authService.isLoggedIn() && authService.getUserRole() == "therapist") {
        return children
    }
    else {
        window.location.href = '/'
    }
}
