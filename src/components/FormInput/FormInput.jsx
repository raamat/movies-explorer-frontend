import "./FormInput.css";

export default function FormInput({
  label,
  type,
  name,
  id,
  placeholder,
  minLength,
  maxLength,
  required,
  value,
  errorMessage,
  onChange,
}) {
  return (
    <label htmlFor={id} className="form-input">
      {label}
      <input
        className={`form-input__input${!!errorMessage ? " form-input_color_red" : ""}`}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        value={value}
        onChange={onChange}
      />
      {errorMessage && (
        <span className="form-input__message form-input_color_red ">{errorMessage}</span>
      )}
    </label>
  );
}
