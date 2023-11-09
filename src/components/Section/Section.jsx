import Container from "./Container/Container";

import "./Section.css";

export default function Section({ classNameSection, children }) {
  return (
    <section className={`section ${classNameSection}`}>
      <Container className={`container ${classNameSection}__container`}>
        {children}
      </Container>
    </section>
  );
}
