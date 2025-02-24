import React, { useState, FormEvent } from "react";
import "./ContactForm.scss";

import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";

interface ContactFormProps {
  phone?: string;
  email?: string;
  onSave?: (data: { phone: string; email: string }) => void;
  onCancel?: () => void;
  disabled?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  phone = "",
  email = "",
  onSave,
  onCancel,
  disabled = false,
}) => {
  const [phoneValue, setPhoneValue] = useState(phone);
  const [emailValue, setEmailValue] = useState(email);
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { phone?: string; email?: string } = {};

    const phoneRegex =
      /^((\+|00)?421\s?|0?)([89]\d{2})(\s|\u00a0)?(\d{3})(\s|\u00a0)?(\d{3})$/;
    if (!phoneValue || !phoneRegex.test(phoneValue)) {
      newErrors.phone = "Zadajte platné telefónne číslo";
    }

    const emailRegex =
      /^[a-zA-Z0-9\+\.\_\%\-\+]{1,256}\@[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}(\.[a-zA-Z0-9][a-zA-Z0-9\-]{1,25})+$/;
    if (!emailValue || !emailRegex.test(emailValue)) {
      newErrors.email = "Zadajte platnú e-mailovú adresu";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSave?.({ phone: phoneValue, email: emailValue });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <InputField
        label="Kontakt na zákazníka Telefónne číslo"
        id="phone"
        name="phone"
        type="tel"
        value={phoneValue}
        onChange={setPhoneValue}
        error={errors.phone}
        disabled={disabled}
      />

      <div className="contact-form__lower_part">
        <InputField
          label="E-mail"
          id="email"
          name="email"
          type="email"
          value={emailValue}
          onChange={setEmailValue}
          error={errors.email}
          disabled={disabled}
        />

        <p className="contact-form__description">
          Na zadaný e-mail vám budeme môcť zasielať dokumenty ak ho overíte. Po
          uložení zmien vám na tento e-mail zašleme verifikačný odkaz –
          kliknutím naň e-mail overíte.
        </p>
      </div>
      <div className="contact-form__buttons">
        <Button type="submit" variant="primary" disabled={disabled}>
          Uložiť zmeny
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          disabled={disabled}
        >
          Späť
        </Button>
      </div>
    </form>
  );
};
