import type { Metadata } from "next";
import "./ui/globals.css";
import { ThemeProvider } from "./ui/theme-provider";
import { Nav } from "@/components/header/nav";

import { poppins } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Login",
  description: "DescriptionLogin",
  icons: {
    icon: ["./favicon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" translate="no" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen overflow-hidden bg-background text-foreground w-full">
            <Nav />
            <div className="flex flex-col mt-[64px] rounded-md">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
