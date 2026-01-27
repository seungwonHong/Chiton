"use client";
import React, { useRef, useState } from "react";
import FooterHeader from "@/features/landing/components/FooterHeader";
import Footer from "@/features/landing/components/Footer";
import Navigation from "@/features/landing/components/Navigation";
import Link from "next/link";
import "@/features/landing/styles/footer.css";
import { useSectionObserver } from "@/features/landing/hooks/useSectionObserver";
import { List } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Privacy = () => {
  const isManualScroll = useRef(false);
  const [clicked, setIsClicked] = useState(0);
  const [isOpened, setIsOpened] = useState(false);
  const ids = [
    "privacy-1",
    "privacy-2",
    "privacy-3",
    "privacy-4",
    "privacy-5",
    "privacy-6",
    "privacy-7",
    "privacy-8",
    "privacy-9",
  ];
  useSectionObserver({
    isManualScroll,
    setClicked: setIsClicked,
    sections: ids,
  });

  const handleNavClick = (index: number) => {
    isManualScroll.current = true;
    const id = ids[index];
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="relative flex flex-col 2xl:px-[16rem] lg:px-[12rem] md:px-[3.2rem] px-[1.6rem] w-full 2xl:pb-[15rem] lg:pb-[10rem] pb-[6rem]"
        onClick={() => isOpened && setIsOpened(false)}
      >
        <FooterHeader />

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="2xl:mt-[16rem] lg:mt-[12rem] md:mt-[10rem] mt-[8rem] 2xl:text-[6.4rem] lg:text-[4.8rem] md:text-[3.2rem] text-[3.6rem] font-normal">
            Privacy Policy
          </h1>
          <h2 className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal text-center 2xl:w-[120rem] lg:w-[80rem] md:w-[64rem] w-[36rem] mx-auto">
            Chiton protects your personal data. This policy clearly explains
            how we collect, use, store, delete, and safeguard your information,
            and outlines your rights.
          </h2>

          <div className="w-full flex flex-row items-start justify-between 2xl:mt-[16rem] lg:mt-[12rem] md:mt-[10rem] mt-[8rem] 2xl:px-[10rem] lg:px-[6rem] px-[3rem] min-h-screen">
            <Navigation
              navigationText={[
                "Privacy Policy Intro",
                "Data Collection",
                "Data Use",
                "Data Storage",
                "Data Deletion",
                "Data Transfers",
                "Data Security",
                "Children",
                "Your Rights and Choices",
              ]}
              onItemClick={handleNavClick}
              clicked={clicked}
              setIsClicked={setIsClicked}
              className="hidden md:flex flex-col "
            />

            <div className="flex flex-col 2xl:w-[80rem] lg:w-[64rem] md:w-[48rem] w-[32rem] 2xl:mr-[10rem] lg:mr-[6rem] md:mr-[4rem]">
              {/* Privacy Policy Intro */}
              <div id="privacy-1" className="flex flex-col">
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Privacy Policy Intro
                </h3>
                <p className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                  At Chiton, we take your privacy seriously and built our
                  platform with privacy in mind. This Privacy Policy explains
                  how we handle personal data. By using or accessing Chiton,
                  you agree to the practices and policies described below and
                  allow us to collect, use, and share your information as
                  outlined in this Policy. This Privacy Policy applies to your
                  use of Chiton and is incorporated into Chiton’s{" "}
                  <Link href="/termsofuse" className="text-[#6299FF]">
                    Terms of Use
                  </Link>
                  . Any capitalized terms not defined here have the meanings
                  given in the Terms of Use. We collect only what’s necessary to
                  run the service: cookies to keep your login session active,
                  and data used to provide personalized ads (you can opt out of personalized ads and cookies through your account settings at any time). We use cookies and
                  similar technologies for authentication and session
                  continuity, and we process limited ad-related data (like
                  interactions and standard device information) to make ads more
                  relevant. We don’t sell personal information, and we share
                  data only with service providers who help us operate Chiton
                  under strict safeguards. We’re always improving Chiton, so
                  this Policy may change from time to time. If we make material
                  changes, we’ll notify you by posting a notice in the app or on
                  our website and/or sending an email. By continuing to use
                  Chiton after changes are posted, you agree to the updated
                  Policy.
                </p>
              </div>

              {/* Data Collection */}
              <div
                id="privacy-2"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Data Collection
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                  <p>
                    Chiton collects only the information needed to operate,
                    secure, and improve the service, to keep you signed in, and
                    to provide personalized ads and content recommendations (you can opt out of personalized ads and cookies through your account settings at any time).
                  </p>

                  <br />

                  <ul className="font-medium list-disc list-inside space-y-2">
                    <li>
                      Account information: email, username, profile details you
                      choose to provide.
                    </li>
                    <li>
                      Usage & interactions: features you use, clicks, views,
                      posts, likes, and other activity signals used for content
                      recommendations.
                    </li>
                    <li>
                      <strong>Device & log data:</strong> IP address,
                      device/browser type, language, timestamps, and diagnostic
                      logs to maintain reliability and security.
                    </li>
                    <li>
                      Cookies & similar technologies: cookies for authentication
                      and to keep your login session active; cookies/pixels for
                      measuring engagement and supporting personalized ads (you can opt out of personalized ads and cookies through your account settings at any time).
                    </li>
                    <li>
                      Ad personalization data: limited signals (e.g.,
                      interactions, device info, coarse location) used to make
                      ads more relevant; we do not share sensitive categories.
                    </li>
                    <li>
                      From service providers/partners: we may receive limited
                      data needed to deliver ads and analytics.
                    </li>
                    <br />
                    <li>
                      <strong>Non‑logged‑in use:</strong> When you view public
                      content or use basic search without creating an account or
                      logging in, we do not collect personal data, and we do not
                      set cookies or store device identifiers.
                    </li>
                    <li>
                      <strong>Sign‑up without login:</strong> If you sign up but
                      do not log in, we store only the account information you
                      provided during sign‑up (e.g., email, date of birth) for
                      account management. No other data is collected until you
                      log in.
                    </li>
                  </ul>

                  <br />

                  <p>
                    We share only what is necessary with trusted partners under
                    contractual safeguards, and we do not sell personal
                    information. We do not intentionally collect sensitive
                    categories (such as health, biometric, or government IDs).
                    Children's data is handled according to applicable laws. For
                    details on how long we keep data, see the Data Storage
                    section.
                  </p>
                </div>
              </div>

              {/* Data Use */}
              <div
                id="privacy-3"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Data Use
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                  <p>
                    We use the data we collect strictly for the following
                    purposes:
                  </p>

                  <br />

                  <ul className="font-medium list-disc list-inside space-y-2">
                    <li>
                      <strong>Authentication & sessions:</strong> Maintain your
                      login state, prevent unauthorized access, and keep your
                      account secure (via cookies and similar technologies).
                    </li>
                    <li>
                      <strong>Personalized ads:</strong> Make advertising more
                      relevant using limited signals (e.g., interactions, device
                      info, coarse location). We may share necessary subsets of
                      these signals with trusted partners or advertisers under
                      contractual safeguards. We do not use sensitive categories
                      for ad targeting and we do not sell personal data.
                    </li>
                    <li>
                      <strong>Recommendations & content relevance:</strong>{" "}
                      Improve feed ranking, discoverability, and content
                      suggestions based on usage signals (e.g., clicks, views,
                      likes).
                    </li>
                    <li>
                      <strong>Product improvement:</strong> Analyze performance
                      and reliability, fix bugs, and guide feature development
                      using aggregate metrics and diagnostic logs; we may use
                      aggregated or de-identified data for analytics.
                    </li>
                    <li>
                      <strong>Vercel (deployment/hosting):</strong> Data
                      processed via Vercel is used strictly for service
                      deployment/hosting, authentication/session continuity,
                      performance monitoring, incident response, and
                      security/fraud/abuse prevention.
                    </li>
                    <li>
                      <strong>Security, fraud, and abuse prevention:</strong>{" "}
                      Detect, investigate, and mitigate spam, fraud, and
                      violations of our Terms.
                    </li>
                    <li>
                      <strong>Payments & transactions (if applicable):</strong>{" "}
                      Process transactions, prevent fraud, and meet accounting
                      requirements through payment providers; only necessary
                      data is used or shared.
                    </li>
                    <li>
                      <strong>Stripe (payments):</strong> Data processed via
                      Stripe is used strictly for payment processing,
                      refunds/disputes, fraud prevention, and compliance with
                      accounting/tax and other legal obligations. We do not
                      store full card numbers or sensitive payment credentials
                      on our servers.
                    </li>
                    <li>
                      <strong>Legal and compliance:</strong> Comply with legal
                      obligations, enforce policies, and respond to lawful
                      requests from authorities.
                    </li>
                    <li>
                      <strong>Communications:</strong> Send service-related
                      notices (e.g., policy updates, security alerts) and, where
                      permitted, product updates; you can control certain
                      preferences in Your Rights and Choices.
                    </li>
                    <br />
                    <li>
                      <strong>Non‑logged‑in use:</strong> No personal data is
                      processed or used for non‑logged‑in viewing or basic
                      search.
                    </li>
                    <li>
                      <strong>Sign‑up without login:</strong> We use your
                      submitted account information solely to manage your
                      account eligibility (18+ requirement) and to enable future
                      login.
                    </li>
                  </ul>

                  <br />

                  <p>
                    For details on how ads and cookies are handled, please see
                    Your Rights and Choices.
                  </p>
                </div>
              </div>

              {/* Data Storage */}
              <div
                id="privacy-4"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Data Storage
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                  <p>
                    We retain personal data only for as long as it is needed for
                    the purposes described in this Policy.
                  </p>

                  <br />

                  <ul className="font-medium list-disc list-inside space-y-2">
                    <li>
                      <strong>Retention periods:</strong>
                      <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                        <li>
                          <strong>
                            Authentication/session data (cookies, tokens):
                          </strong>{" "}
                          persisted while you remain logged in and through short
                          renewal windows; removed when you log out.
                        </li>
                        <li>
                          <strong>
                            Account data (email, username, profile):
                          </strong>{" "}
                          retained while your account is active. If you delete
                          your account, it enters a 15‑day restoration window;
                          after 15 days, it is permanently deleted or
                          irreversibly anonymized.
                        </li>
                        <li>
                          <strong>
                            User content and search history (posts, comments,
                            search history):
                          </strong>{" "}
                          retained while your account is active. You can
                          manually delete posts, comments, or your search
                          history at any time. If you do not delete them, they
                          remain stored until you delete your account, after
                          which all related content and records are
                          automatically and permanently deleted (or
                          de‑identified) following the 15‑day restoration
                          window. Minimal records may be retained as required by
                          law for reports, legal obligations, or abuse
                          prevention.
                        </li>
                        <li>
                          <strong>Usage/analytics logs:</strong> stored for a
                          limited period to improve reliability and features,
                          then aggregated or de‑identified.
                        </li>
                        <li>
                          <strong>Vercel logs:</strong> Hosting and diagnostic
                          logs are retained for a limited period necessary for
                          reliability, security, and product improvement, then
                          aggregated or de‑identified. Backups exist solely for
                          disaster recovery and expire on a rolling schedule.
                        </li>
                        <li>
                          <strong>Ad personalization signals:</strong> kept for
                          short, rotating windows and refreshed periodically;
                          not stored longer than necessary for relevance.
                        </li>
                        <li>
                          <strong>
                            Payment/transaction records (if applicable):
                          </strong>{" "}
                          retained per accounting and tax laws.
                        </li>
                        <li>
                          <strong>Stripe records:</strong> Transaction records
                          are retained in accordance with statutory
                          accounting/tax retention periods and dispute handling
                          requirements. Full card numbers and sensitive payment
                          credentials are not stored on our servers.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Deletion, restoration & anonymization:</strong>{" "}
                      You can delete your account at any time. Within 15 days
                      you may restore it; after that period, we cannot recover
                      the data. When data is no longer needed, we delete or
                      de‑identify it unless a legal obligation requires
                      temporary retention.
                    </li>
                    <li>
                      <strong>Backups & recovery:</strong> Backups exist for
                      reliability and disaster recovery; they are encrypted and
                      expire on a rolling schedule. Deleted items may persist in
                      backups until the backup window lapses. Restoring from
                      backups requires account authentication (email and
                      password).
                    </li>
                    <li>
                      <strong>Storage locations:</strong> Data may be stored in
                      regional data centers operated by trusted providers. Where
                      required, we apply transfer safeguards consistent with
                      applicable laws.
                    </li>
                    <li>
                      <strong>Security safeguards:</strong> We protect stored
                      data with encryption at rest, role‑based access controls,
                      and monitoring to prevent unauthorized access or loss.
                    </li>
                    <br />
                    <li>
                      <strong>Non‑logged‑in use:</strong> We do not store
                      personal data for non‑logged‑in viewing or basic search.
                    </li>
                    <li>
                      <strong>Sign‑up without login:</strong> We store your
                      account information under the Data Storage retention
                      rules. If you delete your account before logging in, we
                      delete or de‑identify the sign‑up data per our deletion
                      policy.
                    </li>
                  </ul>

                  <br />

                  <p>
                    For how to request deletion or manage retention preferences,
                    see Your Rights and Choices. For cross‑border processing
                    details, see Data Transfers.
                  </p>
                </div>
              </div>

              {/* Data Deletion */}
              <div
                id="privacy-5"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Data Deletion
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                  <p>
                    We retain personal data only for as long as it is needed for
                    the purposes described in this Policy.
                  </p>

                  <br />

                  <ul className="font-medium list-disc list-inside space-y-2">
                    <li>
                      <strong>User content (posts, replies, comments):</strong>{" "}
                      When you delete content, it is removed immediately and is
                      not backed up. Deleted content cannot be recovered.
                    </li>
                    <li>
                      <strong>Deletable profile fields:</strong> Status, bio,
                      tech stack, and links that you can delete are removed
                      immediately and are not backed up.
                    </li>
                    <li>
                      <strong>Search history:</strong> When you delete your
                      search history, it is erased immediately, is not backed
                      up, and cannot be recovered.
                    </li>
                    <li>
                      <strong>Non‑deletable identifiers:</strong> Core account
                      identifiers such as username, email, and nickname cannot
                      be deleted individually (for service operation, security,
                      and legal compliance). However, when you delete your
                      account, these identifiers are permanently deleted or
                      irreversibly de‑identified after the 15‑day restoration
                      window.
                    </li>
                    <li>
                      <strong>Account deletion:</strong> When you delete your
                      account, a 15‑day restoration window is provided (you can
                      restore by logging in). After 15 days, your account is
                      permanently deleted or irreversibly de‑identified, and
                      recovery is not possible. Upon permanent account deletion,
                      all data you posted (e.g., posts, replies, comments) and
                      associated data are permanently deleted and cannot be
                      recovered.
                    </li>
                    <li>
                      <strong>Backups & recovery:</strong> Backups are used only
                      for account restoration and require email and password
                      authentication. User content, deletable profile fields,
                      and search history are not included in backups.
                    </li>
                    <li>
                      <strong>Legal/abuse exceptions:</strong> Minimal records
                      may be retained as required by law (e.g., accounting,
                      dispute handling) or for abuse/fraud prevention, and are
                      restricted in use.
                    </li>
                    <li>
                      <strong>Third‑party caches:</strong> Search engine caches
                      or partner systems may retain temporary copies, which are
                      removed according to their expiration cycles.
                    </li>
                  </ul>

                  <br />

                  <p>
                    For how to request deletion or manage retention preferences,
                    see Your Rights and Choices. For cross‑border processing
                    details, see Data Transfers.
                  </p>
                </div>
              </div>

              {/* Data Transfers */}
              <div
                id="privacy-6"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Data Transfers
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                  <p>
                    Chiton uses the Asia-Pacific (APAC) region as its main
                    data-processing region to provide the service. Accordingly,
                    your personal data may be transferred, stored, and processed
                    within the Asia-Pacific region (e.g., Singapore, Japan, or
                    Korea) and, where necessary, to other regions under
                    equivalent safeguards. We comply with the following when
                    transferring data:
                  </p>

                  <br />

                  <ul className="font-medium list-disc list-inside space-y-2">
                    <li>
                      <strong>Legal basis:</strong> We ensure an adequate level
                      of protection through applicable international transfer
                      mechanisms, including the EU Standard Contractual Clauses
                      (SCCs) annexed to our Data Processing Addendum (DPA) with
                      Supabase Inc. Where required, we use UK international
                      transfer SCCs or other region‑specific standard clauses.
                    </li>
                    <li>
                      <strong>Scope of transfer:</strong> Data strictly
                      necessary to operate the service may be transferred,
                      including account and authentication data,
                      database/storage data, logs and diagnostics, and payment
                      card transaction data (where applicable).
                    </li>
                    <li>
                      <strong>Safeguards:</strong> We apply technical and
                      organizational measures during transfer, storage, and
                      processing, such as encryption (in transit/at rest),
                      role‑based access controls (RBAC), least‑privilege access,
                      and monitoring/audit logs. We assess risks before and
                      after transfers and introduce additional safeguards where
                      necessary.
                    </li>
                    <li>
                      <strong>Data subject rights:</strong> Requests and
                      inquiries related to data transfers are handled under
                      "Your Rights and Choices." Upon request, we provide
                      information about the transfer mechanisms and applicable
                      clauses.
                    </li>
                    <li>
                      <strong>Backups and recovery:</strong> Backups are used
                      solely for reliability and disaster recovery, are
                      encrypted, and expire on a rolling schedule. Deleted items
                      may persist until the backup window lapses. Restoring from
                      backups requires account authentication (email and
                      password).
                    </li>
                    <li>
                      <strong>Vercel (deployment/hosting):</strong> We use
                      Vercel to deploy and host Chiton. In connection with
                      providing hosting and ensuring service reliability and
                      security, Vercel may process device and log data (e.g., IP
                      address, browser/device type, language, timestamps,
                      diagnostic logs) and limited account/authentication
                      metadata. This processing may occur on infrastructure
                      located in the United States and is used for availability,
                      performance, and abuse/fraud prevention.
                    </li>
                    <li>
                      <strong>Stripe (payments):</strong> We use Stripe to
                      process payments. In connection with transactions, Stripe
                      processes payment‑related information (e.g., transaction
                      amount, payment method tokens, billing/contact details,
                      and transaction metadata) for payment processing, fraud
                      prevention, refunds/disputes, and legal/accounting
                      compliance. Card numbers and other sensitive payment
                      credentials are not stored on our servers. Stripe’s
                      processing may occur on infrastructure located in the
                      United States.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div
                id="privacy-7"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Data Security
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                  <p>
                    {" "}
                    We protect your personal data using technical and
                    organizational measures appropriate to our service and risk
                    profile.
                  </p>{" "}
                  <br />
                  <ul className="font-medium list-disc list-inside space-y-2">
                    <li>
                      <strong>Encryption:</strong> All data is encrypted in
                      transit using TLS. Data at rest is encrypted by our
                      trusted infrastructure providers (e.g., hosting and
                      database platforms).
                    </li>
                    <li>
                      <strong>Access controls:</strong> We apply role‑based
                      access controls (RBAC), least‑privilege access, and
                      require authentication for all administrative actions.
                      Access is logged and reviewed.
                    </li>
                    <li>
                      <strong>Secret management:</strong>
                      API keys, tokens, and credentials are stored securely and
                      are not committed to source control.
                    </li>
                    <li>
                      <strong>Credential protection:</strong> We do not store
                      plaintext passwords. Password hashing and storage are
                      handled by our authentication provider in line with
                      industry standards (e.g., modern hashing algorithms).
                    </li>
                    <li>
                      <strong>Monitoring and logging:</strong> We maintain
                      operational and security logs to help detect and
                      investigate abuse, fraud, and incidents.
                    </li>
                    <li>
                      <strong>Application safeguards:</strong> We follow secure
                      development practices and use standard protections against
                      common web threats (e.g., CSRF, XSS).
                    </li>
                    <li>
                      <strong>Backups and recovery:</strong>
                      Backups exist solely for reliability and disaster
                      recovery; they are encrypted and expire on a rolling
                      schedule. Deleted items may persist until the backup
                      window lapses.
                    </li>
                    <li>
                      <strong>Incident response:</strong> When we detect a
                      security incident, we investigate, mitigate, and—where
                      legally required—notify affected users and authorities.
                    </li>
                  </ul>
                  <br />
                  <p>
                    These measures complement the safeguards described in Data
                    Transfers and are applied alongside our providers' security
                    controls.
                  </p>
                </div>
              </div>

              {/* Children */}
              <div
                id="privacy-8"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Children
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                  <ul className="font-medium list-disc list-inside space-y-2">
                    <li>
                      <strong>Public access:</strong> We allow viewing of public
                      content and basic search without logging in. For
                      non‑logged‑in visitors, we minimize or avoid processing
                      personal data and do not use behavioral advertising or
                      personalized tracking.
                    </li>
                    <li>
                      <strong>Age restrictions:</strong> Account creation and
                      interactive features (e.g., posting, commenting, saving,
                      notifications) are restricted to users who are at least 18
                      years old, or the age of legal majority in their country
                      of residence—whichever is higher. During sign‑up, you must
                      provide your date of birth. If you indicate you are under
                      18, you cannot create an account or use interactive
                      features.
                    </li>
                    <li>
                      <strong>Data collection policy:</strong> We do not
                      knowingly collect personal data through accounts from
                      users under 18, or under the age of legal majority in
                      their country of residence, because such accounts are not
                      permitted. If we learn that an account was created by a
                      user under 18 or that age was misrepresented, we may
                      suspend or delete the account and associated data in
                      accordance with this Policy and applicable law.
                    </li>
                    <li>
                      <strong>Regional compliance:</strong> Regional
                      requirements may apply. Where the law requires additional
                      measures (e.g., parental consent for younger users in
                      certain jurisdictions), we may request further
                      verification. Because accounts are limited to 18+,
                      parental consent is generally not required for our
                      Service; non‑logged‑in viewing does not involve collecting
                      personal data.
                    </li>
                    <li>
                      <strong>Future analytics:</strong> If we introduce
                      optional analytics or advertising cookies for
                      non‑logged‑in visitors, we will obtain consent where
                      required by law, and we will not profile minors for
                      targeted advertising.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Your Rights and Choices */}
              <div
                id="privacy-9"
                className="flex flex-col lg:mt-[10rem] mt-[8rem]"
              >
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.8rem] text-[1.8rem] text-normal">
                  Your Rights and Choices
                </h3>
                <div className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
                  <p>
                    This section explains the rights you have and the choices
                    you can make when using Chiton. We provide minimal, clear
                    options aligned with how the Service operates.
                  </p>

                  <h4 className="font-semibold mt-6 mb-3">
                    Public Access (No Login)
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      You can view public content and use basic search without
                      creating an account.
                    </li>
                    <li>
                      For non‑logged‑in visitors, we do not collect or use
                      personal data for personalized advertising, and we do not
                      set cookies or similar tracking for personalization.
                    </li>
                  </ul>

                  <h4 className="font-semibold mt-6 mb-3">
                    Communications (Email & Notifications)
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Beta/MVP scope:</strong> During the beta and MVP
                      phases, email delivery (including service emails, product
                      updates, and account restoration notices) is not
                      implemented.
                    </li>
                    <li>
                      <strong>In‑app notifications:</strong> You receive in‑app
                      notifications for activity related to your account (e.g.,
                      new followers, comments, replies). You can manage in‑app
                      notifications in Notifications from{" "}
                      <a href="/settings" className="text-[#6299FF]">
                        settings
                      </a>
                      .
                    </li>
                    <li>
                      <strong>Mandatory vs. optional:</strong> When email
                      delivery is introduced in future releases, essential
                      service emails (e.g., policy updates, security alerts) may
                      be mandatory. Optional product update emails will be
                      controllable in Notifications from{" "}
                      <a href="/settings" className="text-[#6299FF]">
                        settings
                      </a>
                      .
                    </li>
                    <li>
                      <strong>Preference scope:</strong> Communication
                      preferences only affect notifications and, when available,
                      optional emails. They do not change mandatory consents for
                      data collection or cookies required for
                      authentication/session continuity.
                    </li>
                    <li>
                      <strong>Updates:</strong> Changes to communication
                      features and availability will be announced in{" "}
                      <a href="/updates" className="text-[#6299FF]">
                        Updates
                      </a>
                      . Please check{" "}
                      <a href="/updates" className="text-[#6299FF]">
                        Updates
                      </a>{" "}
                      for the latest information.
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-6 mb-3">
                    Account Creation and Mandatory Consent
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Age requirement:</strong> Accounts and interactive
                      features (posting, commenting, saving, notifications) are
                      available only to users aged 18 or older, or the age of
                      legal majority in their country of residence—whichever is
                      higher. Sign‑up requires your date of birth to verify
                      eligibility.
                    </li>
                    <li>
                      <strong>Mandatory consent at sign‑up:</strong> To create
                      an account, you must agree to our personal data collection
                      and use, including the use of cookies for
                      authentication and session continuity as described in this Policy.
                    </li>
                    <li>
                      <strong>No opt‑out in settings:</strong> If you do not
                      agree to required consents at sign‑up, you cannot create an
                      account. After sign‑up, these required consents cannot be changed
                      in{" "}
                      <a href="/settings" className="text-[#6299FF]">
                        settings
                      </a>{" "}
                      unless required by applicable law.
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-6 mb-3">
                    Language and Core Identifiers
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Language:</strong> The Service is provided in
                      English only.
                    </li>
                    <li>
                      <strong>Core identifiers:</strong> Username, email, and
                      nickname cannot be deleted individually. To remove them,
                      delete your{" "}
                      <a href="/settings" className="text-[#6299FF]">
                        account
                      </a>
                      .
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-6 mb-3">
                    Content Visibility Controls
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Post audience:</strong> When you upload a post,
                      you can choose who can see it:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                          <strong>Everyone:</strong> visible to all users and
                          may be discoverable via search.
                        </li>
                        <li>
                          <strong>Followers:</strong> visible only to your
                          followers.
                        </li>
                        <li>
                          <strong>Subscribers:</strong> visible only to your
                          subscribers.
                        </li>
                        <li>
                          <strong>Followers & Subscribers:</strong> visible to
                          both your followers and subscribers.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Edits and removal:</strong> You can edit or delete
                      your own posts and comments. Deleted items are removed
                      immediately and are not backed up.
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-6 mb-3">
                    Deletion and Restoration
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Immediate deletion:</strong> Deletable profile
                      fields (status, bio, tech stack, links) and search history
                      you remove are deleted immediately and are not backed up.
                      You can perform immediate deletion from your Profile or
                      via My Account from{" "}
                      <a href="/settings" className="text-[#6299FF]">
                        settings
                      </a>
                      .
                    </li>
                    <li>
                      <strong>Account deletion:</strong> Account deletion must
                      be initiated from My Account from{" "}
                      <a href="/settings" className="text-[#6299FF]">
                        settings
                      </a>
                      . You may delete your account at any time. A 15‑day
                      restoration window applies (you can restore via{" "}
                      <a href="/restore" className="text-[#6299FF]">
                        Restortion Page
                      </a>
                      ). After 15 days, your account and all associated data are
                      permanently deleted or irreversibly de‑identified and
                      cannot be recovered.
                    </li>
                    <li>
                      <strong>Legal/abuse exceptions:</strong> Minimal records
                      may be retained as required by law or to prevent
                      fraud/abuse; such records are restricted in use.
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-6 mb-3">
                    Data Access and Portability
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Data download/export:</strong> We do not offer
                      data download or export functionality.
                    </li>
                    <li>
                      <strong>Access in product:</strong> While your account is
                      active, you can view your account info, profile, posts,
                      and comments within the Service.
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-6 mb-3">
                    Advertising and Cookies
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Required cookies:</strong> Authentication/session
                      cookies are required to keep you signed in and maintain
                      account security.
                    </li>
                    <li>
                      <strong>Personalized ads:</strong> We use limited signals
                      to make ads more relevant, as described in this Policy.
                      You can opt out of personalized ads and cookies through your account settings at any time.
                    </li>
                    <li>
                      <strong>Non‑logged‑in use:</strong> For non‑logged‑in
                      visitors, we do not collect or use data for personalized
                      advertising and do not set personalized tracking.
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-6 mb-3">
                    Children and Regional Requirements
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Under‑18 accounts:</strong> We do not knowingly
                      allow or maintain accounts for users under 18, or under
                      the age of legal majority in their country of residence.
                      If we learn an account is under 18 or age was
                      misrepresented, we may suspend or delete the account and
                      associated data per this Policy and applicable law.
                    </li>
                    <li>
                      <strong>Regional compliance:</strong> Where law requires
                      additional measures (e.g., specific consent mechanisms),
                      we may request verification. Because accounts are limited
                      to 18+, parental consent generally does not apply.
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-6 mb-3">
                    How to Exercise Your Choices
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>In product:</strong> Use My Account from{" "}
                      <a href="/settings" className="text-[#6299FF]">
                        settings
                      </a>{" "}
                      and Profile page to edit or delete content, manage your
                      profile, and delete your account.
                    </li>
                    <li>
                      <strong>Help:</strong> For help with account deletion or
                      questions about your data, contact{" "}
                      <a href="/help" className="text-[#6299FF]">
                        {" "}
                        Help
                      </a>
                      . We may need to verify your identity to protect your
                      account.
                    </li>
                    <li>
                      <strong>Policy updates:</strong> If this Policy changes,
                      we will notify you via the app or website and/or email. By
                      continuing to use Chiton, you agree to the updated
                      Policy.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 모바일 용 사이드 네비게이션바 */}
        {isOpened && (
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="bg-[var(--privacy-policy-hover-background)] shadow-lg p-[2rem] rounded-[1.2rem] z-50 fixed bottom-[8rem] right-[2rem] backdrop-blur-sm"
            >
              <Navigation
                navigationText={[
                  "Privacy Policy Intro",
                  "Data Collection",
                  "Data Use",
                  "Data Storage",
                  "Data Deletion",
                  "Data Transfers",
                  "Data Security",
                  "Children",
                  "Your Rights and Choices",
                ]}
                onItemClick={handleNavClick}
                clicked={clicked}
                setIsClicked={setIsClicked}
                className="md:hidden flex flex-col"
                onClose={() => setIsOpened(false)}
              />
            </motion.div>
          </AnimatePresence>
        )}

        {/* 모바일 용 버튼(사이드 네비게이션바 열기) */}
        <div
          className="md:hidden flex fixed bottom-[2rem] right-[2rem] z-50 rounded-full bg-[var(--privacy-policy-hover-background)] shadow-lg p-[1rem] cursor-pointer w-[4.8rem] h-[4.8rem] items-center justify-center"
          onClick={() => setIsOpened(!isOpened)}
        >
          <List className="w-[4rem] h-[4rem]" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
