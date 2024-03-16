import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";

export const Navigation = () => {
  const isActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const isLoggin = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={isActive}>
        Home
      </NavLink>
      {isLoggin && <NavLink to="/tasks" className={isActive}>Contacts</NavLink>}
    </nav>
  );
};