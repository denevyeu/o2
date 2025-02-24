import React from "react";
import "./ErrorMessage.scss";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className="error-message">{message}</div>;
};
