import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className=" ">
      <Button
        className="dark:flex hidden items-center justify-center"
        variant="outline"
        size="icon"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] text-foreground" />
      </Button>

      <Button
        className="flex dark:hidden items-center justify-center"
        variant="outline"
        size="icon"
        onClick={() => setTheme("dark")}
      >
        <Moon className="absolute h-[1.2rem] w-[1.2rem] text-foreground" />
      </Button>
    </div>
  );
}
