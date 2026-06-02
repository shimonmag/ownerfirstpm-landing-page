const services = [
  {
    number: "01",
    title: "Leasing Coordination",
    body: "Market analysis, listing strategy, showing management, tenant screening, and full lease execution — from first listing to signed lease, without a single call to you.",
  },
  {
    number: "02",
    title: "Board Package & Building Coordination",
    body: "Complete preparation and submission of condo board packages, move-in/out coordination, and ongoing building communication — handled professionally, every time.",
  },
  {
    number: "03",
    title: "Tenant Communication",
    body: "Podium is your tenants' single point of contact. 24/7 responsiveness means you never receive a tenant call, text, or email again.",
  },
  {
    number: "04",
    title: "Maintenance & Vendor Management",
    body: "Trusted vetted vendors, full repair coordination, quality assurance, transparent cost reporting — and zero vendor chasing on your end.",
  },
  {
    number: "05",
    title: "Rent & Renewal Oversight",
    body: "On-time rent collection, market-rate renewal negotiations, lease documentation, and income reporting — all accountable, all automated.",
  },
  {
    number: "06",
    title: "Compliance Awareness",
    body: "NYC building registration, Local Law requirements, lease mandate monitoring, and proactive regulatory updates — nothing falls through the cracks.",
  },
];

export const ServicesGrid = () => (
  <section className="bg-[#F5F5F5] py-24 md:py-32">
    <div className="mx-auto px-6 md:px-10" style={{ maxWidth: "1280px" }}>
      <div className="max-w-[540px] mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: "28px", height: "1px", background: "#F02F22" }} />
          <span
            className="text-[#F02F22]"
            style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em" }}
          >
            FULL SCOPE
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
          What Podium Takes Off Your Plate
        </h2>
      </div>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3"
        style={{ borderTop: "1px solid #DEDEDE", borderLeft: "1px solid #DEDEDE" }}
      >
        {services.map((svc, i) => (
          <div
            key={i}
            className="p-8 md:p-10 bg-white group hover:bg-[#0A0A0A] transition-colors duration-300"
            style={{ borderRight: "1px solid #DEDEDE", borderBottom: "1px solid #DEDEDE" }}
          >
            <div
              className="text-[#F02F22] mb-5"
              style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em" }}
            >
              {svc.number}
            </div>
            <h3
              className="text-[#0A0A0A] group-hover:text-white mb-3 transition-colors duration-300"
              style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.3 }}
            >
              {svc.title}
            </h3>
            <p
              className="text-[#777] group-hover:text-[#888] transition-colors duration-300"
              style={{ fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.75 }}
            >
              {svc.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
