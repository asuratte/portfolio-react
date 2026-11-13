import type { Route } from "./+types/project-detail";
import { ProjectDetail } from "~/projects/project-detail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amber Suratte | Portfolio | Project Details" },
    { name: "description", content: "Amber Suratte's portfolio" },
  ];
}

export default function Home() {
  return <ProjectDetail />;
}
