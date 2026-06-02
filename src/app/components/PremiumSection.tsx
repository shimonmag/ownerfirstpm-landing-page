export const PremiumSection = () => (
  <section
    className="bg-[#0A0A0A] py-24 md:py-32"
    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
  >
    <div className="mx-auto px-6 md:px-10" style={{ maxWidth: "1280px" }}>
      {/* Section header */}
      <div className="max-w-[600px] mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: "28px", height: "1px", background: "#F02F22" }} />
          <span
            className="text-[#F02F22]"
            style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em" }}
          >
            THE PODIUM DIFFERENCE
          </span>
        </div>
        <h2
          className="text-white"
          style={{
            fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Built for Owners Who Have Outgrown Self-Management
        </h2>
      </div>

      {/* Body copy */}
      <div
        className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "48px" }}
      >
        <div>
          <p
            className="text-[#AAAAAA] mb-8"
            style={{ fontSize: "1.0625rem", fontWeight: 400, lineHeight: 1.75 }}
          >
            Podium was created for Manhattan condo owners who want professional execution without losing visibility.
          </p>
          <p
            className="text-[#666] mb-5"
            style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.7 }}
          >
            We are not a generic property management company.
          </p>
          <p
            className="text-[#777]"
            style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.75 }}
          >
            We specialize in individual Manhattan condo units for owners who need someone to operate the day-to-day with the care, judgment, and accountability of an owner.
          </p>
        </div>

        {/* Feature quote */}
        <div className="flex items-center">
          <div
            className="w-full"
            style={{
              borderLeft: "3px solid #F02F22",
              paddingLeft: "28px",
            }}
          >
            <p
              className="text-[#CCCCCC]"
              style={{ fontSize: "1.0625rem", fontWeight: 400, lineHeight: 1.7 }}
            >
              Your financial advisor helps manage your portfolio.
            </p>
            <p
              className="text-white mt-3"
              style={{ fontSize: "1.0625rem", fontWeight: 700, lineHeight: 1.6 }}
            >
              Podium helps operate the real estate inside it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
