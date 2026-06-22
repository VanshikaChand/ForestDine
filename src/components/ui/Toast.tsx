"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Toast component
 * @prop message    - text to display
 * @prop variant    - "success" | "error" | "warning" | "info"
 * @prop open       - controls visibility
 * @prop onClose    - called when toast dismisses
 * @prop duration   - auto-dismiss delay in ms (default 3500, 0 = no auto-dismiss)
 */

export type ToastVariant = "success" | "error" | "warning" | "info";

export type ToastProps = {
  message: ReactNode;
  variant?: ToastVariant;
  open: boolean;
  onClose: () => void;
  duration?: number;
};

const config: Record<
  ToastVariant,
  { bg: string; icon: React.ReactNode }
> = {
  success: {
    bg: "bg-canopy-deep dark:bg-canopy text-parchment",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
        <path
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  error: {
    bg: "bg-red-600 text-white",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
        <path
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          d="M6 6l12 12M18 6L6 18"
        />
      </svg>
    ),
  },
  warning: {
    bg: "bg-honey text-parchment",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
        <path
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        />
      </svg>
    ),
  },
  info: {
    bg: "bg-moss text-parchment",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          d="M12 8h.01M12 12v4"
        />
      </svg>
    ),
  },
};

export default function Toast({
  message,
  variant = "success",
  open,
  onClose,
  duration = 3500,
}: ToastProps) {
  useEffect(() => {
    if (!open || duration === 0) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);

  if (!open) return null;

  const { bg, icon } = config[variant];

  return (
    <div
      role="status"
      aria-live="polite"
      className={[
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3",
        "rounded-xl shadow-lg text-sm font-medium max-w-xs",
        "animate-in slide-in-from-bottom-4 fade-in",
        bg,
      ].join(" ")}
    >
      {icon}
      <span className="flex-1">{message}</span>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss"
        className="opacity-70 hover:opacity-100 transition-opacity ml-1"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
          <path
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>
      </button>
    </div>
  );
}
