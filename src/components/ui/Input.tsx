import { type InputHTMLAttributes, forwardRef } from "react";

/**
 * Input component
 * @prop label      - visible label above the input
 * @prop helperText - small hint shown below the input
 * @prop error      - error message; turns border red and replaces helperText
 * @prop leftIcon   - ReactNode rendered inside the left edge
 * @prop rightIcon  - ReactNode rendered inside the right edge
 */

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, helperText, error, leftIcon, rightIcon, className = "", id, ...props },
  ref,
) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-medium text-canopy/80 dark:text-parchment/70"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3 text-canopy/40 dark:text-parchment/40 pointer-events-none">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          id={inputId}
          className={[
            "w-full rounded-xl border bg-white dark:bg-canopy/30 text-sm text-canopy-deep dark:text-parchment",
            "placeholder:text-canopy/40 dark:placeholder:text-parchment/30",
            "outline-none transition-colors",
            "focus:border-moss dark:focus:border-moss-light",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error
              ? "border-red-400 dark:border-red-500"
              : "border-canopy/15 dark:border-parchment/15",
            leftIcon ? "pl-9" : "pl-4",
            rightIcon ? "pr-9" : "pr-4",
            "py-2.5",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        />
        {rightIcon && (
          <span className="absolute right-3 text-canopy/40 dark:text-parchment/40 pointer-events-none">
            {rightIcon}
          </span>
        )}
      </div>

      {(error || helperText) && (
        <p
          className={`text-xs ${error ? "text-red-500" : "text-canopy/50 dark:text-parchment/40"}`}
        >
          {error ?? helperText}
        </p>
      )}
    </div>
  );
});

export default Input;
