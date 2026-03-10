import type { ICidade } from "@/entities/cidade/cidade.types";
import { CIDADES_PUBLICAS } from "@/entities/cidade/cidades.constants";
import { CIDADE_DEFAULT } from "./cidadeAtual.types";

export function findCidadeBySlug(slug: string): ICidade {
  const foundCidade: ICidade | undefined = CIDADES_PUBLICAS.find(
    (cidade: ICidade) => cidade.slug === slug
  );

  return foundCidade ?? CIDADE_DEFAULT;
}