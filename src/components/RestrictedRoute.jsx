import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selector";


export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
    const isLogged = useSelector(selectIsLoggedIn);
    return isLogged ? <Navigate to={redirectTo} /> : Component; 
};