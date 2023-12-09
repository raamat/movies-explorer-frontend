import "./ErrorMessage.css";

export default function ErrorMessage({ children }) {
  return <span className="error-message">{children}</span>;
}
