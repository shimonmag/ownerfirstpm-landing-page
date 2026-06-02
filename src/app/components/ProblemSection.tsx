const frictions = [
  {
    trigger: "Tenant calls at 11pm on a Sunday.",
    reality: "Your number is on the lease. There's no one else for them to call.",
  },
  {
    trigger: "The board needs a full package by Friday.",
    reality: "Financial statements, references, interviews — all on you to coordinate.",
  },
  {
    trigger: "The lease expires in 60 days.",
    reality: "Pricing, showings, applications, screening — it starts over again from zero.",
  },
  {
    trigger: "NYC Local Law compliance requirements changed.",
    reality: "If you're not tracking regulations, you're not complying with them.",
  },
  {
    trigger: "The HVAC needs service and the vendor won't respond.",
    reality: "You are now the project manager for a repair you didn't cause.",
  },
  {
    trigger: "The FARE Act changes who pays the broker.",
    reality: "Your leasing economics shifted. Have you modeled the new cost structure?",
  },
];

export const ProblemSection = () => (
  <section className="bg-white py-24 md:py-32">
    <div className="mx-auto px-6 md:px-10" style={{ maxWidth: "1280px" }}>
      <div className="max-w-[600px] mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: "28px", height: "1px", background: "#F02F22" }} />
          <span
            className="text-[#F02F22]"
            style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em" }}
          >
            THE HIDDEN BURDEN
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
          The Real Question Is Not Whether You Can Manage It Yourself
        </h2>
        <p
          className="text-[#0A0A0A] mb-4"
          style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.45 }}
        >
          Of course you can.
        </p>
        <p
          className="text-[#555] mb-4"
          style={{ fontSize: "1.0625rem", fontWeight: 400, lineHeight: 1.7 }}
        >
          The question is whether managing it yourself is still the best use of your time.
        </p>
        <p
          className="text-[#888]"
          style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.75 }}
        >
          Self-management may feel like control. But over time, it can become a second job you never meant to take.
        </p>
      </div>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3"
        style={{ borderTop: "1px solid #E8E8E8", borderLeft: "1px solid #E8E8E8" }}
      >
        {frictions.map((item, i) => (
          <div
            key={i}
            className="p-8 md:p-10"
            style={{ borderRight: "1px solid #E8E8E8", borderBottom: "1px solid #E8E8E8" }}
          >
            <div
              className="text-[#0A0A0A] mb-3"
              style={{ fontSize: "0.9375rem", fontWeight: 700, lineHeight: 1.4 }}
            >
              {item.trigger}
            </div>
            <div
              className="text-[#888]"
              style={{ fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.7 }}
            >
              {item.reality}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
