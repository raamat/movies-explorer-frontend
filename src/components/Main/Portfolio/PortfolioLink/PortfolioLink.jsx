import "./PortfolioLink.css";

export default function PortfolioLink({ link, text }) {
  return (
    <a
      className="portfolio-link opacity"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
