import type { Route } from "./+types/projects";
import { Projects } from "~/projects/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amber Suratte | Portfolio | Project List" },
    { name: "description", content: "Amber Suratte's portfolio" },
  ];
}

export default function Home() {
  return <Projects />;
}
