import type { PropsWithChildren, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { CidadeAtualProvider } from "@/features/cidade-atual/cidadeAtual.context";

export function AppProviders({
  children,
}: PropsWithChildren): ReactElement {
  return (
    <BrowserRouter>
      <CidadeAtualProvider>{children}</CidadeAtualProvider>
    </BrowserRouter>
  );
}