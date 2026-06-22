/**
 * Loader component
 * @prop variant - "spinner" | "dots" | "skeleton"
 * @prop size    - "sm" | "md" | "lg" (applies to spinner/dots)
 * @prop label   - accessible screen-reader label
 * @prop lines   - number of skeleton lines to render (skeleton variant only)
 */

export type LoaderVariant = "spinner" | "dots" | "skeleton";
export type LoaderSize = "sm" | "md" | "lg";

export type LoaderProps = {
  variant?: LoaderVariant;
  size?: LoaderSize;
  label?: string;
  lines?: number;
};

const spinnerSize = { sm: "h-4 w-4", md: "h-7 w-7", lg: "h-10 w-10" };

function Spinner({ size = "md", label }: { size: LoaderSize; label: string }) {
  return (
    <span role="status" aria-label={label} className="inline-flex">
      <svg
        className={`animate-spin text-moss dark:text-moss-light ${spinnerSize[size]}`}
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
    </span>
  );
}

function Dots({ size = "md", label }: { size: LoaderSize; label: string }) {
  const dotSize = { sm: "h-1.5 w-1.5", md: "h-2.5 w-2.5", lg: "h-3.5 w-3.5" };
  return (
    <span
      role="status"
      aria-label={label}
      className="inline-flex items-center gap-1.5"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.15}s` }}
          className={`rounded-full bg-moss dark:bg-moss-light animate-bounce ${dotSize[size]}`}
        />
      ))}
    </span>
  );
}

function Skeleton({ lines = 3 }: { lines: number }) {
  const widths = ["w-full", "w-4/5", "w-2/3", "w-3/4", "w-full"];
  return (
    <div role="status" aria-label="Loading content" className="flex flex-col gap-2 w-full">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 rounded-md bg-canopy/10 dark:bg-parchment/10 animate-pulse ${widths[i % widths.length]}`}
        />
      ))}
    </div>
  );
}

export default function Loader({
  variant = "spinner",
  size = "md",
  label = "Loading…",
  lines = 3,
}: LoaderProps) {
  if (variant === "skeleton") return <Skeleton lines={lines} />;
  if (variant === "dots") return <Dots size={size} label={label} />;
  return <Spinner size={size} label={label} />;
}
