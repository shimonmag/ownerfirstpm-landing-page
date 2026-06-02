import { useRef } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { PremiumSection } from "./components/PremiumSection";
import { ServicesGrid } from "./components/ServicesGrid";
import { CostSection } from "./components/CostSection";
import { TurnoverSection } from "./components/TurnoverSection";
import { HowItWorks } from "./components/HowItWorks";
import { LeadForm } from "./components/LeadForm";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import podiumLogo from "../imports/Logo_Horizontal_Color_01_.png";

export default function App() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-white text-[#0A0A0A]"
      style={{ fontFamily: "'Albert Sans', sans-serif" }}
    >
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Header onClaimClick={scrollToForm} />

      <main>
        <Hero onClaimClick={scrollToForm} onLearnMoreClick={scrollToServices} />
        <ProblemSection />
        <PremiumSection />

        <div ref={servicesRef} style={{ scrollMarginTop: "82px" }}>
          <ServicesGrid />
        </div>

        <CostSection onClaimClick={scrollToForm} />
        <TurnoverSection />
        <HowItWorks onClaimClick={scrollToForm} />

        <div ref={formRef} style={{ scrollMarginTop: "82px" }}>
          <LeadForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white" style={{ borderTop: "1px solid #E5E5E5" }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: "1280px" }}>

          {/* Row 1: logo left, contact block right */}
          <div
            className="flex flex-col md:flex-row md:items-center justify-between gap-6"
            style={{ padding: "32px 0 28px" }}
          >
            <ImageWithFallback
              src={podiumLogo}
              alt="Podium Property Management"
              style={{ width: "180px", height: "auto", objectFit: "contain", display: "block" }}
            />

            <div className="md:text-right" style={{ lineHeight: 1.75 }}>
              <div
                className="text-[#1A1A1A]"
                style={{ fontSize: "12px", fontWeight: 600 }}
              >
                Podium Property Management
              </div>
              <div
                className="text-[#666]"
                style={{ fontSize: "12px", fontWeight: 400 }}
              >
                135 West 50 Street, 2FL
              </div>
              <div
                className="text-[#666]"
                style={{ fontSize: "12px", fontWeight: 400 }}
              >
                New York, NY 10020
              </div>
              <div
                className="text-[#666]"
                style={{ fontSize: "12px", fontWeight: 400 }}
              >
                646.551.0375
              </div>
            </div>
          </div>

          {/* Row 2: copyright */}
          <div
            style={{ borderTop: "1px solid #F0F0F0", padding: "16px 0" }}
          >
            <span
              className="text-[#BBBBBB]"
              style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.03em" }}
            >
              © 2026 Podium Property Management. All rights reserved.
            </span>
          </div>

        </div>
      </footer>

      <StickyMobileCTA onClaimClick={scrollToForm} />
    </div>
  );
}
