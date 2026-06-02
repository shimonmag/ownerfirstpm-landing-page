import { useEffect, useState } from "react";

interface StickyMobileCTAProps {
  onClaimClick: () => void;
}

export const StickyMobileCTA = ({ onClaimClick }: StickyMobileCTAProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        background: "#F02F22",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <button
        onClick={onClaimClick}
        className="w-full text-white"
        style={{
          padding: "16px 24px",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        Claim My Free Analysis
      </button>
    </div>
  );
};
