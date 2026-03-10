import type { IEvento } from "@/entities/evento/evento.types";
import type { IPontoTuristico } from "@/entities/ponto-turistico/pontoTuristico.types";

export interface IListResponse<TItem> {
  items: TItem[];
  total: number;
  page: number;
  limit: number;
}

export interface IListByCidadeParams {
  cidade: string;
  page: number;
  limit: number;
  busca?: string;
  categoria?: string;
}

export interface ITourismApiClient {
  listEventosByCidade: (
    params: IListByCidadeParams
  ) => Promise<IListResponse<IEvento>>;
  listPontosByCidade: (
    params: IListByCidadeParams
  ) => Promise<IListResponse<IPontoTuristico>>;
  getEventoById: (id: string) => Promise<IEvento | null>;
  getPontoById: (id: string) => Promise<IPontoTuristico | null>;
}