"use client";

import React from "react";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "forest" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  className,
  disabled,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-headline tracking-wide uppercase transition-all duration-150 border-2 border-ink cursor-pointer focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none min-h-[44px]";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:translate-x-1 active:translate-y-1 active:shadow-none neo-shadow-sm",
    secondary:
      "bg-secondary text-white hover:bg-red-800 active:translate-x-1 active:translate-y-1 active:shadow-none neo-shadow-sm",
    gold:
      "bg-tertiary-gold text-ink hover:bg-yellow-400 active:translate-x-1 active:translate-y-1 active:shadow-none neo-shadow-sm",
    forest:
      "bg-forest text-paper hover:bg-green-950 active:translate-x-1 active:translate-y-1 active:shadow-none neo-shadow-sm",
    outline:
      "bg-paper text-ink hover:bg-surface-container active:translate-x-1 active:translate-y-1 active:shadow-none neo-shadow-sm",
    ghost:
      "bg-transparent border-transparent text-ink hover:bg-surface-container-high neo-shadow-none min-h-0 border-0 p-2",
  };

  const sizeStyles = {
    sm: "px-4 py-1.5 text-lg",
    md: "px-6 py-2.5 text-xl",
    lg: "px-8 py-3.5 text-2xl",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        size !== "md" && sizeStyles[size],
        size === "md" && sizeStyles.md,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          PROCESSING...
        </span>
      ) : (
        children
      )}
    </button>
  );
};
