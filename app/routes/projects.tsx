import type { Route } from "./+types/projects";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amber Suratte | Portfolio" },
    { name: "description", content: "Amber Suratte's portfolio" },
  ];
}

export default function Home() {
  return <Welcome />;
}
