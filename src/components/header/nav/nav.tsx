"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ModeToggle, NavSheet, Navbar } from "@/components/header/nav";
import { SessionProvider } from "next-auth/react";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-100 dark:bg-gray-900 fixed top-0 w-full z-10 mb-24">
      <SessionProvider>
        <div className="flex items-center justify-between w-[92%] mx-auto p-4">
          <Link href="/home" className="flex items-center space-x-3">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Login
            </span>
          </Link>
          <div className="flex items-center">
            <div
              className={cn(
                "md:static absolute min-h-fit left-0 md:top-16 -top-full w-autoflex items-center px-5 py-2"
              )}
            >
              <ul className="font-medium flex flex-row items-center gap-[4vw] w-auto">
                <Navbar pathname={pathname} />
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-2 mx-2">
                <ModeToggle />
              </div>
              <NavSheet pathname={pathname} />
            </div>
          </div>
        </div>
      </SessionProvider>
    </nav>
  );
}
