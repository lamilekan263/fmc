import React from "react";
import { useField } from "@formiz/core";

export const MyField = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props
  );
  const { label, type, required } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <div className={`demo-form-group ${showError ? "is-error" : ""}`}>
      <label
        className="block text-sm font-medium py-2 leading-relaxed tracking-tighter text-gray-700"
        htmlFor={id}
      >
        {label}
        {!!required && " *"}
      </label>
      <input
        id={id}
        type={type || "text"}
        value={value ?? ""}
        className={`${
          type !== "checkbox"
            ? "w-full px-4 py-2 text-base text-green-700 bg-gray-100 border-transparent rounded-lg focus:border-green-500 focus:bg-white focus:ring-0"
            : null
        }`}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setIsTouched(true)}
        aria-invalid={showError}
        aria-required={!!required}
        aria-describedby={showError ? `${id}-error` : null}
      />
      {showError && (
        <div id={`${id}-error`} className="demo-form-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
};