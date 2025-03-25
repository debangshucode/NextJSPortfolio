import dynamic from "next/dynamic";
const FloatingNav = dynamic(
  async () => {
    const mod = await import("@/components/ui/FloatingNavbar");
    return { default: mod.FloatingNav }; // ✅ Explicitly returning as default
  },
  { ssr: false }
);
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { navItems } from "@/data";

export const metadata: Metadata = {
  title: "SystemR",
  description: "SystemR is a web development agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/SystemR_2.png" sizes="any" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* ✅ Navbar appears on all pages */}
          <FloatingNav navItems={navItems} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
