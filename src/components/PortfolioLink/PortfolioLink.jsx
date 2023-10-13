import "./PortfolioLink.css";

export default function PortfolioLink({ link, text }) {
  return (
    <a className="portfolio-link" href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}
