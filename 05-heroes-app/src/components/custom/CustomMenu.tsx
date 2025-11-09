import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <NavigationMenu className="py-5">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive("/") && "bg-slate-200", "p-2 rounded-md")}
          >
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              isActive("/search") && "bg-slate-200",
              "p-2 rounded-md"
            )}
          >
            <Link to="/search">Buscar Superhéroes</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
