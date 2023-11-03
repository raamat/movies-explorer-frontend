import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import NavOut from "./NavOut/NavOut";
import NavIn from "./NavIn/NavIn";

import "./Navigation.css";

export default function Navigation() {
  const isAuth = useContext(CurrentUserContext).isAuth;
  return (
    <section className="navigation" isAuth={isAuth}>
      {isAuth ? <NavIn /> : <NavOut />}
    </section>
  );
}
