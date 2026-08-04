"use client";

import React, { useId } from "react";
import { clsx } from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className,
  id,
  type = "text",
  ...props
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={inputId}
        className="font-annotation text-sm text-ink font-semibold flex items-center gap-1"
      >
        <span>{label}</span>
      </label>
      <input
        id={inputId}
        type={type}
        className={clsx(
          "w-full bg-paper px-4 py-3 border-2 border-ink text-ink font-body text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]",
          error ? "border-secondary ring-2 ring-secondary bg-red-50/50" : "neo-shadow-sm",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && (
        <span
          id={`${inputId}-error`}
          className="font-mono text-xs text-secondary font-bold flex items-center gap-1 mt-0.5"
        >
          ⚠️ {error}
        </span>
      )}
      {!error && helperText && (
        <span
          id={`${inputId}-helper`}
          className="font-mono text-xs text-gray-600 mt-0.5"
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
