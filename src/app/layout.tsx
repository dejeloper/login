import type { Metadata } from "next";
import "./ui/globals.css";
import { ThemeProvider } from "./ui/theme-provider";
import { Nav } from "@/components/header/nav";

import { poppins } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Login",
  description: "DescriptionLogin",
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
          <div className="flex flex-col min-h-screen overflow-hidden bg-background text-foreground">
            <Nav />
            <div className="flex flex-col mt-[84px] h-[calc(100%-104px)] my-4 md:mx-12 mx-6 p-4 rounded-md lg:w-3/4 lg:mx-auto">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
