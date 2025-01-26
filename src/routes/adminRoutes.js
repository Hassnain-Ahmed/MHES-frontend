import { authService } from "../service/authService"

export const AdminRoutes = ({ children }) => {
    if (authService.isLoggedIn() && authService.getUserRole() == "admin") {
        return children
    }
    else {
        window.location.href = '/'
    }
}
