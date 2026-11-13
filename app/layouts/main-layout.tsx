// app/layouts/main-layout.tsx
import { Outlet } from "react-router";
import Header from "~/header";
import Footer from "~/footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
