import Section from "../../Section/Section";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

export default function MoviesCardList() {
  return (
   <Section classNameSection="card-list">
     <div><MoviesCard/></div>
     <div><MoviesCard/></div>
     <div><MoviesCard/></div>
     <div><MoviesCard/></div>
     <div><MoviesCard/></div>
     <div><MoviesCard/></div>
   </Section>

  );
}
