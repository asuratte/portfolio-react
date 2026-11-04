import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar"
import { Icons } from "~/components/icons"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { House } from "lucide-react"

export function Welcome() {
  return (
    <main className="flex-row min-h-dvh bg-background">
      <header className="flex px-6 py-4 w-full bg-secondary justify-center items-center">
        <div className="flex flex-col w-full max-w-6xl items-center justify-between sm:flex-row">
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
        </div>
      </header>
      <section className="flex flex-col pt-6 gap-6 mx-6 max-w-6xl sm:flex-row xl:mx-auto">
        <Card className="relative mx-auto w-full max-w-md pt-0">
          <img
            src="https://placekittens.com/450/250"
            alt=""
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle>Project 1</CardTitle>
            <CardDescription className="text-base">
              A really good portfolio piece.
            </CardDescription>
            <ul className="flex gap-4 mt-2">
              <li className="text-sm text-accent-foreground bg-accent px-2 py-1">Rails</li>
              <li className="text-sm text-accent-foreground bg-accent px-2 py-1">Tailwind</li>
              <li className="text-sm text-accent-foreground bg-accent px-2 py-1">Accessibility</li>
            </ul>
          </CardHeader>
          <CardFooter className="mt-auto">
            <Button className="w-full">View Project</Button>
          </CardFooter>
        </Card>
        <Card className="relative mx-auto w-full max-w-md pt-0">
          <img
            src="https://placekittens.com/450/250"
            alt=""
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle>Project 2</CardTitle>
            <CardDescription>
              A really good portfolio piece.
            </CardDescription>
            <ul className="flex gap-4 mt-2">
              <li className="text-sm text-accent-foreground bg-accent px-2 py-1">Rails</li>
              <li className="text-sm text-accent-foreground bg-accent px-2 py-1">Tailwind</li>
              <li className="text-sm text-accent-foreground bg-accent px-2 py-1">Accessibility</li>
            </ul>
          </CardHeader>
          <CardFooter className="mt-auto">
            <Button className="w-full">View Project</Button>
          </CardFooter>
        </Card>
        <Card className="relative mx-auto w-full max-w-md pt-0">
          <img
            src="https://placekittens.com/450/250"
            alt=""
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle>Project 3</CardTitle>
            <CardDescription>
              A really good portfolio piece.
            </CardDescription>
            <ul className="flex gap-4 mt-2">
              <li className="text-sm text-accent-foreground bg-accent px-2 py-1">Rails</li>
              <li className="text-sm text-accent-foreground bg-accent px-2 py-1">Tailwind</li>
              <li className="text-sm text-accent-foreground bg-accent px-2 py-1">Accessibility</li>
            </ul>
          </CardHeader>
          <CardFooter className="mt-auto">
            <Button className="w-full">View Project</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
