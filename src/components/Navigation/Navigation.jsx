import NavOut from "./NavOut/NavOut";
import NavIn from "./NavIn/NavIn";

import "./Navigation.css";

export default function Navigation({ isAuth }) {
  return (
    <section className="navigation" isAuth={isAuth}>
      {isAuth ? <NavIn /> : <NavOut />}
    </section>
  );
}
