import "./Message.css";

export default function Message({ children }) {
  return (
    <span
      className={`message ${
        children === "Данные успешно обновлены" && "message_color_green"
      }`}
    >
      {children}
    </span>
  );
}
