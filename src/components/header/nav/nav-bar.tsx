import Link from "next/link";
import { cn } from "@/lib/utils";
import { IMenuItemsNavbar } from "@/app/interfaces/nav/IMenuItemsNavbar";
import { getMenuItemsUnknown, getMenuItemsUser } from "./menuItems";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function Navbar({ pathname }: { pathname: string }) {
  const { data: session } = useSession();
  const menuItemsUser: IMenuItemsNavbar[] = session?.user
    ? getMenuItemsUser()
    : getMenuItemsUnknown();

  return (
    <>
      {menuItemsUser &&
        menuItemsUser.map((item, index) => {
          const menuIsActive = pathname.includes(item.url);
          return (
            <li key={index} className="border-0">
              {item.url === "/api/auth/signout" ? (
                <Button
                  variant="ghost"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:bg-transparent text-base"
                  onClick={() => signOut()}
                >
                  <span>{item.name}</span>
                </Button>
              ) : (
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
              )}
            </li>
          );
        })}
    </>
  );
}
