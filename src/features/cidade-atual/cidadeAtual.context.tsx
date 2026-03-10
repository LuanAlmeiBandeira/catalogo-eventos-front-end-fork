import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { useSearchParams } from "react-router-dom";
import {
  CIDADE_DEFAULT,
  CIDADE_STORAGE_KEY,
  type ICidadeAtual,
  type ICidadeAtualContextValue,
} from "./cidadeAtual.types";
import { findCidadeBySlug } from "./cidadeAtual.utils";

const CidadeAtualContext = createContext<ICidadeAtualContextValue | null>(null);

function readStoredCidade(): ICidadeAtual | null {
  try {
    const rawValue: string | null =
      window.localStorage.getItem(CIDADE_STORAGE_KEY);

    if (!rawValue) {
      return null;
    }

    const parsedValue: unknown = JSON.parse(rawValue);

    if (
      typeof parsedValue === "object" &&
      parsedValue !== null &&
      "id" in parsedValue &&
      "nome" in parsedValue &&
      "slug" in parsedValue
    ) {
      const cidade = parsedValue as ICidadeAtual;
      return cidade;
    }

    return null;
  } catch {
    return null;
  }
}

export function CidadeAtualProvider({
  children,
}: PropsWithChildren): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  const [cidade, setCidadeState] = useState<ICidadeAtual>(() => {
    const cidadeSlugFromUrl: string | null = searchParams.get("cidade");

    if (cidadeSlugFromUrl) {
      return findCidadeBySlug(cidadeSlugFromUrl);
    }

    const storedCidade: ICidadeAtual | null = readStoredCidade();

    return storedCidade ?? CIDADE_DEFAULT;
  });

  const setCidade = useCallback(
    (nextCidade: ICidadeAtual): void => {
      setCidadeState(nextCidade);

      window.localStorage.setItem(
        CIDADE_STORAGE_KEY,
        JSON.stringify(nextCidade),
      );

      const nextParams: URLSearchParams = new URLSearchParams(searchParams);
      nextParams.set("cidade", nextCidade.slug);
      setSearchParams(nextParams, { replace: true });
    },
    [searchParams, setSearchParams],
  );

  useEffect(() => {
    const cidadeSlugFromUrl: string | null = searchParams.get("cidade");

    if (!cidadeSlugFromUrl) {
      return;
    }

    if (cidadeSlugFromUrl !== cidade.slug) {
      setCidadeState(findCidadeBySlug(cidadeSlugFromUrl));
    }
  }, [searchParams, cidade.slug]);

  const contextValue: ICidadeAtualContextValue = useMemo(
    () => ({
      cidade,
      setCidade,
    }),
    [cidade, setCidade],
  );

  return (
    <CidadeAtualContext.Provider value={contextValue}>
      {children}
    </CidadeAtualContext.Provider>
  );
}

export { CidadeAtualContext };
