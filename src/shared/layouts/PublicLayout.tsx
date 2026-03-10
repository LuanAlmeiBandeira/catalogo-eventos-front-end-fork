import { SiteFooter } from "@/shared/ui/SiteFooter";
import { TopNav } from "@/shared/ui/TopNav";
import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export function PublicLayout(): ReactElement {
  return (
    <div className="bg-portal flex min-h-screen flex-col bg-white text-zinc-900">
      <TopNav />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}