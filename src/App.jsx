import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { Loader } from "./components/Loader/Loader.jsx";
import { Route, Routes } from "react-router-dom";
import { Layuot } from "./components/Layout.jsx";
import { Suspense } from "react";
import { RestrictedRoute } from "./components/RestrictedRoute.jsx";
import { PrivateRoute } from "./components/PrivateRoute";
import { refreshUser } from "./redux/auth/operation.js";
import { selectIsRefreshing } from "./redux/auth/selector";
import { selectIsLoading } from "./redux/contact/selector";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const RegisterPage = lazy(() => import("./pages/Register/Register"));
const LoginPage = lazy(() => import("./pages/Login/Login"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshed = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isRefreshed ? (
        <Loader />
      ) : (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layuot />}>
              <Route index element={<HomePage />} />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      )}
      {isLoading && <Loader />}
    </>
  );
};