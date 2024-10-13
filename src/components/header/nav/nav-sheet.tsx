"use client";

import { IMenuItemsNavbar } from "@/app/interfaces/nav/IMenuItemsNavbar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { getMenuItemsUnknown, getMenuItemsUser } from "./menuItems";
import { signOut, useSession } from "next-auth/react";

export function NavSheet({ pathname }: { pathname: string }) {
  const { data: session } = useSession();
  const menuItemsUser: IMenuItemsNavbar[] = session?.user
    ? getMenuItemsUser()
    : getMenuItemsUnknown();

  return (
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
            {menuItemsUser &&
              menuItemsUser.map((item, index) => {
                const menuIsActive = pathname.includes(item.url);
                return (
                  <li
                    key={index}
                    className={cn(
                      item.url === "/api/auth/signout"
                        ? "mt-2 pt-4 border-t border-gray-700"
                        : "border-0"
                    )}
                  >
                    {item.url === "/api/auth/signout" ? (
                      <Button
                        variant="ghost"
                        className="block py-2 px-3 text-gray-900 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:text-gray-100 dark:hover:bg-blue-700 w-full text-left"
                        onClick={() => signOut()}
                      >
                        <span>{item.name}</span>
                      </Button>
                    ) : (
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
                    )}
                  </li>
                );
              })}

            {/* <li className="mt-2 pt-4 border-t border-gray-700">
              <SheetClose asChild>
                <Link
                  href="#"
                  className="block py-2 px-3 rounded-md text-gray-100 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Cerrar sesión
                </Link>
              </SheetClose>
            </li> */}
          </ul>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
