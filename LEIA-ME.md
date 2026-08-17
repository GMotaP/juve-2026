# JUVE 2026 — site de PDVs e Excursões

Site pronto para rodar. Para ver funcionando, é só abrir o **index.html** no navegador.

## Arquivos

```
index.html    estrutura da página (mexe pouco)
styles.css    visual (cores, sombras, fontes)
data.js       ← É AQUI QUE VOCÊ EDITA O CONTEÚDO
script.js     monta os cards e controla as abas (não precisa mexer)
img/          imagens (as atuais são provisórias, veja abaixo)
```

## Como adicionar um ponto de venda, promoter ou excursão

Abra o **data.js** em qualquer editor de texto (Bloco de Notas serve) e preencha.
Salvou e atualizou a página, já aparece.

```js
{
  nome: 'Rei da Régua',
  cor: '#2BBEEF',
  logo: 'img/pdv-rei-da-regua.png',
  endereco: 'Rua Cel. Francisco Braz, 100 — Centro, Santa Rita do Sapucaí',
  instagram: 'reidaregua',        // só o usuário (o @ também funciona)
  whatsapp: '(35) 99887-7665',    // pode colar com parênteses e traço
  maps: ''                        // opcional; vazio = usa o endereço acima
}
```

Para adicionar **um promoter**, copie o bloco inteiro que já está lá (das chaves
`{` até `}`), cole logo abaixo com uma vírgula separando, e troque os dados.

Regras que valem para tudo:

- Campo deixado em branco (`''`) vira **"a confirmar"** e o botão aparece apagado.
- `whatsapp` pode ser colado em qualquer formato — `(35) 99887-7665`,
  `35 99887 7665`, `+55 35 99887-7665`. O site limpa e completa o `55` se faltar.
  O link já abre com a mensagem pronta que está em `config.msgIngresso` /
  `config.msgExcursao`. Número inválido = botão apagado + aviso no console (F12).
- `instagram` é só o usuário, sem o link inteiro (com ou sem `@`).
- `cor` é opcional — sem ela o site sorteia uma cor da paleta.
- O card **"+11 promoters em breve"** se ajusta sozinho: ele mostra
  `config.totalPromoters` menos quantos promoters você já cadastrou.
  Cadastrou todos? O card some. Coloque `totalPromoters: 0` para escondê-lo antes disso.

## Imagens

As imagens da pasta `img/` são **provisórias**, só para nada aparecer quebrado.
Para trocar, salve a arte real **com o mesmo nome de arquivo** por cima:

| arquivo | onde aparece | tamanho sugerido |
|---|---|---|
| `juve-logo-mascote.png` | topo da página | 700×700, fundo transparente |
| `juve-logo.png` | rodapé | 680×340, fundo transparente |
| `excursoes.png` | topo da aba Excursões | 600×300, fundo transparente |
| `favicon.png` | ícone da aba do navegador | 256×256 |
| `pdv-*.png` | logo de cada PDV | 300×300, quadrada |
| `promoter-1.jpg` | foto do promoter | 400×400, quadrada |

Se um arquivo de imagem não existir, o site mostra as **iniciais do nome** no
lugar — nunca fica o ícone de imagem quebrada.

## Detalhes que já estão prontos

- **Abas** funcionam por clique e pelas setas do teclado.
- **Link direto para as excursões:** `seusite.com/#excursoes` já abre na aba certa.
- **Responsivo:** uma coluna no celular, várias no computador.
- As fontes vêm do Google Fonts; sem internet o site cai para fontes parecidas
  em vez de quebrar o visual.

## Para publicar

Qualquer hospedagem de site estático serve — Netlify, Vercel, GitHub Pages,
Hostinger. É só subir a pasta inteira (com a `img/` dentro). Não precisa de
servidor, banco de dados nem build.

---

Dúvida comum: **duas excursões da mesma cidade** (Pouso Alegre aparece 2×) ficam
com cards iguais até você preencher o responsável de cada uma — aí elas se
diferenciam sozinhas.
