import "./FormButton.css";

export default function FormButton({ children, isFormValid, isLoading }) {
  return (
    <button
      disabled={isLoading}
      className={
        isFormValid && !isLoading
          ? "form-button form-button_activ opacity"
          : "form-button"
      }
      type="submit"
    >
      {children}
    </button>
  );
}
