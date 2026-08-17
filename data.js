/* ============================================================
   JUVE 2026 — data.js
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR NO DIA A DIA.
   Adicionou um promoter aqui? Ele aparece no site sozinho.
   ------------------------------------------------------------
   REGRAS RÁPIDAS
   • Campo vazio ('')  -> o site mostra "a confirmar" e desliga o botão.
   • whatsapp          -> pode colar do jeito que estiver: '(35) 99887-7665',
                          '35 99887 7665' ou '5535998877665'. Se faltar o 55,
                          o site coloca sozinho.
   • instagram         -> só o usuário, sem o @. Ex.: 'ojuveoficial'
   • cor               -> opcional. Se deixar de fora, o site escolhe
                          uma cor da paleta automaticamente.
   • Toda linha termina com vírgula. Não esqueça das aspas.
   ============================================================ */

const JUVE = {

  /* ---------- Ajustes gerais ---------- */
  config: {
    // Quantos promoters vão existir no total (usado no card "+N em breve").
    // Deixe 0 para esconder esse card.
    totalPromoters: 12,

    instagramOficial: 'ojuveoficial',

    // Mensagem que já vem digitada quando a pessoa abre o WhatsApp.
    msgIngresso: 'Olá! Vim pelo site do JUVE 2026 e quero comprar meu ingresso.',
    msgExcursao: 'Olá! Vim pelo site do JUVE 2026 e quero saber sobre a excursão de {cidade}.'
  },

  /* ---------- PONTOS DE VENDA ---------- */
  pdvs: [
    {
      nome: 'Rei da Régua',
      cor: '#2BBEEF',
      logo: 'img/pdv-rei-da-regua.png',
      endereco: '',      // ex.: 'Rua Cel. Francisco Braz, 100 — Centro, Santa Rita do Sapucaí'
      instagram: '',     // ex.: 'reidaregua'
      whatsapp: '',      // ex.: '5535998877665'
      maps: ''           // opcional: cole aqui um link pronto do Google Maps
    },
    {
      nome: 'Juliano Silveiro — Barbearia Primer',
      cor: '#EE18C8',
      logo: 'img/pdv-barbearia-primer.png',
      endereco: '',
      instagram: '',
      whatsapp: '',
      maps: ''
    },
    {
      nome: 'Braza Pub',
      cor: '#A9D822',
      logo: 'img/pdv-braza-pub.png',
      endereco: '',
      instagram: '',
      whatsapp: '',
      maps: ''
    },
    {
      nome: 'Abloh',
      cor: '#F2AF25',
      logo: 'img/pdv-abloh.png',
      endereco: '',
      instagram: '',
      whatsapp: '',
      maps: ''
    },
    {
      nome: 'P35 — Lounge Bar',
      cor: '#EE7834',
      logo: 'img/pdv-p35.png',
      endereco: '',
      instagram: '',
      whatsapp: '',
      maps: ''
    }
  ],

  /* ---------- PROMOTERS ----------
     Para adicionar um promoter, copie o bloco abaixo e cole
     logo depois, trocando os dados. A foto é opcional: sem foto,
     o site mostra as iniciais do nome dentro do círculo.        */
  promoters: [
    {
      nome: 'Nome do Promoter',
      foto: 'img/promoter-1.jpg',
      atletica: '',      // ex.: 'Atlética Engenharia'
      cidade: '',        // ex.: 'Itajubá'
      instagram: '',
      whatsapp: ''
    }
  ],

  /* ---------- EXCURSÕES ---------- */
  excursoes: [
    { cidade: 'Cambuí',                 uf: 'MG', responsavel: '', whatsapp: '', saida: '' },
    { cidade: 'Estiva',                 uf: 'MG', responsavel: '', whatsapp: '', saida: '' },
    { cidade: 'Pouso Alegre',           uf: 'MG', responsavel: '', whatsapp: '', saida: '' },
    { cidade: 'Pouso Alegre',           uf: 'MG', responsavel: '', whatsapp: '', saida: '' },
    { cidade: 'Itajubá',                uf: 'MG', responsavel: '', whatsapp: '', saida: '' },
    { cidade: 'Piranguinho',            uf: 'MG', responsavel: '', whatsapp: '', saida: '' },
    { cidade: 'Santa Rita do Sapucaí',  uf: 'MG', responsavel: '', whatsapp: '', saida: '' },
    { cidade: 'Conceição dos Ouros',    uf: 'MG', responsavel: '', whatsapp: '', saida: '' },
    { cidade: 'Cachoeira de Minas',     uf: 'MG', responsavel: '', whatsapp: '', saida: '' },
    { cidade: 'Paraisópolis',           uf: 'MG', responsavel: '', whatsapp: '', saida: '' }
  ]
};
