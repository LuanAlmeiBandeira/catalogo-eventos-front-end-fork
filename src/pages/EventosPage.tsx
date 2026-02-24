import { useState, type FormEvent } from "react";
import Header from "../features/eventos/componentes/Header";
import { Button, Card, Modal } from "../shared/ui";
import type { Evento } from "../domain";

interface EventFormModalProps {
  open: boolean;
  initialValue: Evento | null;
  onClose: () => void;
  onSave: (data: Omit<Evento, "id"> & { id?: string }) => void;
}

const EventosPage: React.FC<EventFormModalProps> = ({
  open,
  initialValue,
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
        <Modal onClose={onClose} ariaDescribedBy="titulo-modal-evento">
              <div className="mb-4 flex items-center justify-between gap-2">
                <strong className="text-sm md:text-base">
                  {initialValue?.id ? "Editar evento" : "Novo evento"}
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
                    <span>Título</span>
                    <input
                      name="titulo"
                      defaultValue={initialValue?.titulo ?? ""}
                      className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none"
                    />
                  </label>
                  <label className="flex-1 flex flex-col gap-1">
                    <span>Categoria</span>
                    <select
                      name="cat"
                      defaultValue={initialValue?.cat ?? "Show"}
                      className="rounded-xl border border-white/20 bg-slate-800 px-3 py-2 outline-none"
                    >
                      <option>Show</option>
                      <option>Esporte</option>
                      <option>Feira</option>
                      <option>Teatro</option>
                      <option>Gastronomia</option>
                    </select>
                  </label>
                </div>
        
                <div className="flex flex-col md:flex-row gap-3">
                  <label className="flex-1 flex flex-col gap-1">
                    <span>Data</span>
                    <input
                      type="date"
                      name="data"
                      defaultValue={initialValue?.data ?? ""}
                      className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none"
                    />
                  </label>
                  <label className="flex-1 flex flex-col gap-1">
                    <span>Hora</span>
                    <input
                      type="time"
                      name="hora"
                      defaultValue={initialValue?.hora ?? ""}
                      className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none"
                    />
                  </label>
                  <label className="flex-1 flex flex-col gap-1">
                    <span>Preço</span>
                    <input
                      name="preco"
                      placeholder="Ex.: Gratuito ou R$ 30,00"
                      defaultValue={initialValue?.preco ?? ""}
                      className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none"
                    />
                  </label>
                </div>
        
                <label className="flex flex-col gap-1">
                  <span>Local</span>
                  <input
                    name="local"
                    placeholder="Endereço / bairro"
                    defaultValue={initialValue?.local ?? ""}
                    className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none"
                  />
                </label>
        
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
                    placeholder="Detalhes do evento…"
                    defaultValue={initialValue?.desc ?? ""}
                    className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none resize-none"
                  />
                </label>
        
                <div className="mt-2 flex justify-end">
                  <Button variant="primary" size="sm" type="submit">
                    Salvar
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

export default EventosPage;
