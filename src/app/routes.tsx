import type { ReactElement } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { PublicLayout } from "@/shared/layouts/PublicLayout";
import { HomePage } from "@/features/home/pages/HomePage";
import { EventosPage } from "@/features/eventos-publicos/pages/EventosPage";
import { EventoDetailsPage } from "@/features/eventos-publicos/pages/EventoDetailsPage";
import { PontosTuristicosPage } from "@/features/pontos-publicos/pages/PontosTuristicosPage";
import { PontoTuristicoDetailsPage } from "@/features/pontos-publicos/pages/PontoTuristicoDetailsPage";
import { CityDetailsPage } from "@/features/cidades/pages/CityDetailsPage";

export function AppRoutes(): ReactElement | null {
  return useRoutes([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "eventos",
          element: <EventosPage />,
        },
        {
          path: "eventos/:id",
          element: <EventoDetailsPage />,
        },
        {
          path: "pontos-turisticos",
          element: <PontosTuristicosPage />,
        },
        {
          path: "pontos-turisticos/:id",
          element: <PontoTuristicoDetailsPage />,
        },
        {
          path: "cidades/:slug",
          element: <CityDetailsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);
}