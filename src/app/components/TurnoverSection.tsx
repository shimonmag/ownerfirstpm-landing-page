const tiers = [
  {
    label: "TRADITIONAL NYC",
    sublabel: "1-month broker fee",
    fee: "1 month's rent",
    forFour: "$4,000",
    savings: "—",
    highlight: false,
    isTraditional: true,
  },
  {
    label: "TRADITIONAL NYC",
    sublabel: "15% of annual rent",
    fee: "15% of annual rent",
    forFour: "$7,200",
    savings: "—",
    highlight: false,
    isTraditional: true,
  },
  {
    label: "PODIUM CORE",
    sublabel: "90% of one month",
    fee: "90% of one month's rent",
    forFour: "$3,600",
    savings: "Up to $3,600 saved",
    highlight: false,
    isTraditional: false,
  },
  {
    label: "PODIUM SIGNATURE",
    sublabel: "75% of one month",
    fee: "75% of one month's rent",
    forFour: "$3,000",
    savings: "Up to $4,200 saved",
    highlight: true,
    isTraditional: false,
  },
  {
    label: "PODIUM RESERVE",
    sublabel: "50% of one month",
    fee: "50% of one month's rent",
    forFour: "$2,000",
    savings: "Up to $5,200 saved",
    highlight: false,
    isTraditional: false,
  },
];

export const TurnoverSection = () => (
  <section
    className="bg-[#0A0A0A] py-24 md:py-32"
    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
  >
    <div className="mx-auto px-6 md:px-10" style={{ maxWidth: "1280px" }}>
      <div className="max-w-[640px] mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: "28px", height: "1px", background: "#F02F22" }} />
          <span
            className="text-[#F02F22]"
            style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em" }}
          >
            TURNOVER ECONOMICS
          </span>
        </div>
        <h2
          className="text-white mb-6"
          style={{
            fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          In Today's NYC Market, Turnover Costs More Than Ever
        </h2>
        <p
          className="text-[#777] mb-6"
          style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.75 }}
        >
          After the FARE Act, when a broker represents the landlord or lists the apartment with the
          landlord's permission, that broker generally cannot charge the tenant a broker fee. That
          makes vacancy and leasing costs more important to model before a tenant turns over.
        </p>
      </div>

      {/* Intro summary */}
      <p
        className="text-[#999] mb-10"
        style={{ fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.7, maxWidth: "720px" }}
      >
        On a $4,000/month rental, Podium's reduced leasing structure can save owners thousands compared to a traditional 15% annual broker fee.
      </p>

      {/* Comparison table */}
      <div className="overflow-x-auto">
        <div style={{ minWidth: "640px" }}>
          {/* Table header */}
          <div
            className="grid grid-cols-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
          >
            {[
              "",
              "LEASING FEE STRUCTURE",
              "ON $4,000/MO RENTAL",
              "VS. 15% ANNUAL FEE",
            ].map((col, i) => (
              <div
                key={i}
                className="py-4 px-6"
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#777",
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                {col}
              </div>
            ))}
          </div>

          {tiers.map((tier, i) => {
            const isFirstTraditional = i === 0;
            const isSecondTraditional = i === 1;
            return (
              <div
                key={i}
                className="grid grid-cols-4"
                style={{
                  borderBottom: i < tiers.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  background: tier.highlight
                    ? "rgba(240,47,34,0.07)"
                    : isSecondTraditional
                    ? "rgba(255,255,255,0.02)"
                    : "transparent",
                }}
              >
                {/* Label */}
                <div
                  className="py-5 px-6"
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: tier.highlight ? "#F02F22" : tier.isTraditional ? "#666" : "#BBBBBB",
                  }}
                >
                  {isFirstTraditional ? (
                    <>
                      <div>{tier.label}</div>
                      <div style={{ fontSize: "9px", color: "#555", letterSpacing: "0.1em", marginTop: "3px", fontWeight: 500 }}>
                        {tier.sublabel}
                      </div>
                    </>
                  ) : isSecondTraditional ? (
                    <div style={{ fontSize: "9px", color: "#555", letterSpacing: "0.1em", fontWeight: 500, paddingTop: "2px" }}>
                      {tier.sublabel}
                    </div>
                  ) : (
                    <>
                      <div>{tier.label}</div>
                      {tier.highlight && (
                        <div style={{ fontSize: "8px", color: "#F02F22", letterSpacing: "0.1em", marginTop: "3px" }}>
                          MOST POPULAR
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Fee structure */}
                <div
                  className="py-5 px-6"
                  style={{
                    fontSize: "13px",
                    fontWeight: tier.isTraditional ? 400 : 600,
                    color: tier.isTraditional ? "#777" : "#DDDDDD",
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {tier.fee}
                </div>

                {/* Dollar amount */}
                <div
                  className="py-5 px-6"
                  style={{
                    fontSize: "14px",
                    fontWeight: tier.isTraditional ? 500 : 700,
                    color: tier.isTraditional
                      ? isSecondTraditional ? "#999" : "#777"
                      : tier.highlight ? "#F02F22" : "#DDDDDD",
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {tier.forFour}
                </div>

                {/* Savings */}
                <div
                  className="py-5 px-6"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: tier.isTraditional ? "#444" : "#5AAA72",
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {tier.savings}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footnote */}
      <p
        className="mt-4 text-[#555]"
        style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.06em" }}
      >
        * Savings calculated vs. traditional 15% of annual rent ($7,200 on a $4,000/month rental).
      </p>

      {/* Savings callout */}
      <div
        className="mt-10 p-8 md:p-10"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div
              className="text-white mb-2"
              style={{ fontSize: "1.125rem", fontWeight: 700, lineHeight: 1.3 }}
            >
              Example: $4,000/month Manhattan Condo in a Turnover Year
            </div>
            <p
              className="text-[#888]"
              style={{ fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.65 }}
            >
              A traditional 15% annual broker fee on a $4,000/month rental costs $7,200 at turnover.
              With Podium Signature, that same leasing event costs $3,000 — saving you $4,200 in a
              single turnover year, before accounting for any ongoing management efficiencies.
            </p>
          </div>
          <div className="text-right md:pl-12" style={{ whiteSpace: "nowrap" }}>
            <div
              className="text-[#5AAA72]"
              style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}
            >
              $4,200
            </div>
            <div
              className="text-[#666]"
              style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", marginTop: "4px" }}
            >
              POTENTIAL SAVINGS
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
