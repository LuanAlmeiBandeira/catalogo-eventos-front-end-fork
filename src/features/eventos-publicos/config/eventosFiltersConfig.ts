import type { ICatalogoFiltersConfig } from "@/features/catalogo-publico/model/catalogo.filters";

export const eventosFiltersConfig: ICatalogoFiltersConfig = {
  searchPlaceholder: "Busque um evento por nome",
  categorias: [
    { label: "Cultura", value: "Cultura" },
    { label: "Gastronomia", value: "Gastronomia" },
    { label: "Música", value: "Música" },
  ],
};