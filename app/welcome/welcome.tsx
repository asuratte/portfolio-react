import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

export function Welcome() {
  return (
    <div>
      <header className="flex px-6 py-4 w-full bg-secondary justify-center items-center">
        <div className="flex flex-col w-full max-w-6xl items-center justify-between sm:flex-row">
          <div className="flex items-center">
            <Avatar className="h-16 w-16 border-2 border-accent outline-3 outline-primary">
              <AvatarImage src="../../public/amber_suratte_headshot_small.jpg" aria-hidden />
              <AvatarFallback aria-hidden >AS</AvatarFallback>
            </Avatar>
            <div className="flex-col ml-3" >
              <h1 className="text-3xl font-medium font-heading text-black">Amber Suratte</h1>
              <p className="text-base font-medium text-secondary-foreground">Full Stack Software Engineer</p>
            </div>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="gap-2 mt-4 sm:mt-0">
              <NavigationMenuItem>
                  <NavigationMenuLink href="/" aria-label="Home" className="bg-accent-foreground text-accent p-2 hover:text-accent-foreground focus:text-accent-foreground"><FontAwesomeIcon icon={faHouse} className="text-2xl fa-fw" aria-hidden /></NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="https://github.com/asuratte-instrumentl" target="_blank" aria-label="GitHub Profile" className="bg-accent-foreground text-accent p-2 hover:text-accent-foreground focus:text-accent-foreground">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl fa-fw" aria-hidden /></NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="https://www.linkedin.com/in/asuratte/" target="_blank" aria-label="LinkedIn Profile" className="bg-accent-foreground text-accent p-2 hover:text-accent-foreground focus:text-accent-foreground">
                  <FontAwesomeIcon icon={faSquareLinkedin} className="text-2xl fa-fw" aria-hidden /></NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <main className="flex-row min-h-dvh bg-background">
        <section className="flex-row text-center pt-6 gap-6 mx-6 max-w-6xl xl:mx-auto">
          <h2 className="text-2xl font-medium font-heading text-black mb-3">Hey there! 😺</h2>
          <h3 className="text-lg max-w-xl mx-auto leading-tight mb-3 text-secondary-foreground">I'm a product-minded, front-end-leaning software engineer with a keen eye for design and a passion for problem-solving.</h3>
          <p className="text-base max-w-xl mx-auto leading-tight mb-3 text-secondary-foreground font-medium">Take a peek at some of my recent projects 👇</p>
        </section>
        <section className="flex flex-col pt-6 gap-6 mx-6 max-w-6xl md:flex-row xl:mx-auto">
          <Card className="relative mx-auto w-full max-w-md pt-0">
            <img
              src="https://placekittens.com/450/250"
              alt=""
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardTitle className="text-xl normal-case tracking-normal">Project 1</CardTitle>
              <CardDescription className="text-base">
                A really good portfolio piece.
              </CardDescription>
              <ul className="flex gap-2 mt-2 flex-wrap">
                <li className="text-sm font-light text-accent-foreground bg-accent px-3 py-1 rounded-2xl">Rails</li>
                <li className="text-sm font-light text-accent-foreground bg-accent px-3 py-1 rounded-2xl">Tailwind</li>
                <li className="text-sm font-light text-accent-foreground bg-accent px-3 py-1 rounded-2xl">Accessibility</li>
              </ul>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button className="w-full normal-case text-base tracking-normal">View Project</Button>
            </CardFooter>
          </Card>
          <Card className="relative mx-auto w-full max-w-md pt-0">
            <img
              src="https://placekittens.com/450/250"
              alt=""
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardTitle className="text-xl normal-case tracking-normal">Project 2</CardTitle>
              <CardDescription className="text-base">
                A really good portfolio piece.
              </CardDescription>
              <ul className="flex gap-2 mt-2 flex-wrap">
                <li className="text-sm font-light text-accent-foreground bg-accent px-3 py-1 rounded-2xl">Rails</li>
                <li className="text-sm font-light text-accent-foreground bg-accent px-3 py-1 rounded-2xl">Tailwind</li>
                <li className="text-sm font-light text-accent-foreground bg-accent px-3 py-1 rounded-2xl">Accessibility</li>
              </ul>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button className="w-full normal-case text-base tracking-normal">View Project</Button>
            </CardFooter>
          </Card>
          <Card className="relative mx-auto w-full max-w-md pt-0">
            <img
              src="https://placekittens.com/450/250"
              alt=""
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardTitle className="text-xl normal-case tracking-normal">Project 3</CardTitle>
              <CardDescription className="text-base">
                A really good portfolio piece.
              </CardDescription>
              <ul className="flex gap-2 mt-2 flex-wrap">
                <li className="text-sm font-light text-accent-foreground bg-accent px-3 py-1 rounded-2xl">Rails</li>
                <li className="text-sm font-light text-accent-foreground bg-accent px-3 py-1 rounded-2xl">Tailwind</li>
                <li className="text-sm font-light text-accent-foreground bg-accent px-3 py-1 rounded-2xl">Accessibility</li>
              </ul>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button className="w-full normal-case text-base tracking-normal" >View Project</Button>
            </CardFooter>
          </Card>
        </section>
      </main>
      <footer className="bg-accent-foreground p-3 text-center">
        <p className="text-xs text-accent">&copy; {new Date().getFullYear()} Amber Suratte</p>
      </footer>
    </div>
  );
}
