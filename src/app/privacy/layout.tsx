import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiton - Privacy Policy",
  description:
    "Chiton's privacy policy explains how we collect, use, store, delete, and safeguard your information.",
  alternates: {
    canonical: "https://www.chiton.io/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
