import FooterHeader from "@/features/landing/components/FooterHeader";
import React from "react";
import Link from "next/link";
import Footer from "@/features/landing/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiton - Rules",
  description: "Follow the rules to keep Chiton safe and high‑quality. Violations may lead to removal or suspension—even without a report.",
  alternates: {
    canonical: "https://www.chiton.io/rules",
  },
};

const Rules = () => {
  return (
    <>
      <div className="flex flex-col 2xl:px-[16rem] lg:px-[12rem] md:px-[3.2rem] px-[1.6rem] w-full 2xl:pb-[15rem] lg:pb-[10rem] pb-[6rem]">
        <FooterHeader />

        <div className="flex md:flex-row flex-col md:items-start items-center justify-center 2xl:mt-[16rem] lg:mt-[12rem] md:mt-[10rem] mt-[8rem] 2xl:gap-[10rem] lg:gap-[6.8rem] gap-[4.8rem]">
          <div className="flex flex-col md:items-start items-center justify-center">
            <div className="flex flex-row 2xl:gap-[1.6rem] lg:gap-[1rem] md:gap-[0.8rem] gap-[0.6rem]">
              <div className="flex flex-row items-center justify-center ">
                <img
                  src="/icons/ChitonLogoDark.png"
                  alt="logo"
                  className="2xl:w-[72px] 2xl:h-[72px] lg:w-[64px] lg:h-[64px] md:w-[48px] md:h-[48px] w-[42px] h-[42px] dark:hidden block"
                />
                <img
                  src="/icons/ChitonLogoWhite.png"
                  alt="logo"
                  className="2xl:w-[52px] 2xl:h-[52px] lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[40px] h-[40px] dark:block hidden"
                />
              </div>
              <span className="2xl:text-[6.4rem] lg:text-[4.8rem] md:text-[3.2rem] text-[3.6rem] font-normal">
                Rules
              </span>
            </div>
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal 2xl:w-[60rem] lg:w-[40rem] md:w-[32rem] w-[36rem] md:text-start text-center">
              Follow the rules to keep Chiton safe and high‑quality. Violations
              may lead to removal or suspension—even without a report.
            </span>
          </div>

          <div className="flex flex-col 2xl:w-[80rem] lg:w-[64rem] md:w-[48rem] w-[32rem]">
            {/* Section 1: Why We Enforce These Rules */}
            <div id="rules-1" className="flex flex-col">
              <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                Why We Enforce These Rules
              </h3>
              <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                <p>
                  Chiton is a developer community. Clear rules keep the platform
                  safe, useful, and respectful. Following them protects users'
                  privacy and security, maintains content quality, and ensures
                  fair participation. Violations may lead to removal,
                  limitation, or suspension—even without a report.
                </p>
              </div>
            </div>

            {/* Section 2: Safety & Harm */}
            <div id="rules-2" className="flex flex-col lg:mt-[10rem] mt-[8rem]">
              <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                Safety & Harm
              </h3>
              <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    No threats, glorification of violence, or self‑harm content
                    may be removed and users directed to resources where legally
                    appropriate.
                  </li>
                  <li>
                    No harassment, bullying, doxxing, or targeted degradation of
                    individuals or groups.
                  </li>
                  <li>
                    No hate or discrimination based on protected
                    characteristics.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Sexual & Adult Content */}
            <div id="rules-3" className="flex flex-col lg:mt-[10rem] mt-[8rem]">
              <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                Sexual & Adult Content
              </h3>
              <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                <ul className="list-disc pl-6 space-y-2">
                  <li>No pornographic or sexually explicit material.</li>
                  <li>
                    Zero tolerance for sexualization of minors; accounts may be
                    terminated and reported.
                  </li>
                  <li>
                    Adult themes and nudity may be restricted or removed at our
                    discretion.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4: Integrity & Authenticity */}
            <div id="rules-4" className="flex flex-col lg:mt-[10rem] mt-[8rem]">
              <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                Integrity & Authenticity
              </h3>
              <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                <ul className="list-disc pl-6 space-y-2">
                  <li>No impersonation, deception, scams, or phishing.</li>
                  <li>
                    Respect IP: no plagiarism or copyright/trademark
                    infringement; provide attribution for code/assets.
                  </li>
                  <li>
                    Disclose promotions: label sponsored content; no deceptive
                    endorsements.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5: Privacy & Personal Data */}
            <div id="rules-5" className="flex flex-col lg:mt-[10rem] mt-[8rem]">
              <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                Privacy & Personal Data
              </h3>
              <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Do not share others' personal data (name, address, phone,
                    email, IDs) without explicit consent.
                  </li>
                  <li>
                    Do not solicit/share sensitive categories (health,
                    biometric, government IDs).
                  </li>
                  <li>
                    Do not attempt tracking or device identifier collection
                    beyond Service allowances.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6: Security & Platform Integrity */}
            <div id="rules-6" className="flex flex-col lg:mt-[10rem] mt-[8rem]">
              <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                Security & Platform Integrity
              </h3>
              <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    No vulnerability exploitation or public disclosure without
                    responsible reporting; use{" "}
                    <a href="/help" className="text-[#6299FF]">
                      Help
                    </a>{" "}
                    to report.
                  </li>
                  <li>No unauthorized access to accounts, systems, or data.</li>
                  <li>
                    No rate‑limit evasion, bot abuse, or large‑scale scraping.
                  </li>
                  <li>No spam or manipulation of engagement/ads.</li>
                </ul>
              </div>
            </div>

            {/* Section 7: Content Scope & Quality */}
            <div id="rules-7" className="flex flex-col lg:mt-[10rem] mt-[8rem]">
              <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                Content Scope & Quality
              </h3>
              <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Stay relevant to development, engineering, and professional
                    topics.
                  </li>
                  <li>
                    Choose proper visibility (Everyone, Followers, Subscribers,
                    Followers & Subscribers); public posts may be discoverable
                    on and off Chiton.
                  </li>
                  <li>
                    Extremely low‑quality, misleading, or off‑topic content may
                    be limited or removed.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8: Commercial & Transactions */}
            <div id="rules-8" className="flex flex-col lg:mt-[10rem] mt-[8rem]">
              <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                Commercial & Transactions
              </h3>
              <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Limited self‑promotion is allowed if relevant and
                    transparent.
                  </li>
                  <li>
                    No sale of illicit goods/services, accounts, or access
                    tokens.
                  </li>
                  <li>
                    Use Stripe for paid features; off‑platform payment requests
                    are prohibited.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 9: AI, Code, and Research */}
            <div id="rules-9" className="flex flex-col lg:mt-[10rem] mt-[8rem]">
              <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                AI, Code, and Research
              </h3>
              <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Label AI‑assisted content; do not fabricate data, citations,
                    or benchmarks.
                  </li>
                  <li>
                    Do not post malware or exploit code; add disclaimers for
                    risky operations.
                  </li>
                  <li>
                    Respect open‑source licenses; include license notices where
                    applicable.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 10: Reporting & Enforcement */}
            <div
              id="rules-10"
              className="flex flex-col lg:mt-[10rem] mt-[8rem]"
            >
              <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                Reporting & Enforcement
              </h3>
              <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Report violations via{" "}
                    <a href="/help" className="text-[#6299FF]">
                      Help
                    </a>{" "}
                    with links and context.
                  </li>
                  <li>We may act proactively even without reports.</li>
                  <li>
                    You may appeal via{" "}
                    <a href="/help" className="text-[#6299FF]">
                      Help
                    </a>
                    ; enforcement is proportionate to severity, risk, and
                    recurrence.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 11: Repeat Violations & Evasion */}
            <div
              id="rules-11"
              className="flex flex-col lg:mt-[10rem] mt-[8rem]"
            >
              <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                Repeat Violations & Evasion
              </h3>
              <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Repeated violations may lead to permanent termination.
                  </li>
                  <li>
                    Ban evasion or alternate accounts to bypass restrictions is
                    prohibited.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Rules;
