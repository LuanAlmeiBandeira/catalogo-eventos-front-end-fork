import { useState, type FormEvent } from "react";
import Header from "../features/eventos/componentes/Header";
import { Button, Card, Modal } from "../shared/ui";
import type { PontoTuristico, Cidade } from "../domain";

interface PontoFormModalProps {
  open: boolean;
  initialValue: PontoTuristico | null;
  cidadeId: string | null;
  cidades: Cidade[];
  onClose: () => void;
  onSave: (
    cidadeId: string,
    data: Omit<PontoTuristico, "id"> & { id?: string }
  ) => void;
}


const PontoPage : React.FC<PontoFormModalProps> = ({
  open,
  initialValue,
  cidadeId,
  cidades,
  onClose,
  onSave,
}) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleSideMenuOpen = () => {
    setIsSideMenuOpen((prev) => !prev);
  };

    function handleSubmit(_event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div className="min-h-screen text-[#e9f2ff] bg-slate-950">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-slate-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Ir para o conteúdo
      </a>
      {/* overlay do menu lateral */}
      {isSideMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={handleSideMenuOpen}
        />
      )}

      <Header
        open={isSideMenuOpen}
        handleSideMenuOpen={handleSideMenuOpen}
      />
      <main
        id="conteudo-principal"
        className="max-w-5xl mx-auto px-4 pb-16 pt-8"
      >
        <Modal onClose={onClose} ariaDescribedBy="titulo-modal-ponto-turistico">
              <div className="mb-4 flex items-center justify-between gap-2">
                <strong className="text-sm md:text-base">
                  {initialValue?.id ? "Editar ponto turístico" : "Novo ponto turístico"}
                </strong>
                <Button size="sm" onClick={onClose}>
                  Fechar
                </Button>
              </div>
        
              <form
                className="flex flex-col gap-4 text-sm"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className="flex flex-col md:flex-row gap-3">
                  <label className="flex-1 flex flex-col gap-1">
                    <span>Nome do ponto</span>
                    <input
                      name="nome"
                      defaultValue={initialValue?.nome ?? ""}
                      className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none"
                    />
                  </label>
                  <label className="flex-1 flex flex-col gap-1">
                    <span>Tipo</span>
                    <input
                      name="tipo"
                      placeholder="Ex.: Parque, Museu, Praça…"
                      defaultValue={initialValue?.tipo ?? ""}
                      className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none"
                    />
                  </label>
                </div>
        
                <div className="flex flex-col md:flex-row gap-3">
                  <label className="flex-1 flex flex-col gap-1">
                    <span>Cidade</span>
                    <select
                      name="cidadeId"
                      defaultValue={cidadeId ?? ""}
                      className="rounded-xl border border-white/20 bg-slate-800 px-3 py-2 outline-none"
                    >
                      <option value="">Selecione…</option>
                      {cidades.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.nome} - {c.uf}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex-1 flex flex-col gap-1">
                    <span>Horário</span>
                    <input
                      name="horario"
                      placeholder="Ex.: Ter–Dom, 9h–17h"
                      defaultValue={initialValue?.horario ?? ""}
                      className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none"
                    />
                  </label>
                </div>
        
                <label className="flex flex-col gap-1">
                  <span>Imagem (URL)</span>
                  <input
                    name="img"
                    placeholder="Cole o link da imagem"
                    defaultValue={initialValue?.img ?? ""}
                    className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none"
                  />
                </label>
        
                <label className="flex flex-col gap-1">
                  <span>Descrição</span>
                  <textarea
                    name="desc"
                    rows={4}
                    placeholder="Detalhes do ponto turístico…"
                    defaultValue={initialValue?.desc ?? ""}
                    className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none resize-none"
                  />
                </label>
        
                <div className="mt-2 flex justify-end">
                  <Button variant="primary" size="sm" type="submit">
                    Salvar ponto
                  </Button>
                </div>
              </form>
            </Modal>
        
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-[#9fb0c8]">
        Dourados+ • Projeto Inovador • Turma 2024.45.253 • Senac-MS.
      </footer>
    </div>
  );
};

export default PontoPage;
