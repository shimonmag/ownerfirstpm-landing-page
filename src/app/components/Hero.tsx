import { ChevronDown } from "lucide-react";

const analysisIncludes = [
  "Management gap review",
  "Leasing cost comparison",
  "Tenant and renewal review",
  "Recommended Podium plan",
];

interface OfferCardProps {
  onClaimClick: () => void;
}

const OfferCard = ({ onClaimClick }: OfferCardProps) => (
  <div
    style={{
      background: "#F4F4F2",
      border: "1px solid #E0E0DC",
      borderTop: "3px solid #F02F22",
      borderRadius: "15px",
      boxShadow: "0 12px 48px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.2)",
      overflow: "hidden",
    }}
  >
    {/* Header + CTA */}
    <div className="px-8 pt-8 pb-6" style={{ borderBottom: "1px solid #E0E0DC" }}>
      <div
        className="text-[#F02F22] mb-3"
        style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em" }}
      >
        FREE PROPERTY ANALYSIS
      </div>
      <p
        className="text-[#2C2C2C] mb-6"
        style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.55 }}
      >
        See where self-management may be costing you time, money, and opportunity.
      </p>
      <button
        onClick={onClaimClick}
        className="w-full bg-[#F02F22] text-white hover:bg-[#D42820] transition-colors"
        style={{
          height: "62px",
          fontSize: "13px",
          fontWeight: 700,
          border: "none",
          cursor: "pointer",
          letterSpacing: "0.06em",
          borderRadius: "4px",
        }}
      >
        Claim My Free Property Analysis
      </button>
      <p
        className="text-center text-[#999] mt-3"
        style={{ fontSize: "11px", fontWeight: 400, lineHeight: 1.6 }}
      >
        No commitment required. Response within one business day.
      </p>
    </div>

    {/* Checklist */}
    <div className="px-8 py-5" style={{ borderBottom: "1px solid #E0E0DC" }}>
      <div
        className="text-[#888] mb-3"
        style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em" }}
      >
        YOUR ANALYSIS INCLUDES
      </div>
      <ul className="space-y-3">
        {analysisIncludes.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span
              className="text-[#F02F22] flex-shrink-0"
              style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1 }}
            >
              ✓
            </span>
            <span
              className="text-[#2C2C2C]"
              style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.4 }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Bonus */}
    <div className="px-8 py-5">
      <div
        className="text-[#F02F22] mb-2"
        style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.24em" }}
      >
        LIMITED-TIME BONUS
      </div>
      <div
        className="text-[#1A1A1A]"
        style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.4 }}
      >
        $249 onboarding fee waived for qualified new management clients
      </div>
    </div>
  </div>
);

interface HeroProps {
  onClaimClick: () => void;
  onLearnMoreClick: () => void;
}

export const Hero = ({ onClaimClick, onLearnMoreClick }: HeroProps) => (
  <section
    className="bg-[#0A0A0A]"
    style={{ paddingTop: "82px" }}
  >
    <div
      className="mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-24 md:pb-20"
      style={{ maxWidth: "1280px" }}
    >
      {/* Two-column grid */}
      <div className="grid md:grid-cols-[1fr_460px] lg:grid-cols-[1fr_500px] gap-14 lg:gap-20 items-start">

        {/* Left: hook and pain */}
        <div className="md:pt-6">
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: "28px", height: "1px", background: "#F02F22" }} />
            <span
              className="text-[#F02F22]"
              style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em" }}
            >
              MANHATTAN CONDO MANAGEMENT
            </span>
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.6rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
            }}
          >
            Still Managing Your Manhattan Condo Yourself?
          </h1>

          <p
            className="text-[#888] mb-8"
            style={{
              fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            You bought the condo as an asset, not to become the leasing agent, tenant hotline,
            repair coordinator, board package processor, compliance tracker, and vendor manager.
          </p>

          <p
            className="text-[#909090]"
            style={{ fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.6, fontStyle: "italic" }}
          >
            Self-management may feel like control. Until it becomes a second job.
          </p>
        </div>

        {/* Right: offer card */}
        <div className="md:pt-2">
          <OfferCard onClaimClick={onClaimClick} />
        </div>
      </div>

      {/* Secondary action — quiet, below the grid */}
      <div className="mt-10">
        <button
          onClick={onLearnMoreClick}
          className="flex items-center gap-2 text-[#555] hover:text-white transition-colors"
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          SEE WHAT PODIUM HANDLES
          <ChevronDown size={13} />
        </button>
      </div>
    </div>
  </section>
);
