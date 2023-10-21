import "./FooterLink.css";

export default function FooterLink({ link, text }) {
  return (
    <a className="footer__link" href={link} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}
