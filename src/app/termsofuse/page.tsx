import React from "react";
import FooterHeader from "@/features/landing/components/FooterHeader";
import Footer from "@/features/landing/components/Footer";
import { Metadata } from "next";
import "@/features/landing/styles/footer.css";

export const metadata: Metadata = {
  title: "Chiton - Terms of Use",
  description:
    "Chiton's terms of use govern your access to and use of our platform.",
  alternates: {
    canonical: "https://www.chiton.io/termsofuse",
  },
};

const TermsOfUse = () => {
  return (
    <>
      <div className="flex flex-col 2xl:px-[16rem] lg:px-[12rem] md:px-[3.2rem] px-[1.6rem] w-full 2xl:pb-[15rem] lg:pb-[10rem] pb-[6rem]">
        <FooterHeader />

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="2xl:mt-[16rem] lg:mt-[12rem] md:mt-[10rem] mt-[8rem] 2xl:text-[6.4rem] lg:text-[4.8rem] md:text-[3.2rem] text-[3.6rem] font-normal">
            Terms of Use
          </h1>
          <h2 className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal  2xl:w-[120rem] lg:w-[80rem] md:w-[64rem] w-[36rem] mx-auto text-center">
            By using Chiton, you agree to these Terms of Use, which govern
            your access to and use of our platform. These terms outline your
            rights, responsibilities, and limitations while using our services.
          </h2>

          <div className="w-full flex flex-col items-center justify-between 2xl:mt-[16rem] lg:mt-[12rem] md:mt-[10rem] mt-[8rem] 2xl:px-[10rem] lg:px-[6rem] px-[3rem] min-h-screen">
            <div className="flex flex-col 2xl:w-[80rem] lg:w-[64rem] md:w-[48rem] w-[32rem]">
              {/* Section 1: Purpose & Acceptance */}
              <div id="termsofuse-1" className="flex flex-col">
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Purpose & Acceptance
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    By accessing or using Chiton ("Service"), you agree to
                    these Terms of Use ("Terms"). If you do not agree, do not
                    use the Service. These Terms incorporate the Privacy Policy
                    by reference. Capitalized terms not defined here have the
                    meanings provided in the Privacy Policy or other Service
                    documentation.
                    <br />
                    Chiton complies with the laws and regulations of the
                    Republic of Korea. Personal information is handled in
                    accordance with our Privacy Policy and applicable data
                    protection laws.
                  </p>
                </div>
              </div>

              {/* Section 2: Eligibility */}
              <div
                id="termsofuse-2"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Eligibility (18+)
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    You must be at least 18 years old, or the age of legal
                    majority in your country of residence—whichever is higher—to
                    create an account or use interactive features (posting,
                    commenting, saving, notifications). If we learn that age or
                    eligibility was misrepresented, we may suspend or delete the
                    account and associated data in accordance with these Terms
                    and applicable law. Public content may be viewed without
                    login. <br />
                    Users who are minors under the applicable law of their
                    country may use the Service only with verified parental or
                    guardian consent. Access to certain features may be
                    restricted for such users.
                  </p>
                </div>
              </div>

              {/* Section 3: Accounts & Security */}
              <div
                id="termsofuse-3"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Accounts & Security
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Individual account:</strong> Accounts are for
                      personal use and are non-transferable.
                    </li>
                    <li>
                      <strong>Credentials:</strong> You are responsible for
                      safeguarding your login credentials and for all activity
                      under your account.
                    </li>
                    <li>
                      <strong>Unauthorized access:</strong> Report suspected
                      unauthorized access via{" "}
                      <a href="/help" className="text-[#6299FF]">
                        Help
                      </a>
                      ; we may take protective measures (e.g., suspension,
                      investigation).
                    </li>
                  </ul>
                  <br />
                  <p>
                    Passwords are securely encrypted and stored. If you suspect
                    any unauthorized access or data breach, you must report it
                    immediately through the Help page.
                  </p>
                </div>
              </div>

              {/* Section 4: Mandatory Consent at Sign-Up */}
              <div
                id="termsofuse-4"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Mandatory Consent at Sign‑Up
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Required consent:</strong> Account creation
                      requires agreement to personal data collection and use,
                      including cookies for authentication and session
                      continuity, as described in the Privacy Policy.
                    </li>
                    <li>
                      <strong>No opt‑out in settings:</strong> If you do not
                      agree at required consent, you cannot create an account.
                      After sign‑up, these required consents cannot be changed
                      in{" "}
                      <a href="/settings" className="text-[#6299FF]">
                        settings
                      </a>{" "}
                      unless required by applicable law.
                    </li>
                  </ul>
                  <br />
                  <p>
                    All personal data collection and use are subject to the
                    applicable data protection laws, including user rights to
                    access, correction, and deletion as provided by law.
                  </p>
                </div>
              </div>

              {/* Section 5: Language */}
              <div
                id="termsofuse-5"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Language
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>The Service is provided in English only.</p>
                </div>
              </div>

              {/* Section 6: User Content & Visibility */}
              <div
                id="termsofuse-6"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  User Content & Visibility
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Ownership:</strong> You retain rights in the
                      content you upload, subject to the limited license below.
                    </li>
                    <li>
                      <strong>Audience controls:</strong> For each post, you may
                      choose its audience: Everyone, Followers, Subscribers, or
                      Followers & Subscribers. Content shared to public areas
                      may be visible to anyone and discoverable via search.
                    </li>
                    <li>
                      <strong>Edits & deletion:</strong> You may edit or delete
                      your own posts and comments. Deleted items are removed
                      immediately and are not backed up.
                    </li>
                    <li>
                      <strong>Your responsibility:</strong> Select audiences
                      carefully and comply with law and these Terms when
                      posting.
                    </li>
                  </ul>
                  <br />
                  <p>
                    Users are solely responsible for their own content. Chiton
                    assumes no liability for any illegal, infringing, or
                    defamatory materials uploaded by users.
                  </p>
                </div>
              </div>

              {/* Section 7: License to TimeLine */}
              <div
                id="termsofuse-7"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  License to Chiton (Limited)
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    You grant Chiton a non-exclusive, worldwide, royalty-free
                    license to host, reproduce, display, distribute, and
                    technically transform your content within the Service (e.g.,
                    formatting, caching) solely to operate the Service. This
                    license does not include selling your content.
                  </p>
                </div>
              </div>

              {/* Section 8: Acceptable Use */}
              <div
                id="termsofuse-8"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Acceptable Use
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Violate laws, third-party rights, or these Terms.</li>
                    <li>
                      Post or transmit illegal, infringing, deceptive, spammy,
                      harmful, or abusive content.
                    </li>
                    <li>
                      Harvest personal data or perform unauthorized
                      tracking/profile building.
                    </li>
                    <li>
                      Attempt unauthorized access, exploit vulnerabilities,
                      interfere with Service operation (including automated
                      scraping, bot abuse, rate-limit evasion).
                    </li>
                    <li>
                      Misuse advertising systems or manipulate engagement
                      signals.
                    </li>
                  </ul>
                  <p className="mt-4">
                    We may remove content, restrict features, or
                    suspend/terminate accounts to protect users and the Service.
                  </p>
                </div>
              </div>

              {/* Section 9: Moderation & Enforcement */}
              <div
                id="termsofuse-9"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Moderation & Enforcement
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    We may take proportionate action (warnings, content removal,
                    feature limitations, temporary or permanent suspension)
                    based on severity, risk, and recurrence, and we may
                    cooperate with lawful requests by authorities.
                  </p>
                </div>
              </div>

              {/* Section 10: Deletion & Restoration */}
              <div
                id="termsofuse-10"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Deletion & Restoration
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Immediate deletion:</strong> Deletable profile
                      fields (status, bio, tech stack, links) and search history
                      you remove are deleted immediately and are not backed up.
                      Search history and activity logs are retained until you
                      delete them manually, and will be automatically deleted 15
                      days after account deletion.
                    </li>
                    <li>
                      <strong>Account deletion:</strong> Account deletion must
                      be initiated from{" "}
                      <a href="/settings" className="text-[#6299FF]">
                        settings
                      </a>
                      . You may delete your account at any time. A 15‑day
                      restoration window applies (you can restore via the{" "}
                      <a href="/restore" className="text-[#6299FF]">
                        Restoration Page
                      </a>
                      ). After 15 days, your account and all associated data are
                      permanently deleted or irreversibly de‑identified and
                      cannot be recovered.
                    </li>
                    <li>
                      <strong>Core identifiers:</strong> Username, email, and
                      nickname cannot be deleted individually. To remove them,
                      delete your account.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 11: Communications */}
              <div
                id="termsofuse-11"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Communications (Email & Notifications)
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Beta/MVP scope:</strong> During the beta and MVP
                      phases, email delivery (including service emails, product
                      updates, and account restoration notices) is not
                      implemented.
                    </li>
                    <li>
                      <strong>In‑app notifications:</strong> Activity
                      notifications are provided in‑app. You can manage
                      notification preferences in{" "}
                      <a href="/settings" className="text-[#6299FF]">
                        Account Settings
                      </a>
                      .
                    </li>
                    <li>
                      <strong>Future emails:</strong> When email delivery is
                      introduced, essential service emails (e.g., policy
                      updates, security alerts) may be mandatory; optional
                      product update emails will be controllable in{" "}
                      <a href="/settings" className="text-[#6299FF]">
                        Account Settings
                      </a>
                      .
                    </li>
                    <li>
                      <strong>Updates:</strong> Changes to communications will
                      be announced in{" "}
                      <a href="/updates" className="text-[#6299FF]">
                        Updates
                      </a>{" "}
                      and/or in‑app.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 12: Advertising & Cookies */}
              <div
                id="termsofuse-12"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Advertising & Cookies
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Required cookies:</strong> Authentication/session
                      cookies are required to keep you signed in and maintain
                      account security.
                    </li>
                    <li>
                      <strong>Personalized ads:</strong> Limited signals may be
                      used to improve ad relevance as described in the Privacy
                      Policy. You can opt out of personalized ads and cookies
                      through your account settings at any time.
                    </li>
                    <li>
                      <strong>Non‑logged‑in use:</strong> For non‑logged‑in
                      visitors, we do not collect or use data for personalized
                      advertising and do not set cookies or store device
                      identifiers.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 13: Payments & Refunds */}
              <div
                id="termsofuse-13"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Payments & Refunds (if applicable)
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Payments via Stripe:</strong> All payments are
                      processed by Stripe. We do not store full card numbers or
                      CVV on our servers.
                    </li>
                    <li>
                      <strong>No storage of sensitive card data:</strong> We use
                      Stripe tokens to process charges and refunds. We may store
                      non-sensitive metadata (e.g., Stripe IDs, amount,
                      currency, status, receipt URL, card brand/last4,
                      expiration month/year) for accounting, fraud prevention,
                      and disputes.
                    </li>
                    <li>
                      <strong>Refund policy:</strong> Refunds may be granted at
                      our discretion for unauthorized charges, duplicates, or
                      service delivery failures. Requests must be submitted
                      within 14 days of the charge; approved refunds are
                      returned to the original payment method (processing times
                      vary). Refunds for digital content already consumed may be
                      limited unless required by law. Excessive or abusive
                      requests may lead to denial or account restrictions.
                      Chargebacks will be contested with evidence via
                      Stripe/card networks.
                    </li>
                  </ul>
                  <br />
                  <p>
                    All payments are subject to applicable electronic commerce
                    and consumer protection laws. For recurring payments or
                    subscriptions, users will receive clear notice before any
                    renewal.
                  </p>
                </div>
              </div>

              {/* Section 14: Third-Party Services & International Transfers */}
              <div
                id="termsofuse-14"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Third‑Party Services & International Transfers
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    We rely on trusted providers (e.g., Vercel for hosting,
                    Supabase for authentication/database, Stripe for payments).
                    International transfer mechanisms and safeguards are
                    described in the Privacy Policy. Data is primarily processed
                    and stored in the Asia-Pacific (APAC) region (e.g.,
                    Singapore, Japan, or Korea), and may, where necessary, be
                    transferred to other regions under equivalent safeguards.
                    Upon request, we provide information about transfer
                    mechanisms and applicable clauses via{" "}
                    <a href="/help" className="text-[#6299FF]">
                      Help
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Section 15: Intellectual Property */}
              <div
                id="termsofuse-15"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Intellectual Property
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    The Service (software, design, trademarks) is owned by
                    Chiton or its licensors. You may not copy, modify,
                    distribute, reverse engineer, or create derivative works of
                    the Service except as expressly permitted.
                    <br />
                    If you believe that content on Chiton infringes your
                    copyright or trademark, please submit a notice through the
                    Help page. We will respond promptly in accordance with
                    applicable law.
                  </p>
                </div>
              </div>

              {/* Section 16: Disclaimers */}
              <div
                id="termsofuse-16"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Disclaimers
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    The Service is provided "as is" and "as available." Chiton
                    may modify, suspend, or discontinue any part of the Service
                    with prior notice, except in urgent circumstances. We do not
                    warrant uninterrupted or error‑free operation. Beta/MVP
                    features may change, be limited, or be removed without
                    notice.
                  </p>
                </div>
              </div>

              {/* Section 17: Limitation of Liability */}
              <div
                id="termsofuse-17"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Limitation of Liability
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    To the maximum extent permitted by law, Chiton is not
                    liable for indirect, incidental, special, consequential, or
                    punitive damages, or loss of data, profits, or goodwill,
                    arising from or related to your use of the Service. Where
                    liability cannot be excluded, it is limited to the amount
                    you paid (if any) for the Service in the preceding 12
                    months.
                  </p>
                </div>
              </div>

              {/* Section 18: Indemnification */}
              <div
                id="termsofuse-18"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Indemnification
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    You agree to indemnify and hold harmless Chiton, its
                    affiliates, and providers from claims, losses, and expenses
                    (including reasonable attorneys' fees) arising from your
                    content, your use of the Service, or your violation of these
                    Terms or applicable law.
                  </p>
                </div>
              </div>

              {/* Section 19: Governing Law & Disputes */}
              <div
                id="termsofuse-19"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Governing Law & Disputes
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    These Terms are governed by the laws of the Republic of
                    Korea, without regard to its conflict of law principles.
                    However, mandatory consumer protection laws of your country
                    of residence may prevail. Any disputes shall be submitted to
                    the competent courts in Seoul, Republic of Korea, unless
                    otherwise required by such consumer protection laws.
                  </p>
                </div>
              </div>

              {/* Section 20: Changes to Terms */}
              <div
                id="termsofuse-20"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Changes to Terms
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    We may update these Terms from time to time. Material
                    changes will be announced at least 7 days before the
                    effective date (30 days for significant changes) via in-app
                    notice and/or website announcement. Material changes will be
                    announced in‑app or on our website and/or by email (when
                    available). By continuing to use Chiton after changes take
                    effect, you agree to the updated Terms.
                  </p>
                </div>
              </div>

              {/* Section 21: Contact */}
              <div
                id="termsofuse-21"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Contact
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <p>
                    For questions about these Terms, account issues, or rights
                    requests, please contact{" "}
                    <a href="/help" className="text-[#6299FF]">
                      Help
                    </a>
                    .
                    <br />
                    Operator: Hong Seung Won (Chiton) <br />
                    Contact: contact@cirtium.com
                  </p>
                </div>
              </div>

              {/* Cross-References */}
              <div
                id="termsofuse-22"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Cross‑References
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal ">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Privacy Policy:</strong> For data collection, use,
                      storage, deletion, transfers, and security details.
                    </li>
                    <li>
                      <strong>Updates:</strong> For announcements regarding
                      communications and feature changes.
                    </li>
                    <li>
                      <strong>Help:</strong> For support on account, payments,
                      and rights requests.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfUse;
