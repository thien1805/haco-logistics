import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HACO International Logistics",
  description: "Công ty TNHH Giao nhận quốc tế HACO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
