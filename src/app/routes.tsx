import React from "react";
import TourismPage from "../pages/TourismPage";
import type { Cidade, PontoTuristico } from "../domain";

export const AppRoutes: React.FC = () => {
  // se quiser, aqui entraria o BrowserRouter depois
  // return <DouradosTourismPage />;
  return (
    <TourismPage cidades={[]} cidadeSelecionada={null} cidadeSelecionadaId={null} onCidadeSelecionadaChange={function (_id: string | null): void {
      throw new Error("Function not implemented.");
    } } buscaPonto={""} onBuscaPontoChange={function (_value: string): void {
      throw new Error("Function not implemented.");
    } } pontosFiltrados={[]} onNovoPonto={function (): void {
      throw new Error("Function not implemented.");
    } } onEditarCidade={function (_cidade: Cidade): void {
      throw new Error("Function not implemented.");
    } } onEditarPonto={function (_ponto: PontoTuristico): void {
      throw new Error("Function not implemented.");
    } } onExcluirPonto={function (_pontoId: string): void {
      throw new Error("Function not implemented.");
    } } onIrParaCidades={function (): void {
      throw new Error("Function not implemented.");
    } } />
  );
};