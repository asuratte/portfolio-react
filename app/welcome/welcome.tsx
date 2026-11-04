import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu"
export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-6 pb-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
              <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink href="https://github.com/asuratte-instrumentl" target="_blank">GitHub</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink href="https://www.linkedin.com/in/asuratte/" target="_blank">LinkedIn</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </main>
  );
}
