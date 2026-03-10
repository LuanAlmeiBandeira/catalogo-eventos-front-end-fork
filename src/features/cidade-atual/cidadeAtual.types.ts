export interface ICidadeAtual {
  id: string;
  nome: string;
  slug: string;
}

export interface ICidadeAtualContextValue {
  cidade: ICidadeAtual;
  setCidade: (cidade: ICidadeAtual) => void;
}

export const CIDADE_DEFAULT: ICidadeAtual = {
  id: "dourados",
  nome: "Dourados",
  slug: "dourados",
};

export const CIDADE_STORAGE_KEY = "cidade-atual";