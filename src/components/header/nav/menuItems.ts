import { IMenuItemsNavbar } from "@/app/interfaces/nav/IMenuItemsNavbar";

export function getMenuItemsUnknown() {
  const menuItemsUser: IMenuItemsNavbar[] = [
    { name: "Home", url: "/home" },
    { name: "Login", url: "/auth/login" },
    { name: "Register", url: "/auth/register" },
  ];

  return menuItemsUser;
}

export function getMenuItemsUser() {
  const menuItemsUser: IMenuItemsNavbar[] = [
    { name: "Home", url: "/home" },
    { name: "Dashboard", url: "/dashboard" },
    { name: "Settings", url: "/dashboard/settings" },
    { name: "Logout", url: "/api/auth/signout" },
  ];

  return menuItemsUser;
}
