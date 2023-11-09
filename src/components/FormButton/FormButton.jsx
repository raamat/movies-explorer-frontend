import "./FormButton.css";

export default function FormButton({ children }) {
  return (
    <button className="form-button opacity" type="submit">
      {children}
    </button>
  );
}
