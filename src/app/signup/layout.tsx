import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiton - Sign up",
  description: "Create your Chiton account and join the developer community.",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
