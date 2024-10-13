"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/header/nav";

const menuItems = [{ name: "Inicio", url: "/home" }];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-100 dark:bg-gray-900 fixed top-0 w-full z-10 mb-24">
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
              {menuItems &&
                menuItems.map((item, index) => {
                  const menuIsActive = pathname.includes(item.url);
                  return (
                    <li key={index} className="border-0">
                      <Link
                        href={item.url}
                        className={cn(
                          menuIsActive
                            ? "block py-2 px-3 bg-transparent text-blue-700 p-0 dark:text-blue-500"
                            : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:bg-transparent"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-2 mx-2">
              <ModeToggle />
            </div>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon" className="-ml-2">
                  <Menu className={cn("h-[1.2rem] w-[1.2rem]")} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="px-3 py-4" hideClose>
                <SheetHeader className="flex flex-row justify-between items-center space-y-0 border-b border-gray-700 pb-2">
                  <SheetTitle asChild>
                    <span className="text-lg font-semibold text-foreground mx-3">
                      Login
                    </span>
                  </SheetTitle>
                  <SheetClose asChild>
                    <Button className="h-7 w-7 p-0" variant="ghost">
                      <X size={15} />
                    </Button>
                  </SheetClose>
                </SheetHeader>
                <SheetDescription asChild>
                  <ul className="font-semibold text-md flex flex-col mt-2">
                    {menuItems &&
                      menuItems.map((item, index) => {
                        const menuIsActive = pathname.includes(item.url);
                        return (
                          <li key={index} className="border-0">
                            <SheetClose asChild>
                              <Link
                                href={item.url}
                                className={cn(
                                  menuIsActive
                                    ? "block py-2 px-3 bg-transparent text-blue-700 dark:text-blue-500"
                                    : "block py-2 px-3 text-gray-900 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:text-gray-100 dark:hover:bg-blue-700"
                                )}
                              >
                                {item.name}
                              </Link>
                            </SheetClose>
                          </li>
                        );
                      })}
                    <li className="mt-2 pt-4 border-t border-gray-700">
                      <SheetClose asChild>
                        <Link
                          href="#"
                          className="block py-2 px-3 rounded-md text-gray-100 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Cerrar sesión
                        </Link>
                      </SheetClose>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
