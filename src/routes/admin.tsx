import { createFileRoute } from "@tanstack/react-router";
import { ExternalAdminPage } from "@/components/external-admin-page";
export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [
    { title: "DaftCoin Admin — Vertex" },
    { name: "description", content: "Authorized price and trend controls for Vertex's DaftCoin market." },
    { property: "og:title", content: "DaftCoin Admin — Vertex" },
    { property: "og:description", content: "Manage the DAFT market with authorized price and trend updates." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "noindex" },
  ] }),
  component: ExternalAdminPage,
});
