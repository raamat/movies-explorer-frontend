import "./FormButton.css";

export default function FormButton({ children, isFormValid }) {
  return (
    <button
      className={
        isFormValid ? "form-button form-button_activ opacity" : "form-button"
      }
      // disabled={isFormValid}
      type="submit"
    >
      {children}
    </button>
  );
}
