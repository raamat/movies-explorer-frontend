import Section from "../../Section/Section";

import "./MoreButton.css";

export default function MoreButton({onClick}) {
  return (
    <Section classNameSection="more-button">
      <button className="more-button__btn opacity" onClick={() => onClick()}>Ещё</button>
    </Section>
  );
}
