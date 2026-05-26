import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import TechStack from "@/components/landing/TechStack";
import DevTools from "@/components/landing/DevTools";
import Architecture from "@/components/landing/Architecture";
import DatabaseEvolution from "@/components/landing/DatabaseEvolution";
import UxEvolution from "@/components/landing/UxEvolution";
import ExternalApi from "@/components/landing/ExternalApi";
import ApiDocs from "@/components/landing/ApiDocs";
import Team from "@/components/landing/Team";
import Footer from "@/components/landing/Footer";
import Starfield from "@/components/landing/Starfield";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Stack Tec VitaSalud" },
      {
        name: "description",
        content:
          "Recorrido técnico por VitaSalud: stack full-stack, herramientas de desarrollo, arquitectura MVC, evolución de la base de datos y diseño UX/UI.",
      },
      { property: "og:title", content: "Stack Tec VitaSalud" },
      {
        property: "og:description",
        content: "React 19 + Node.js + MySQL · MVC · Figma · MySQL Workbench · VS Code.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-[#02030a] text-slate-100 antialiased">
      <Starfield />
      <Nav />
      <Hero />
      <TechStack />
      <DevTools />
      <Architecture />
      <DatabaseEvolution />
      <UxEvolution />
      <ExternalApi />
      <ApiDocs />
      <Team />
      <Footer />
    </main>
  );
}
