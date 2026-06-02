import { useState, type CSSProperties } from "react";
import { PodiumMark } from "./PodiumMark";

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  isRented: string;
  selfManaging: string;
  helpNeeded: string[];
};

const helpOptions = [
  "Finding a new tenant",
  "Tenant management & communication",
  "Maintenance & repairs",
  "Compliance & documentation",
  "Board package coordination",
  "Full property management",
];

const inputStyle: CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#FFFFFF",
  padding: "13px 16px",
  fontSize: "14px",
  fontWeight: 400,
  fontFamily: "'Albert Sans', sans-serif",
  outline: "none",
};

const labelStyle: CSSProperties = {
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.2em",
  color: "#666",
  display: "block",
  marginBottom: "8px",
};

export const LeadForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    isRented: "",
    selfManaging: "",
    helpNeeded: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const getFocusStyle = (field: string): CSSProperties => ({
    ...inputStyle,
    border: focused === field ? "1px solid #F02F22" : inputStyle.border,
  });

  const handleHelpToggle = (option: string) => {
    setForm((prev) => ({
      ...prev,
      helpNeeded: prev.helpNeeded.includes(option)
        ? prev.helpNeeded.filter((o) => o !== option)
        : [...prev.helpNeeded, option],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    const formData: Record<string, string> = {
      "form-name": "ownerfirstpm-contact",
      "bot-field": "",
      name: form.name,
      email: form.email,
      phone: form.phone,
      propertyAddress: form.address,
      lead_source: "Google Ads",
      pipeline_stage: "New Lead",
      status: "Active",
    };

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      window.location.href = "/thank-you/";
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="bg-[#0A0A0A] py-24 md:py-32" id="lead-form">
        <div
          className="mx-auto px-6 md:px-10 flex flex-col items-center text-center"
          style={{ maxWidth: "640px" }}
        >
          <PodiumMark size={36} />
          <h2
            className="text-white mt-8 mb-4"
            style={{ fontSize: "1.75rem", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em" }}
          >
            Thank you, {form.name.split(" ")[0]}.
          </h2>
          <p
            className="text-[#777] mb-8"
            style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.7 }}
          >
            Your free Manhattan condo management analysis has been requested. One of our property
            specialists will contact you within one business day.
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px", width: "100%" }}>
            <div
              className="text-white"
              style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em" }}
            >
              PODIUM PROPERTY MANAGEMENT
            </div>
            <div
              className="text-[#555]"
              style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.15em", marginTop: "6px" }}
            >
              MANHATTAN, NEW YORK
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32" id="lead-form">
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: "1280px" }}>
        <div className="grid lg:grid-cols-[440px_1fr] gap-16 lg:gap-24">
          {/* Left: Headline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: "28px", height: "1px", background: "#F02F22" }} />
              <span
                className="text-[#F02F22]"
                style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em" }}
              >
                FREE ANALYSIS
              </span>
            </div>
            <h2
              className="text-white mb-6"
              style={{
                fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Get Your Free Manhattan Condo Management Analysis
            </h2>
            <p
              className="text-[#666] mb-10"
              style={{ fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.75 }}
            >
              Tell us about your condo and current management setup. We will review the opportunity
              and show where Podium can help reduce friction, protect the asset, and free up your time.
            </p>

            <div>
              <div
                className="text-[#555] mb-4"
                style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em" }}
              >
                YOUR ANALYSIS MAY INCLUDE
              </div>
              <div className="space-y-3">
                {[
                  "Current rental and renewal opportunity",
                  "Tenant and leasing status review",
                  "Board package and compliance friction points",
                  "Estimated turnover and leasing cost exposure",
                  "Recommended Podium management plan",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="bg-[#F02F22] rounded-full flex-shrink-0 mt-[6px]"
                      style={{ width: "4px", height: "4px" }}
                    />
                    <span
                      className="text-[#888]"
                      style={{ fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            name="ownerfirstpm-contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            {/* Netlify hidden fields */}
            <input type="hidden" name="form-name" value="ownerfirstpm-contact" />
            <input type="hidden" name="lead_source" value="Google Ads" />
            <input type="hidden" name="pipeline_stage" value="New Lead" />
            <input type="hidden" name="status" value="Active" />
            <p style={{ display: "none" }}>
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label style={labelStyle}>NAME</label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  required
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  style={getFocusStyle("name")}
                />
              </div>
              <div>
                <label style={labelStyle}>EMAIL</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  required
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  style={getFocusStyle("email")}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label style={labelStyle}>PHONE</label>
                <input
                  type="tel"
                  placeholder="(212) 000-0000"
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  style={getFocusStyle("phone")}
                />
              </div>
              <div>
                <label style={labelStyle}>PROPERTY ADDRESS OR NEIGHBORHOOD</label>
                <input
                  type="text"
                  placeholder="e.g. UWS, Tribeca, 123 W 72nd St"
                  value={form.address}
                  onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))}
                  onFocus={() => setFocused("address")}
                  onBlur={() => setFocused(null)}
                  style={getFocusStyle("address")}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label style={labelStyle}>IS THE APARTMENT CURRENTLY RENTED?</label>
                <div className="flex gap-3">
                  {["Yes", "No"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, isRented: opt }))}
                      className="flex-1 transition-colors"
                      style={{
                        padding: "13px 16px",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        border: form.isRented === opt
                          ? "1px solid #F02F22"
                          : "1px solid rgba(255,255,255,0.12)",
                        background: form.isRented === opt ? "rgba(240,47,34,0.1)" : "rgba(255,255,255,0.05)",
                        color: form.isRented === opt ? "#F02F22" : "#888",
                        cursor: "pointer",
                        fontFamily: "'Albert Sans', sans-serif",
                      }}
                    >
                      {opt.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>ARE YOU CURRENTLY MANAGING IT YOURSELF?</label>
                <div className="flex gap-3">
                  {["Yes", "No"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, selfManaging: opt }))}
                      className="flex-1 transition-colors"
                      style={{
                        padding: "13px 16px",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        border: form.selfManaging === opt
                          ? "1px solid #F02F22"
                          : "1px solid rgba(255,255,255,0.12)",
                        background: form.selfManaging === opt ? "rgba(240,47,34,0.1)" : "rgba(255,255,255,0.05)",
                        color: form.selfManaging === opt ? "#F02F22" : "#888",
                        cursor: "pointer",
                        fontFamily: "'Albert Sans', sans-serif",
                      }}
                    >
                      {opt.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label style={labelStyle}>WHAT DO YOU NEED HELP WITH?</label>
              <div className="grid sm:grid-cols-2 gap-2">
                {helpOptions.map((opt) => {
                  const selected = form.helpNeeded.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleHelpToggle(opt)}
                      className="text-left transition-colors"
                      style={{
                        padding: "11px 16px",
                        fontSize: "12px",
                        fontWeight: selected ? 700 : 400,
                        border: selected
                          ? "1px solid #F02F22"
                          : "1px solid rgba(255,255,255,0.1)",
                        background: selected ? "rgba(240,47,34,0.08)" : "rgba(255,255,255,0.03)",
                        color: selected ? "#F02F22" : "#888",
                        cursor: "pointer",
                        fontFamily: "'Albert Sans', sans-serif",
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#F02F22] text-white hover:bg-[#D42820] transition-colors"
                style={{
                  padding: "18px 32px",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Albert Sans', sans-serif",
                }}
              >
                CLAIM MY FREE PROPERTY ANALYSIS
              </button>
              <p
                className="text-center text-[#444] mt-4"
                style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.06em" }}
              >
                Limited-time offer. No commitment required. Subject to property review.
              </p>
            </div>

            {/* WhatsApp secondary option */}
            <div
              className="pt-8 mt-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p
                className="text-[#888] mb-1"
                style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em" }}
              >
                Prefer to start by message?
              </p>
              <p
                className="text-[#555] mb-5"
                style={{ fontSize: "12px", fontWeight: 400, lineHeight: 1.6 }}
              >
                Send us your property address or neighborhood on WhatsApp and we'll tell you if Podium is a fit.
              </p>
              <a
                href="https://wa.me/16465510375"
                target="_blank"
                rel="noopener noreferrer"
                data-id="cta-whatsapp-final"
                className="inline-flex items-center gap-3 w-full justify-center hover:bg-white/[0.06] transition-colors"
                style={{
                  padding: "14px 24px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.03)",
                  color: "#CCCCCC",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  fontFamily: "'Albert Sans', sans-serif",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  style={{ flexShrink: 0, opacity: 0.75 }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Message Podium on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
