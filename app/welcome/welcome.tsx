import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu"
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"
import { Icons } from "../components/icons"
import { House } from "lucide-react"

export function Welcome() {
  return (
    <main className="flex-row min-h-dvh bg-background">
      <header className="flex px-6 py-4 w-full justify-between bg-secondary">
        <div className="flex items-center">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://placekittens.com/400/400" aria-hidden />
            <AvatarFallback aria-hidden >AS</AvatarFallback>
          </Avatar>
          <div className="flex-col ml-3" >
            <h1 className="text-2xl font-medium font-heading">Amber Suratte</h1>
            <p className="text-base font-medium">Software Engineer</p>
          </div>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink href="/" aria-label="Home"><House className="size-6" aria-hidden ></House ></NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="https://github.com/asuratte-instrumentl" target="_blank" aria-label="GitHub Profile"><Icons.gitHub className="size-6" aria-hidden /></NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href="https://www.linkedin.com/in/asuratte/" target="_blank" aria-label="LinkedIn Profile"><Icons.linkedIn className="size-6" aria-hidden /></NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </main>
  );
}
