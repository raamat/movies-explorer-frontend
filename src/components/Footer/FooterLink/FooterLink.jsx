import "./FooterLink.css";

export default function FooterLink({ link, text }) {
  return (
    <a
      className="footer__link opacity"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
