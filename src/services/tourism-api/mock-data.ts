import type { IEvento } from "@/entities/evento/evento.types";
import type { IPontoTuristico } from "@/entities/ponto-turistico/pontoTuristico.types";

export const eventosMock: IEvento[] = [
  {
    id: "evt-4",
    cidadeId: "dourados",
    cidadeSlug: "dourados",
    nome: "Encontro de Música Independente",
    descricao: "Shows autorais e experiências culturais locais.",
    categoria: "Música",
    dataInicio: "2026-06-15",
    dataFim: "2026-06-15",
    dataFormatada: "15 de junho de 2026",
    local: "Centro Cultural",
    imagemPrincipal: "/vite.svg",
    destaque: false,
  },
  {
    id: "evt-5",
    cidadeId: "dourados",
    cidadeSlug: "dourados",
    nome: "Mostra de Cultura Regional",
    descricao: "Apresentações, artesanato e culinária típica.",
    categoria: "Cultura",
    dataInicio: "2026-06-20",
    dataFim: "2026-06-21",
    dataFormatada: "20 e 21 de junho de 2026",
    local: "Praça de Eventos",
    imagemPrincipal: "/vite.svg",
    destaque: true,
  },
  {
    id: "evt-6",
    cidadeId: "dourados",
    cidadeSlug: "dourados",
    nome: "Circuito Sabores do MS",
    descricao: "Experiências gastronômicas com chefs convidados.",
    categoria: "Gastronomia",
    dataInicio: "2026-07-02",
    dataFim: "2026-07-03",
    dataFormatada: "2 e 3 de julho de 2026",
    local: "Pavilhão Gastronômico",
    imagemPrincipal: "/vite.svg",
    destaque: false,
  },
  {
    id: "evt-7",
    cidadeId: "dourados",
    cidadeSlug: "dourados",
    nome: "Festival de Inverno da Cidade",
    descricao: "Programação cultural para toda a família.",
    categoria: "Cultura",
    dataInicio: "2026-07-10",
    dataFim: "2026-07-12",
    dataFormatada: "10 a 12 de julho de 2026",
    local: "Parque Central",
    imagemPrincipal: "/vite.svg",
    destaque: true,
  },
];

export const pontosMock: IPontoTuristico[] = [
  {
    id: "pto-1",
    cidadeId: "dourados",
    cidadeSlug: "dourados",
    nome: "Parque Antenor Martins",
    descricao: "Área verde com lago, pista de caminhada e espaço de lazer.",
    categoria: "Natureza",
    endereco: "Rua Antônio Emílio de Figueiredo",
    horarioFuncionamento: "Todos os dias",
    imagemPrincipal: "/vite.svg",
    destaque: true,
  },
  {
    id: "pto-2",
    cidadeId: "dourados",
    cidadeSlug: "dourados",
    nome: "Museu Histórico de Dourados",
    descricao: "Espaço com acervo cultural e histórico da região.",
    categoria: "Cultura",
    endereco: "Centro de Dourados",
    horarioFuncionamento: "08h às 17h",
    imagemPrincipal: "/vite.svg",
    destaque: false,
  },
  {
    id: "pto-3",
    cidadeId: "bonito",
    cidadeSlug: "bonito",
    nome: "Balneário Municipal",
    descricao: "Espaço de lazer com contato com a natureza.",
    categoria: "Lazer",
    endereco: "Área turística central",
    horarioFuncionamento: "09h às 17h",
    imagemPrincipal: "/vite.svg",
    destaque: true,
  },
];

export async function mockDelay(delayMs: number = 250): Promise<void> {
  await new Promise<void>((resolve: () => void) => {
    window.setTimeout(resolve, delayMs);
  });
}
