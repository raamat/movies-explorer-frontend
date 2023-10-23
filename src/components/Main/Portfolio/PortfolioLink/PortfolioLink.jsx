import "./PortfolioLink.css";
import linkArrow from "../../../../images/link-arrow.svg";

export default function PortfolioLink({ link, text }) {
  return (
    <a
      className="portfolio-link opacity"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <img
        className="link-arrow "
        src={linkArrow}
        alt="Ссылка на пункт портфолио"
        target="_blank"
      />
    </a>
  );
}
