import { type ButtonHTMLAttributes } from "react";

/**
 * Button component
 * @prop variant - "primary" | "secondary" | "ghost" | "danger"
 * @prop size    - "sm" | "md" | "lg"
 * @prop loading - shows a spinner and disables interaction
 * @prop fullWidth - stretches to full container width
 */

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-moss text-parchment hover:bg-moss-light active:bg-canopy border-transparent",
  secondary:
    "bg-transparent text-canopy-deep border-canopy/25 hover:border-moss hover:text-moss dark:text-parchment dark:border-parchment/25 dark:hover:border-moss-light dark:hover:text-moss-light",
  ghost:
    "bg-transparent border-transparent text-canopy/70 hover:text-canopy-deep hover:bg-canopy/5 dark:text-parchment/60 dark:hover:text-parchment dark:hover:bg-parchment/10",
  danger:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 border-transparent",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs rounded-lg gap-1.5",
  md: "h-10 px-5 text-sm rounded-xl gap-2",
  lg: "h-12 px-7 text-base rounded-xl gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      disabled={isDisabled}
      className={[
        "inline-flex items-center justify-center font-semibold border transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
