import React from "react";
import "./InputField.scss";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  value: string;
  onChange: (val: string) => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  disabled,
}) => {
  return (
    <div className="input-field">
      <label className="input-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`input-field__input ${error ? "error" : ""}`}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};
