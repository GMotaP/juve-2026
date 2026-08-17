/* ============================================================
   JUVE 2026 — script.js
   Monta os cards a partir do data.js e controla as abas.
   Normalmente você NÃO precisa mexer aqui.
   ============================================================ */
(function () {
  'use strict';

  var PALETA = ['#2BBEEF', '#EE18C8', '#A9D822', '#F2AF25', '#EE7834'];

  /* ---------- utilidades ---------- */

  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function preenchido(v) {
    return typeof v === 'string' && v.trim() !== '';
  }

  function cor(item, i) {
    return preenchido(item.cor) ? item.cor : PALETA[i % PALETA.length];
  }

  function iniciais(nome) {
    var partes = String(nome || '?').replace(/[^\p{L}\p{N} ]/gu, ' ').trim().split(/\s+/);
    var a = partes[0] ? partes[0][0] : '?';
    var b = partes.length > 1 ? partes[partes.length - 1][0] : '';
    return (a + b).toUpperCase();
  }

  /* ---------- links ---------- */

  function linkInstagram(user) {
    if (!preenchido(user)) return '';
    return 'https://www.instagram.com/' + encodeURIComponent(user.trim().replace(/^@/, '')) + '/';
  }

  // Aceita o número em qualquer formato: (35) 99887-7665, 35 99887 7665,
  // +55 35 99887-7665... Se faltar o código do país, coloca o 55 sozinho.
  function normalizarTelefone(numero) {
    var d = String(numero).replace(/\D/g, '').replace(/^0+/, '');
    if (d.length === 10 || d.length === 11) d = '55' + d;   // veio só com DDD
    return d.length >= 12 && d.length <= 15 ? d : '';
  }

  function linkWhats(numero, mensagem) {
    if (!preenchido(numero)) return '';
    var so = normalizarTelefone(numero);
    if (!so) {
      console.warn('[JUVE] Número de WhatsApp inválido no data.js:', numero);
      return '';
    }
    return 'https://wa.me/' + so + (mensagem ? '?text=' + encodeURIComponent(mensagem) : '');
  }

  function linkMaps(item) {
    if (preenchido(item.maps)) return item.maps;
    if (preenchido(item.endereco)) {
      return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(item.endereco);
    }
    return '';
  }

  // Gera um botão. Sem link, vira um botão apagado com "em breve".
  function botao(rotulo, href, classe) {
    var cls = 'btn' + (classe ? ' ' + classe : '');
    if (!href) {
      return '<span class="' + cls + ' btn--off" aria-disabled="true" title="Link em breve">'
           + esc(rotulo) + '</span>';
    }
    return '<a class="' + cls + '" href="' + esc(href) + '" target="_blank" rel="noopener">'
         + esc(rotulo) + '</a>';
  }

  // <img> que cai para as iniciais do nome se o arquivo não existir.
  function figura(classe, src, nome) {
    if (!preenchido(src)) {
      return '<div class="' + classe + '"><span class="fallback">' + esc(iniciais(nome)) + '</span></div>';
    }
    return '<div class="' + classe + '">'
         + '<img src="' + esc(src) + '" alt="" loading="lazy" data-iniciais="' + esc(iniciais(nome)) + '">'
         + '</div>';
  }

  function ativarFallbackDeImagem(raiz) {
    raiz.querySelectorAll('img[data-iniciais]').forEach(function (img) {
      img.addEventListener('error', function () {
        var pai = img.parentNode;
        pai.innerHTML = '<span class="fallback">' + esc(img.dataset.iniciais) + '</span>';
      });
    });
  }

  /* ---------- cards ---------- */

  function cardPDV(p, i) {
    return ''
      + '<article class="card" style="--c:' + esc(cor(p, i)) + '">'
      +   '<div class="card__head">'
      +     figura('card__logo', p.logo, p.nome)
      +     '<div>'
      +       '<span class="badge badge--pdv badge--sm">' + esc(preenchido(p.cidade) ? p.cidade : 'Cidade a confirmar') + '</span>'
      +       '<h3 class="card__name">' + esc(p.nome) + '</h3>'
      +     '</div>'
      +   '</div>'
      +   '<p class="card__meta">📍 ' + esc(preenchido(p.endereco) ? p.endereco : 'Endereço a confirmar') + '</p>'
      +   '<div class="card__actions">'
      +     botao('Instagram', linkInstagram(p.instagram))
      +     botao('Como chegar', linkMaps(p), 'btn--cyan')
      +   '</div>'
      + '</article>';
  }

  function cardPromoter(p, i) {
    var msg = (JUVE.config.msgIngresso || '') + (preenchido(p.nome) ? ' (' + p.nome + ')' : '');
    return ''
      + '<article class="card" style="--c:' + esc(cor(p, i + 1)) + '">'
      +   '<div class="card__head">'
      +     figura('card__photo', p.foto, p.nome)
      +     '<div>'
      +       '<span class="badge badge--promoter badge--sm">' + esc(preenchido(p.cidade) ? p.cidade : 'Cidade a confirmar') + '</span>'
      +       '<h3 class="card__name">' + esc(p.nome || 'A confirmar') + '</h3>'
      +     '</div>'
      +   '</div>'
      +   (preenchido(p.atletica) ? '<p class="card__meta card__meta--strong">' + esc(p.atletica) + '</p>' : '')
      +   '<div class="card__actions">'
      +     botao('Instagram', linkInstagram(p.instagram))
      +     botao('Comprar no WhatsApp', linkWhats(p.whatsapp, msg), 'btn--lime')
      +   '</div>'
      + '</article>';
  }

  function cardEmBreve(qtd) {
    var ig = esc(JUVE.config.instagramOficial || 'ojuveoficial');
    return ''
      + '<div class="card card--soon">'
      +   '<span class="card--soon__num">+' + qtd + '</span>'
      +   '<p>promoters serão anunciados em breve. Fique de olho no '
      +     '<a href="https://www.instagram.com/' + ig + '/" target="_blank" rel="noopener">@' + ig + '</a></p>'
      + '</div>';
  }

  function cardExcursao(e, i) {
    var msg = (JUVE.config.msgExcursao || '').replace('{cidade}', e.cidade || '');
    return ''
      + '<article class="card" style="--c:' + esc(cor(e, i)) + '">'
      +   '<div class="card__citytop">'
      +     '<h3 class="card__name card__name--lg">' + esc(e.cidade) + '</h3>'
      +     '<span class="badge badge--mg" style="background:var(--c)">' + esc(e.uf || 'MG') + '</span>'
      +   '</div>'
      +   '<p class="card__meta card__meta--strong">🚌 ' + esc(preenchido(e.responsavel) ? e.responsavel : 'Responsável a confirmar') + '</p>'
      +   '<p class="card__meta">Saída: ' + esc(preenchido(e.saida) ? e.saida : 'Ponto de saída a confirmar') + '</p>'
      +   '<div class="card__actions">'
      +     botao('Chamar no WhatsApp', linkWhats(e.whatsapp, msg), 'btn--lime')
      +   '</div>'
      + '</article>';
  }

  /* ---------- render ---------- */

  function render() {
    if (typeof JUVE === 'undefined') {
      console.error('[JUVE] data.js não carregou. Confira se o arquivo está na mesma pasta do index.html.');
      return;
    }

    var gPdv = document.getElementById('grid-pdvs');
    var gProm = document.getElementById('grid-promoters');
    var gExc = document.getElementById('grid-excursoes');

    if (gPdv) gPdv.innerHTML = (JUVE.pdvs || []).map(cardPDV).join('');

    if (gProm) {
      var proms = JUVE.promoters || [];
      var faltam = Math.max(0, (JUVE.config.totalPromoters || 0) - proms.length);
      gProm.innerHTML = proms.map(cardPromoter).join('') + (faltam > 0 ? cardEmBreve(faltam) : '');
    }

    if (gExc) gExc.innerHTML = (JUVE.excursoes || []).map(cardExcursao).join('');

    ativarFallbackDeImagem(document);
  }

  /* ---------- abas ---------- */

  function abas() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
    if (!tabs.length) return;

    function abrir(nome, moverFoco) {
      tabs.forEach(function (t) {
        var ativa = t.dataset.tab === nome;
        t.classList.toggle('is-active', ativa);
        t.setAttribute('aria-selected', ativa ? 'true' : 'false');
        t.tabIndex = ativa ? 0 : -1;
        if (ativa && moverFoco) t.focus();

        var painel = document.getElementById('panel-' + t.dataset.tab);
        if (painel) painel.classList.toggle('is-hidden', !ativa);
      });
      if (history.replaceState) history.replaceState(null, '', '#' + nome);
    }

    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { abrir(t.dataset.tab, false); });
      t.addEventListener('keydown', function (ev) {
        var d = ev.key === 'ArrowRight' ? 1 : ev.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        ev.preventDefault();
        abrir(tabs[(i + d + tabs.length) % tabs.length].dataset.tab, true);
      });
    });

    // Permite abrir direto na aba de excursões pelo link: site.com/#excursoes
    var alvo = (location.hash || '').replace('#', '');
    if (alvo && document.getElementById('panel-' + alvo)) abrir(alvo, false);
  }

  /* ---------- início ---------- */

  function iniciar() { render(); abas(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
