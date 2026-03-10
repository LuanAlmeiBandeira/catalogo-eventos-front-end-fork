import type { IEvento } from "@/entities/evento/evento.types";
import type { IPontoTuristico } from "@/entities/ponto-turistico/pontoTuristico.types";
import { eventosMock, mockDelay, pontosMock } from "./mock-data";
import type {
  IListByCidadeParams,
  IListResponse,
  ITourismApiClient,
} from "./tourismApi.types";

function paginateItems<TItem>(
  items: TItem[],
  page: number,
  limit: number
): IListResponse<TItem> {
  const safePage: number = page > 0 ? page : 1;
  const safeLimit: number = limit > 0 ? limit : 12;
  const startIndex: number = (safePage - 1) * safeLimit;
  const endIndex: number = startIndex + safeLimit;

  return {
    items: items.slice(startIndex, endIndex),
    total: items.length,
    page: safePage,
    limit: safeLimit,
  };
}

function includesNormalizedValue(
  sourceValue: string | undefined,
  targetValue: string | undefined
): boolean {
  if (!targetValue) {
    return true;
  }

  if (!sourceValue) {
    return false;
  }

  return sourceValue.toLowerCase().includes(targetValue.toLowerCase());
}

export const tourismApiClient: ITourismApiClient = {
  async listEventosByCidade(
    params: IListByCidadeParams
  ): Promise<IListResponse<IEvento>> {
    await mockDelay();

    const filteredItems: IEvento[] = eventosMock.filter((item: IEvento) => {
      const matchesCidade: boolean = item.cidadeSlug === params.cidade;
      const matchesBusca: boolean = includesNormalizedValue(
        item.nome,
        params.busca
      );
      const matchesCategoria: boolean =
        !params.categoria || item.categoria === params.categoria;

      return matchesCidade && matchesBusca && matchesCategoria;
    });

    return paginateItems<IEvento>(filteredItems, params.page, params.limit);
  },

  async listPontosByCidade(
    params: IListByCidadeParams
  ): Promise<IListResponse<IPontoTuristico>> {
    await mockDelay();

    const filteredItems: IPontoTuristico[] = pontosMock.filter(
      (item: IPontoTuristico) => {
        const matchesCidade: boolean = item.cidadeSlug === params.cidade;
        const matchesBusca: boolean = includesNormalizedValue(
          item.nome,
          params.busca
        );
        const matchesCategoria: boolean =
          !params.categoria || item.categoria === params.categoria;

        return matchesCidade && matchesBusca && matchesCategoria;
      }
    );

    return paginateItems<IPontoTuristico>(
      filteredItems,
      params.page,
      params.limit
    );
  },

  async getEventoById(id: string): Promise<IEvento | null> {
    await mockDelay(180);

    const evento: IEvento | undefined = eventosMock.find(
      (item: IEvento) => item.id === id
    );

    return evento ?? null;
  },

  async getPontoById(id: string): Promise<IPontoTuristico | null> {
    await mockDelay(180);

    const ponto: IPontoTuristico | undefined = pontosMock.find(
      (item: IPontoTuristico) => item.id === id
    );

    return ponto ?? null;
  },
};