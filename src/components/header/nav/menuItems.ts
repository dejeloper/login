import { IMenuItemsNavbar } from "@/app/interfaces/nav/IMenuItemsNavbar";

export function getMenuItemsUnknown() {
  const menuItemsUser: IMenuItemsNavbar[] = [
    { name: "Inicio", url: "/home" },
    { name: "Login", url: "/auth/login" },
    { name: "Registro", url: "/auth/register" },
  ];

  return menuItemsUser;
}

export function getMenuItemsUser() {
  const menuItemsUser: IMenuItemsNavbar[] = [
    { name: "Inicio", url: "/home" },
    { name: "Dashboard", url: "/dashboard" },
    { name: "Settings", url: "/dashboard/settings" },
    { name: "Cerrar Sesión", url: "/api/auth/signout" },
  ];

  return menuItemsUser;
}
