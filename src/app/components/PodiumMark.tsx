interface PodiumMarkProps {
  size?: number;
  color?: string;
}

export const PodiumMark = ({ size = 28, color = "#F02F22" }: PodiumMarkProps) => (
  <svg
    width={size}
    height={Math.round(size * 0.857)}
    viewBox="0 0 28 24"
    fill="none"
    aria-hidden="true"
  >
    <rect x="10" y="0" width="8" height="6" fill={color} />
    <rect x="4" y="9" width="20" height="6" fill={color} />
    <rect x="0" y="17" width="28" height="7" fill={color} />
  </svg>
);
