import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <main className="main">
      <Header />
      <AboutProject />
      <Student />
      <Portfolio />
      <Footer />
    </main>
  );
}
