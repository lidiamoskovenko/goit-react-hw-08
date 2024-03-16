import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selector";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLogged = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLogged && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};