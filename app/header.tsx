import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu"
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <header className="flex px-6 py-4 w-full bg-secondary justify-center items-center">
      <div className="flex flex-col w-full max-w-6xl items-center justify-between sm:flex-row">
        <div className="flex items-center">
          <Avatar className="h-16 w-16 border-2 border-accent outline-3 outline-primary">
            <AvatarImage src="../public/amber_suratte_headshot_small.jpg" aria-hidden />
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
  )
}
