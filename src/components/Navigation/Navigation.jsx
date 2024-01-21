import NavOut from "./NavOut/NavOut";
import NavIn from "./NavIn/NavIn";

import "./Navigation.css";

export default function Navigation({ isLoggedIn }) {
  return <section className="navigation">{isLoggedIn ? <NavIn /> : <NavOut />}</section>;
}
