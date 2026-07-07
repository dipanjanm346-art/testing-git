// Minimal line-icons for the six service categories. Stroke = currentColor.

const paths: Record<string, React.ReactNode> = {
  ai: (
    <>
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M12 7V4M9 12h.01M15 12h.01M9 16h6" />
    </>
  ),
  code: (
    <>
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" />
    </>
  ),
  design: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9h16M9 9v11" />
    </>
  ),
  growth: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6.3 6.3l3 3M14.7 14.7l3 3M17.7 6.3l-3 3M9.3 14.7l-3 3" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.3 5.3L4 17v3h3l5.4-5.4a4 4 0 0 0 5.3-5.3l-2.5 2.5-2.1-2.1 2.6-2.4z" />
    </>
  ),
};

export function Icon({ name, size = 20 }: { name: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
