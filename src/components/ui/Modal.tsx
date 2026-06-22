"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Modal component
 * @prop open       - controls visibility
 * @prop onClose    - called when backdrop or ✕ is clicked
 * @prop title      - heading shown in the modal header
 * @prop children   - body content
 * @prop footer     - optional footer slot (action buttons etc.)
 * @prop size       - "sm" | "md" | "lg"
 */

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  size = "md",
}: ModalProps) {
  // close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-canopy-deep/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* panel */}
      <div
        className={[
          "relative w-full rounded-2xl bg-parchment dark:bg-canopy shadow-xl",
          "flex flex-col max-h-[90vh]",
          sizeClasses[size],
        ].join(" ")}
      >
        {/* header */}
        {title && (
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-canopy/10 dark:border-parchment/10">
            <h2 className="font-display text-lg font-semibold text-canopy-deep dark:text-parchment">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-canopy/10 dark:hover:bg-parchment/10 transition-colors text-canopy/60 dark:text-parchment/60"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>
          </div>
        )}

        {/* body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 text-sm text-canopy/80 dark:text-parchment/80">
          {children}
        </div>

        {/* footer */}
        {footer && (
          <div className="px-6 pb-5 pt-3 border-t border-canopy/10 dark:border-parchment/10 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
