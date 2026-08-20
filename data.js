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
    totalPromoters: 14,

    instagramOficial: 'ojuveoficial',

    // Mensagem que já vem digitada quando a pessoa abre o WhatsApp.
    // {nome}   -> primeiro nome do promoter/responsável
    // {cidade} -> cidade de saída da excursão
    msgIngresso: 'Olá {nome}! Gostaria de comprar os ingressos do JUVE 2026!',
    msgExcursao: 'Olá {nome}! Vim pelo site do JUVE e gostaria de saber sobre a excursão saindo de {cidade}, ainda tem vaga?'
  },

  /* ---------- PONTOS DE VENDA ---------- */
  pdvs: [
    {
      nome: 'Rei da Régua',
      cor: '#2BBEEF',
      logo: 'img/pdv-rei-da-regua.jpg',
      endereco: 'Alameda das Flores - Praça Santa Rita, 6 - Centro, Santa Rita do Sapucaí - MG, 37536-060',
      cidade: 'Santa Rita do Sapucaí',
      instagram: 'reidareguaoficial',
      maps: 'https://www.google.com/maps/place/Rei+da+R%C3%A9gua+%7C+Barbearia/data=!4m2!3m1!1s0x0:0x460832be8326b352?sa=X&ved=1t:2428&ictx=111'
    },
    {
      nome: 'Juliano Silveiro — Barbearia Primer',
      cor: '#EE18C8',
      logo: 'img/pdv-barbearia-primer.jpg',
      endereco: 'R. Silvestre Ferraz, 116 - Centro, Santa Rita do Sapucaí - MG, 37540-000',
      cidade: 'Santa Rita do Sapucaí',
      instagram: 'js.barbearias',
      maps: 'https://www.google.com/maps/place/Juliano+Silv%C3%A9rio+Barbearia+Primer/data=!4m2!3m1!1s0x0:0xacb3d3d8817418c8?sa=X&ved=1t:2428&ictx=111'
    },
    {
      nome: 'Brazza Pub',
      cor: '#A9D822',
      logo: 'img/pdv-brazza-pub.png',
      endereco: 'Av. João de Camargo, 450 - Delcides Teles, Santa Rita do Sapucaí - MG, 37540-000',
      cidade: 'Santa Rita do Sapucaí',
      instagram: 'brazza.pub',
      maps: 'https://www.google.com/maps/place/brazza+pub/data=!4m2!3m1!1s0x94cba3775b971d0f:0x1907dbbf5847bb9b?sa=X&ved=1t:242&ictx=111'
    },
    {
      nome: 'Abloh',
      cor: '#F2AF25',
      logo: 'img/pdv-abloh.png',
      endereco: 'R. Cel. Otávio Meyer, 160 - Lj 426 - Centro, Pouso Alegre - MG, 37550-068',
      cidade: 'Pouso Alegre',
      instagram: 'useabloh__',
      maps: 'https://www.google.com/maps/place/Abloh+%7C+Vestu%C3%A1rio+Premium/@-22.2292615,-45.9415763,995m/data=!3m1!1e3!4m6!3m5!1s0x94cbc7e3ab9933e5:0x8dffb0a291413090!8m2!3d-22.2292149!4d-45.9384511!16s%2Fg%2F11xrk_g7k9?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      nome: 'P35 — Lounge Bar',
      cor: '#EE7834',
      logo: 'img/pdv-p35.png',
      endereco: 'R. Ver. Antônio Ribeiro Vasconcelos, 75 - Centro, Pouso Alegre - MG, 37550-000',
      cidade: 'Pouso Alegre',
      instagram: 'p35bar',
      maps: 'https://www.google.com/maps/place/p35+lounge+bar/data=!4m2!3m1!1s0x94cbc7ba99f0d1c9:0xb0aa2283a478ee31?sa=X&ved=1t:242&ictx=111'
    },
    {
      nome: 'TRB',
      cor: '#2BBEEF',
      logo: 'img/pdv-trb.jpg',
      endereco: '',
      cidade: 'Santa Rita do Sapucaí',
      instagram: 'trbtorneios',
      // Sem "maps": o botão vira "Contato" e chama o WhatsApp abaixo
      // (mesmo número do promoter Gabriel Castro).
      whatsapp: '+55 35 99875-8947'
    }
  ],

  /* ---------- PROMOTERS ----------
     Para adicionar um promoter, copie o bloco abaixo e cole
     logo depois, trocando os dados. A foto é opcional: sem foto,
     o site mostra as iniciais do nome dentro do círculo.        */
  promoters: [
    {
      nome: 'Ana Julia Siqueira',
      foto: 'img/promoter-ana-julia-siqueira.jpeg',
      atletica: '',
      cidade: 'Delfim Moreira',
      instagram: 'siqueiranaju_',
      whatsapp: '+55 35 99979-0192'
    },
    {
      nome: 'Anna Gabriella Mendes',
      foto: 'img/promoter-anna-gabriella-mendes.jpeg',
      atletica: '',
      cidade: 'Pouso Alegre',
      instagram: 'okaygabriella',
      whatsapp: '+55 35 99830-9858'
    },
    {
      nome: 'Clara Duarte',
      foto: 'img/promoter-clara-duarte.jpeg',
      atletica: '',
      cidade: 'Itajubá',
      instagram: 'clara__duarte',
      whatsapp: '+55 35 99820-3103'
    },
    {
      nome: 'Debora Aline',
      foto: 'img/promoter-debora-aline.jpeg',
      atletica: '',
      cidade: 'Conceição dos Ouros',
      instagram: 'debssantos1',
      whatsapp: '+55 35 99896-2318'
    },
    {
      nome: 'Gabriel Castro',
      foto: 'img/promoter-gabriel-castro.jpeg',
      atletica: '',
      cidade: 'Santa Rita do Sapucaí',
      instagram: 'gabriel.castro14',
      whatsapp: '+55 35 99875-8947'
    },
    {
      nome: 'Giovanna Lissy',
      foto: 'img/promoter-giovanna-lissy.jpeg',
      atletica: '',
      cidade: 'Santa Rita do Sapucaí',
      instagram: 'giolissy',
      whatsapp: '+55 35 99190-1019'
    },
    {
      nome: 'Heitor Cardoso',
      foto: 'img/promoter-heitor-cardoso.jpeg',
      atletica: '',
      cidade: 'Santa Rita do Sapucaí',
      instagram: 'heitor_csantos',
      whatsapp: '+55 35 99909-4996'
    },
    {
      nome: 'Isis Costa',
      foto: 'img/promoter-isis-costa.jpeg',
      atletica: '',
      cidade: 'Santa Rita do Sapucaí',
      instagram: '_isiscosta',
      whatsapp: '+55 35 99881-1865'
    },
    {
      nome: 'Laryssa Rennó',
      foto: 'img/promoter-laryssa-renno.jpeg',
      atletica: '',
      cidade: 'Inconfidentes',
      instagram: 'layssa_rdn',
      whatsapp: '+55 35 99955-7394'
    },
    {
      nome: 'Maria Carolina Faria',
      foto: 'img/promoter-maria-carolina-faria.jpeg',
      atletica: '',
      cidade: 'Cachoeira de Minas',
      instagram: '_carolfaria07',
      whatsapp: '+55 35 99781-3063'
    },
    {
      nome: 'Maria Eduarda Vilela',
      foto: 'img/promoter-maria-eduarda-vilela.jpeg',
      atletica: '',
      cidade: 'Santa Rita do Sapucaí',
      instagram: 'duddafer',
      whatsapp: '+55 35 99915-0061'
    },
    {
      nome: 'Maria Olívia Gâmbaro',
      foto: 'img/promoter-maria-olivia-gambaro.jpeg',
      atletica: '',
      cidade: 'Poços de Caldas',
      instagram: 'mah.gambaro',
      whatsapp: '+55 35 99828-9710'
    },
    {
      nome: 'Mariana Rosa',
      foto: 'img/promoter-mariana-rosa.jpeg',
      atletica: '',
      cidade: 'Pouso Alegre / Santa Rita do Sapucaí',
      instagram: 'mariana_r0saa',
      whatsapp: '+55 35 99890-7114'
    },
    {
      nome: 'Thiago Campos',
      foto: 'img/promoter-thiago-campos.jpeg',
      atletica: '',
      cidade: 'Itajubá / Santa Rita',
      instagram: 'thiago.hocampos',
      whatsapp: '+55 35 98468-1614'
    }
  ],

  /* ---------- EXCURSÕES ----------
     Campo opcional "nome": usado quando a excursão tem um nome próprio
     (ex.: "Transfer JUVE Oficial"). Se não usar, o card mostra a cidade
     como título. A cidade continua sendo a que entra na mensagem
     do WhatsApp e no card, então preencha sempre.
     Campo opcional "msg": substitui a mensagem padrão do WhatsApp
     (config.msgExcursao) só para essa excursão. Texto fixo, sem
     placeholders {nome}/{cidade}.                                  */
  excursoes: [
    { cidade: 'Santa Rita do Sapucaí', uf: 'MG', nome: 'Transfer JUVE Oficial', responsavel: 'Thiago Campos', whatsapp: '+55 35 98468-1614', saida: 'Brazza Pub',
      msg: 'Olá Thiago! Vim pelo site e gostaria de saber se ainda tem vaga no busão do JUVE!' },
    { cidade: 'Pouso Alegre',        uf: 'MG', responsavel: 'Sofia Otaviano', whatsapp: '35 9880-3789', saida: '' },
    { cidade: 'Pouso Alegre',        uf: 'MG', responsavel: 'Izabelly Avane', whatsapp: '35 9887-5386', saida: 'Passa por Cambuí / Estiva' },
    { cidade: 'Itajubá',             uf: 'MG', responsavel: 'Guilherme Albino', whatsapp: '35 9983-7603', saida: '' },
    { cidade: 'Piranguinho',         uf: 'MG', responsavel: 'Guilherme Albino', whatsapp: '35 9983-7603', saida: '' },
    { cidade: 'Conceição dos Ouros', uf: 'MG', responsavel: 'Gabriel Resende', whatsapp: '32 9995-9308', saida: '' },
    { cidade: 'Cachoeira de Minas',  uf: 'MG', responsavel: 'Gabriel Resende', whatsapp: '32 9995-9308', saida: '' },
    { cidade: 'Paraisópolis',        uf: 'MG', responsavel: 'Gabriel Resende', whatsapp: '32 9995-9308', saida: '' },
    { cidade: 'Cambuí',              uf: 'MG', responsavel: 'Izabelly Avane', whatsapp: '35 9887-5386', saida: '' },
    { cidade: 'Estiva',              uf: 'MG', responsavel: 'Izabelly Avane', whatsapp: '35 9887-5386', saida: '' },
    { cidade: 'Careaçu',             uf: 'MG', responsavel: 'Hevelyn Aparecida', whatsapp: '35 99900-5679', saida: '' },
    { cidade: 'Bom Repouso',         uf: 'MG', responsavel: 'Maria Rita Dos Santos', whatsapp: '35 99739-7146', saida: '' }
  ]
};
