const costs = [
  {
    label: "OWNER TIME",
    title: "Owner Time",
    body: "Tenant calls, lease renewals, repairs, board packages, and follow-up all land on your desk. Each one is manageable in isolation — together, they accumulate into something else.",
  },
  {
    label: "COMPLIANCE RISK",
    title: "Compliance Risk",
    body: "NYC rentals involve notices, building requirements, access issues, and rule changes that many owners do not track closely. Staying current takes attention that most owners would rather apply elsewhere.",
  },
  {
    label: "VACANCY COST",
    title: "Vacancy Cost",
    body: "Every vacant week can reduce annual performance and create additional turnover work. Time-to-tenant matters, and so does the quality of the tenant placed.",
  },
  {
    label: "LEASING COST",
    title: "Leasing Cost",
    body: "After the FARE Act, owner-side leasing costs matter more than ever. How you structure each turnover directly affects what you net in a given year.",
  },
];

interface CostSectionProps {
  onClaimClick: () => void;
}

export const CostSection = ({ onClaimClick }: CostSectionProps) => (
  <section className="bg-white py-24 md:py-32">
    <div className="mx-auto px-6 md:px-10" style={{ maxWidth: "1280px" }}>
      <div className="grid lg:grid-cols-[400px_1fr] gap-16 lg:gap-24">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width: "28px", height: "1px", background: "#F02F22" }} />
            <span
              className="text-[#F02F22]"
              style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em" }}
            >
              REAL COSTS
            </span>
          </div>
          <h2
            className="text-[#0A0A0A] mb-6"
            style={{
              fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            What Self-Management Actually Costs You
          </h2>
          <p
            className="text-[#666] mb-10"
            style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.7 }}
          >
            None of these show up as a line item on your tax return. All of them show up in your actual returns.
          </p>
          <button
            onClick={onClaimClick}
            className="bg-[#F02F22] text-white hover:bg-[#D42820] transition-colors"
            style={{
              padding: "14px 28px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              border: "none",
              cursor: "pointer",
            }}
          >
            CLAIM FREE ANALYSIS
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-[#E8E8E8]">
          {costs.map((cost, i) => (
            <div key={i} className="bg-white group hover:bg-[#0A0A0A] transition-colors duration-300 p-8">
              <div
                className="text-[#F02F22] mb-3"
                style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.25em" }}
              >
                {cost.label}
              </div>
              <div
                className="text-[#0A0A0A] group-hover:text-white mb-3 transition-colors duration-300"
                style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.3 }}
              >
                {cost.title}
              </div>
              <p
                className="text-[#888] group-hover:text-[#888] transition-colors duration-300"
                style={{ fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.75 }}
              >
                {cost.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
