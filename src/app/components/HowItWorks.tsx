const steps = [
  {
    number: "01",
    title: "Share Your Property Details",
    body: "Tell us about your condo — address, current occupancy status, what you're managing today, and where you need the most help. Takes under two minutes.",
  },
  {
    number: "02",
    title: "Receive Your Free Analysis",
    body: "Within one business day, you'll receive a detailed analysis of your property's management complexity, current lease standing, and Manhattan market rental rate.",
  },
  {
    number: "03",
    title: "Review Your Custom Proposal",
    body: "We present a tailored management scope and transparent pricing — no hidden fees, no long-term lock-ins, no surprises. Ask us anything.",
  },
  {
    number: "04",
    title: "Podium Takes Over",
    body: "We transition your property seamlessly. You approve major decisions. We handle everything else. Permanently.",
  },
];

interface HowItWorksProps {
  onClaimClick: () => void;
}

export const HowItWorks = ({ onClaimClick }: HowItWorksProps) => (
  <section className="bg-white py-24 md:py-32">
    <div className="mx-auto px-6 md:px-10" style={{ maxWidth: "1280px" }}>
      <div className="max-w-[520px] mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: "28px", height: "1px", background: "#F02F22" }} />
          <span
            className="text-[#F02F22]"
            style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em" }}
          >
            PROCESS
          </span>
        </div>
        <h2
          className="text-[#0A0A0A]"
          style={{
            fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          How It Works
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-0 mb-16" style={{ borderTop: "1px solid #E8E8E8" }}>
        {steps.map((step, i) => (
          <div
            key={i}
            className="group hover:bg-[#0A0A0A] transition-colors duration-300 pt-10 pb-10"
            style={{
              paddingRight: i < 3 ? "32px" : "0",
              paddingLeft: i > 0 ? "32px" : "0",
              borderRight: i < 3 ? "1px solid #E8E8E8" : "none",
            }}
          >
            <div
              className="text-[#F02F22] mb-5"
              style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.02em" }}
            >
              {step.number}
            </div>
            <h3
              className="text-[#0A0A0A] group-hover:text-white mb-3 transition-colors duration-300"
              style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.3 }}
            >
              {step.title}
            </h3>
            <p
              className="text-[#888] group-hover:text-[#888] transition-colors duration-300"
              style={{ fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.75 }}
            >
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <button
          onClick={onClaimClick}
          className="bg-[#F02F22] text-white hover:bg-[#D42820] transition-colors"
          style={{
            padding: "16px 32px",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            border: "none",
            cursor: "pointer",
          }}
        >
          CLAIM MY FREE PROPERTY ANALYSIS
        </button>
        <p
          className="text-[#999]"
          style={{ fontSize: "12px", fontWeight: 400, lineHeight: 1.5 }}
        >
          Free analysis. No commitment. $249 onboarding waiver included.
        </p>
      </div>
    </div>
  </section>
);
