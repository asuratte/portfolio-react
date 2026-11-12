import { Button } from "~/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

interface ProjectCardProps {
  key: string;
  name: string,
  short_description: string,
  tags: string[],
  call_to_action: string,
  preview_image_source: string;

}

function ProjectCard({ name, short_description, tags, call_to_action, preview_image_source }: ProjectCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-md pt-0">
      <img
        src={ preview_image_source }
        alt=""
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="text-xl normal-case tracking-normal">{ name }</CardTitle>
        <CardDescription className="text-base">
          { short_description }
        </CardDescription>
        <ul className="flex gap-2 mt-2 flex-wrap">
          {tags.map((tag) => (
            <li className="text-sm font-light text-accent-foreground bg-accent px-3 py-1 rounded-2xl">{ tag }</li>
          ))}
        </ul>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button className="w-full normal-case text-base tracking-normal">{ call_to_action }</Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard;
