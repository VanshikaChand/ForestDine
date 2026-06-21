type CanopyDividerProps = {
  flip?: boolean;
  className?: string;
};

// A hand-drawn-style treeline silhouette used in place of a plain hairline
// rule between sections — the page's one signature structural device.
export default function CanopyDivider({
  flip = false,
  className = "",
}: CanopyDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[36px] text-canopy/15"
      >
        <path
          fill="currentColor"
          d="M0,60 L0,38 L18,20 L34,38 L52,12 L70,34 L92,8 L112,32 L138,4 L160,30 L184,14 L206,36 L230,10 L256,32 L280,18 L300,38 L324,6 L348,30 L372,16 L396,36 L420,12 L444,32 L470,4 L494,28 L518,14 L540,36 L566,10 L590,30 L614,18 L636,38 L660,8 L684,30 L708,16 L732,36 L758,12 L782,32 L806,4 L830,28 L854,16 L878,36 L902,10 L926,30 L950,18 L972,38 L996,8 L1020,30 L1044,16 L1068,36 L1092,12 L1116,32 L1140,6 L1164,28 L1184,18 L1200,34 L1200,60 Z"
        />
      </svg>
    </div>
  );
}
