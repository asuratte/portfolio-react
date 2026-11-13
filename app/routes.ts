import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("layouts/main-layout.tsx", [
    index("routes/home.tsx"),
    route("projects", "routes/projects.tsx"),
    route("projects/:projectId", "routes/project-detail.tsx"),
  ]),
] satisfies RouteConfig;
