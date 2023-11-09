import React from "react";
import "./SectionTitle.css";

export default function SectionTitle({ className, text, children }) {
  return <h2 className={`section-title ${className}`}>{text}</h2>;
}
