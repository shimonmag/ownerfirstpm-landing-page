import { ImageWithFallback } from "./figma/ImageWithFallback";
import podiumLogo from "../../imports/Logo_Horizontal_Color_01_.png";

interface HeaderProps {
  onClaimClick: () => void;
}

export const Header = ({ onClaimClick }: HeaderProps) => (
  <header
    className="fixed top-0 left-0 right-0 z-50 bg-white"
    style={{ borderBottom: "1px solid #E5E5E5", height: "82px" }}
  >
    <div
      className="flex items-center justify-between mx-auto px-6 md:px-10 h-full"
      style={{ maxWidth: "1280px" }}
    >
      <ImageWithFallback
        src={podiumLogo}
        alt="Podium Property Management"
        style={{ width: "190px", height: "auto", objectFit: "contain", display: "block" }}
      />

      <button
        onClick={onClaimClick}
        className="hidden sm:block bg-[#F02F22] text-white hover:bg-[#D42820] transition-colors"
        style={{
          padding: "11px 22px",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          border: "none",
          cursor: "pointer",
        }}
      >
        Free Property Analysis
      </button>
    </div>
  </header>
);
