---
layout: post
title: "Lugdunum, urbs Convenarum. Epigrafía y arqueología"
date: 2024-01-01
image: https://tabulapyrenaei.eu/wp-content/uploads/2024/12/Lugdunum-urbs-Convenarum-Epigrafia-y-arqueologia-detalle.png
permalink: /lugdunum-urbs-convenarum-epigrafia-y-arqueologia/
categories: [arqueologia, epigrafia]
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet.fullscreen@3.0.2/Control.FullScreen.css" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap">
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css" type="text/css">
<script src="https://unpkg.com/leaflet-gesture-handling@1.2.2/dist/leaflet-gesture-handling.min.js"></script>
<script>
  L.Map.addInitHook("addHandler", "gestureHandling", L.Handler.GestureHandling);
  L.Map.mergeOptions({ gestureHandling: true });
</script>
<script src="https://cdn.jsdelivr.net/npm/leaflet-ant-path@1.3.0/dist/leaflet-ant-path.js"></script>
<script src="https://cdn.jsdelivr.net/npm/leaflet.fullscreen@3.0.2/Control.FullScreen.js"></script>

<style>
  /* Fondo blanco en las áreas sin tile */
  .leaflet-container {
    background: #fff !important;
  }
  /* EB Garamond en todos los popups y tooltips de Leaflet */
  .leaflet-popup-content,
  .leaflet-tooltip {
    font-family: 'EB Garamond', Georgia, serif !important;
    font-size: 0.82rem;
    line-height: 1.5;
  }
  /* Marcellus en el control de capas (etiquetas de overlay) */
  .leaflet-control-layers-overlays label span {
    font-family: 'Marcellus', Georgia, serif !important;
  }
  .lugdunum-intro {
    margin-bottom: 2rem;
  }
  .map-full {
    width: 100%;
    height: 800px;
    margin-bottom: 2rem;
  }
  .map-medium {
    width: 100%;
    height: 700px;
    margin-bottom: 1.5rem;
  }
  .map-small {
    width: 100%;
    height: 500px;
    margin-bottom: 1.5rem;
  }
  .map-mini {
    width: 100%;
    height: 300px;
    margin-bottom: 1rem;
  }
  .map-tall {
    width: 100%;
    height: 600px;
    margin-bottom: 1.5rem;
  }
  .section-heading {
    font-variant: small-caps;
    letter-spacing: 5px;
    text-align: center;
    margin: 1.5rem 0 1rem;
    font-size: 0.95rem;
  }
  .epigraphy-block {
    font-size: 0.85rem;
    line-height: 1.6;
    margin-bottom: 0.4rem;
  }
  .two-col {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: start;
    margin-bottom: 2.5rem;
  }
  .two-col-equal {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: start;
    margin-bottom: 2rem;
  }
  .three-col-img {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .three-col-img figure, .two-col-equal figure {
    margin: 0;
  }
  .three-col-img img, .two-col-equal img {
    width: 100%;
    height: auto;
    display: block;
  }
  figcaption {
    font-size: 0.8rem;
    text-align: center;
    margin-top: 0.3rem;
    color: #555;
  }
  .section-title {
    font-weight: bold;
    margin: 2rem 0 0.5rem;
  }
  .subsection-title {
    font-weight: bold;
    margin: 1.5rem 0 0.5rem;
  }
  h4.place-heading {
    text-align: center;
    margin: 2.5rem 0 1rem;
    font-size: 1.2rem;
  }
  figure.img-right {
    float: right;
    width: 33%;
    margin: 0 0 1rem 1.5rem;
  }
  figure.img-right img { width: 100%; height: auto; }
  .separator { border: none; border-top: 1px solid #ccc; margin: 1.5rem 0; }
  .note-small { font-size: 0.78rem; text-align: center; color: #666; margin-top: 0.3rem; }
  @media (max-width: 700px) {
    .two-col, .two-col-equal { grid-template-columns: 1fr; }
    .three-col-img { grid-template-columns: 1fr 1fr; }
    figure.img-right { float: none; width: 100%; margin: 0 0 1rem 0; }
  }
</style>

<div class="col-2-1-wrap">
<div class="col-2-1">
  <div>
<div class="lugdunum-intro drop-cap">
<p><span style="font-variant:small-caps">Este mapa viene a completar</span> <em><a href="{{ site.baseurl }}/epigrafia-latina-de-epoca-romana-en-los-pirineos/">Epigrafía latina de época romana en los Pirineos</a></em>. Por motivos de espacio el mapa general no incluye información detallada sobre los epígrafes descubiertos en Saint-Bertrand-de-Comminges. Sobrepasando con creces el centenar de inscripciones y contando con una larga y fructífera actividad arqueológica el territorio de la <em>urbs Conuenarum</em> reúne motivos sobrados para dedicarle un espacio en detalle. De este modo el mapa recoge tanto un plano de la estructura urbana de la ciudad, hasta donde la investigación arqueológica permite vislumbrar, como los lugares de la ciudad en los que se han descubierto inscripciones monumentales (no se incluyen <em>sigilla, graffiti</em> y similares). La representación gráfica de una realidad compleja como la que supone una estructura urbana que se prolonga durante cerca de medio milenio conlleva simplificaciones. El plano de la ciudad no recoge el palimpsesto que se deriva de las diferentes estructuras levantadas a lo largo del tiempo sino una síntesis de los edificios más representativos, o al menos de su estructura más significativa o en su máximo desarrollo.</p>
</div>
</div>
</div>
</div>

<!-- MAPA PRINCIPAL -->
<div id="map-principal" class="map-full"></div>

<script>
(function () {
  var map = L.map('map-principal', {
    center: [43.0293, 0.5756],
    zoom: 17,
    minZoom: 17,
    maxZoom: 19,
    zoomControl: true
  });

  L.tileLayer('https://pyrenaeus.github.io/mapas-tiles/lugdunum-tiles/{z}/{x}/{y}.png', {
    minZoom: 17, maxZoom: 19, attribution: ''
  }).addTo(map);

  // ---- Capa de control de pantalla completa (simulada con botón) ----

  var puntos = [
    { lat: 43.030022, lng: 0.572330, nombre: 'Forum Nouum', inscripciones: 15,
      info: '<a href="https://www.persee.fr/doc/anami_0003-4398_1956_num_68_34_6100" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/anami_0003-4398_1956_num_68_34_T1_0135_0000_2.png" alt="Forum Nouum" style="max-width:300px;width:100%"></a><br>15 inscriptions (voir texte ci-dessous).' },
    { lat: 43.029737, lng: 0.572923, nombre: 'Temple.', inscripciones: 25,
      info: '<a href="https://edcs.hist.uzh.ch/de/" target="_blank" rel="noopener noreferrer"><img src="https://edcs.hist.uzh.ch/bilder/IL/ILTG_00076.jpg" alt="AE 1997, 1093" style="max-width:300px;width:100%"></a><br>Plus d\'une vingtaine d\'inscriptions, beaucoup d\'entre eux sont conservés de manière très fragmentaire (voir texte ci-dessous).' },
    { lat: 43.030078, lng: 0.573493, nombre: 'Thermes du Forum.', inscripciones: 6,
      info: '❶ <em>[C(aio) Iulio Sex(ti) f(ilio) Volt(inia)] / [Sereno IIIIviro] / [sacerd]oti R[omae] / [et Aug(ustorum)] praef[ecto] / [alae] VII Phrygum / [3]ur so[</em> (<em>ILTG</em> 77 = <em>CAG</em> 31-2, p 303 = <em>AE</em> 1997, 1095).<br>❷ <em>[C(aio) Iulio Sex(ti) fi]l(io?) Ser[eno] / IIIIvir(o) sacer[d(oti)] / [Ro]mae et [Aug(ustorum)] / [pra]efecto a[lae] / [VII Ph]rygum / [3] L(uci) fil(ius) Sabinus / [ami]co opt&lt;i=U&gt;m[o] / [</em> (<em>ILTG</em> 78 = <em>CAG</em> 31-2, p 303 = <em>AE</em> 1997, 1096).<br>❸ <em>I(ovi) O(ptimo) M(aximo) / Salutari / Ulpianus / Amf(i)l(us?) gravi / infirmita/te libera/[tus(?)</em> (<em>CIL</em> XIII, 240 = <em>CAG</em> 31-2, p 303).<br>❹ <em>]AR / [3]IA / [3]AO / [3]VIC / [3]TI / [3]RIB / [</em> (<em>ILTG</em> 94 = <em>CAG</em> 31-2, p 308).<br>❺ <em>]VG G[3] / [3]P I[</em> (<em>ILTG</em> 72 = <em>CAG</em> 31-2, p 308).<br>❻ <em>]RD[3] / [3]P[</em> (<em>CAG</em> 31-2, p 308).' },
    { lat: 43.02980, lng: 0.574665, nombre: '<em>Macellum</em>.', inscripciones: 6,
      info: '❶ <em>C(aio) Iul(io) [3] / [IIIIvi]ro / [sac]erdoti / [Romae] et Aug(ustorum) [</em> (<em>ILTG</em> 84 = <em>CAG</em> 31-2, p 293 = <em>AE</em> 1997, 1097).<br>❷ <em>] Gn(aeus) P[ompeius 3] / [3] sa[cer]dos Ro[mae et Aug(ustorum) 3] / [3] Aqu[it]ani(c)a [3] / [3 Po]mpeiu[s</em> (<em>ILTG</em> 84 = <em>CAG</em> 31-2, p 293 = <em>AE</em> 1997, 1098).<br>❸ <em>Gn(aeo) Po[mpeio(?)] / Gn(aei) f(ilio) [Volt(inia)] / Fron[toni] / sac[erdoti] / Ro[mae et Aug(ustorum)] /</em> [ (<em>CAG</em> 31-2, p 294 = <em>AE</em> 1997, 1099 = <em>AE</em> 2009, 855).<br>❹ <em>sacerdot]i Rom[ae et A]ugusto[rum 3] / [3 praefe]cto a[lae</em> (<em>CAG</em> 31-2, p 294 = <em>AE</em> 1997, 1100).<br>❺ <em>sacerdos(?) R]omae e[t Aug(ustorum)] / [3]SER[</em> (<em>CAG</em> 31-2, p 294 = <em>AE</em> 1938, +171 = <em>AE</em> 1997, 1102).<br>❻ <em>] / [sacerdoti] / [Romae et(?)] Augu[st(orum?)] / [III]viro(?)</em> [ (<em>CAG</em> 31-2, p 294 = <em>AE</em> 1997, 1103).' },
    { lat: 43.029407, lng: 0.574367, nombre: 'La place du marché, <em>forum uetus / forum boarium</em>.', inscripciones: 5,
      info: '❶ <em>I(ovi) O(ptimo) M(aximo) / [</em> (<em>ILTG</em> 60 = <em>CAG</em> 31-2, p 282 = <em>AE</em> 1957, 8).<br>❷ <em>[I(ovi)] O(ptimo) M(aximo) / [</em> (<em>CAG</em> 31-2, p 282).<br>❸ <em>sanc/tissimo / numini / Aurel(ius) Amor / [co]llegi[</em> (<em>ILTG</em> 66 = <em>CAG</em> 31-2, p 282 = <em>AE</em> 1994, 1199).<br>❹ <em>Eroteni[s] / uxoris v(otum) s(olvit)</em> (<em>ILTG</em> 69 = <em>CAG</em> 31-2, p 282 = <em>AE</em> 1957, 10).<br>❺ <em>]/rulis v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CAG</em> 31-2, p 282).' },
    { lat: 43.029584, lng: 0.573981, nombre: 'Monument à enceinte circulaire.', inscripciones: 8,
      info: '❶ <em>]egi fi(lius) / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1114)<br>❷ <em>I(ovi) O(ptimo) M(aximo) / Sile[x(?)</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1110).<br>❸ <em>I(ovi) O(ptimo) M(aximo) / [</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1111).<br>❹ <em>D(eo) I(ovi) O(ptimo) M(aximo) / Placida / Consu/[eti(?)</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1112).<br>❺ <em>]/a et M/aximi/nus v(otum) s(olverunt)</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1113).<br>❻ <em>A]//emilius Nigrinus // [</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1116).<br>❼ <em>]/inus</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1117).<br>❽ <em>I]mp(eratori) Cae[s(ari) 3] / [3]CON[</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1115).' },
    { lat: 43.028656, lng: 0.573999, nombre: 'Domus II <em>(Villa Basc, Le Plan)</em>.', inscripciones: 3,
      info: '❶ <em>i]mp(eratori?) [3] / [3] p(atri) p(atriae) [</em> (<em>CAG</em> 31-2, p 344).<br>❷ <em>]mis[3] / [3 S]ulpiciu[s</em> (<em>ILTG</em> 98 = <em>CAG</em> 31-2, p 344).<br>❸ <em>]RD[3] / [3]OP[</em> (<em>CAG</em> 31-2, p 344 = <em>AE</em> 1997, 1107).' },
    { lat: 43.028226, lng: 0.574366, nombre: 'Basilique paléochrétienne.', inscripciones: 1,
      info: '<em>Da Chr(ist)e famulae tuae / Aemilian(a)e requi&lt;e=I&gt;m et vitam aeternam</em> (<em>ILTG</em> 111 = <em>CAG</em> 31-2, p 355).' },
    { lat: 43.027899, lng: 0.574388, nombre: 'Cimetière Saint-Julien.', inscripciones: 1,
      info: '<a href="https://edcs.hist.uzh.ch/es/document?edcs-id=EDCS-10400383" target="_blank" rel="noopener noreferrer"><img src="https://edcs.hist.uzh.ch/bilder/CI/CIL_13_00229.jpg" alt="" style="max-width:300px;width:100%"></a><br><em>Herculi / [In]vi[cto</em> (<em>CIL</em> XIII, 229 = <em>CAG</em> 31-2, p 357 = <em>AE</em> 1994, 1191).' },
    { lat: 43.030084, lng: 0.571515, nombre: 'Proprieté Lortet.', inscripciones: 1,
      info: '(localisation approximative) Fragment de plaque de marbre <em>---]ei[--- / ---]m</em> (<em>ILTG</em> 97 = <em>CAG</em> 31-2, p 390).' },
    { lat: 43.030100, lng: 0.578181, nombre: 'Camp militaire de Tranquistan.', inscripciones: 1,
      info: '<em>Au]g(ustus) pont(ifex) max(imus) / [3 C]aes(ar) [ // ]r[3] / [3]ra c[3] / [3]DAM [ // ]A[3] / [3] Aug(ustus) [</em> (<em>CAG</em> 31-2, p 370 = <em>AE</em> 1991, 1212 = <em>AE</em> 2003, +1163).' },
    { lat: 43.028331, lng: 0.584829, nombre: 'Remplois identifiés dans les murs de l\'église Saint-Just.', inscripciones: 5,
      info: '❶ <em>P(ublio) Licinio Mon/tani l(iberto) Rufioni / Hautensoni / Halscotarris / filiae</em> (<em>CIL</em> XIII 277 = <em>CAG</em> 31/2, p. 446).<br>❷ <em>Val(eria) Severa egit annos XXX recessit III Non(as) Iul(ias) Rufino et Eusebio conss(ulibus) / Pac() Patroclus pr{a}esbyter sibi in pace</em> (<em>CIL</em> XIII 299 = <em>CAG</em> 31/2, p. 448).<br>❸ <em>I(ovi) O(ptimo) M(aximo) / Nigrinus Ap/ti f(ilius) et Optuma(!) / Galli f(ilia) / v(otum) s(olverunt) l(ibentes) m(erito)</em> (<em>CIL</em> XIII 235 = <em>CAG</em> 31/2, p. 449).<br>❹ <em>Depositio / P() Severini XV K(alendas) M(a)rtias / Valeri [consulatu(?)</em> (<em>CIL</em> XIII 300 = <em>CAG</em> 31/2, p. 455).<br>❺ <em>]ria / L(ucius) Valeri[us] / Saturn[inus</em> (<em>CIL</em> XIII 290 = <em>CAG</em> 31/2, p. 455).' },
    { lat: 43.028745, lng: 0.584651, nombre: 'Basilique Saint-Just de Valcabrère, cimetière et abords.', inscripciones: 2,
      info: '❶ <em>V(ivus) Silvanus Iacessis f(ilius) sibi et / |(obitae) Priscae Harontarris f(iliae) uxori / v(ivo) Proculo f(ilio) Propinquo [f(ilio)]</em>. (<em>CIL</em> XIII, 289 = <em>CAG</em> 31-2, p. 456).<br>❷ <em>V(ivus) C(aius) Iulius Erotis / l(ibertus) Atticus / |(obita) Iulia Erotis libert(a) / Salviola / |(obitus) C(aius) Iulius Attici f(ilius) Victor / an(norum) XVIII</em>. (<em>CIL</em> XIII, 275 = <em>CAG</em> 31-2, p. 456).' },
    { lat: 43.028993, lng: 0.571042, nombre: 'Las Bourdettes.', inscripciones: 1,
      info: '<em>]RA[3] / [3]VIIII [</em> (<em>CIL</em> XIII, 294a = <em>CAG</em> 31-2, p 340). Fragment de marbre blanc trouvé en 1881, à Saint-Bertrand, quartier de Las Bourdettes, au pied de la ville (<a href="https://archive.org/details/inscriptionsanti00saca/page/184/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892, nº 107</a>).' },
    { lat: 43.027914, lng: 0.569950, nombre: 'Rempart-Porte Majou.', inscripciones: 1,
      info: '<em>] / I[3] / DO[3] / v(otum) s(olvit) [l(ibens) m(erito)]</em> (<em>CIL</em> XIII, 250 = <em>CAG</em> 31-2, p 393). Fragment de marbre trouvé en 1883 au pied du rempart, à la porte Majou. (<a href="https://archive.org/details/inscriptionsanti00saca/page/172/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892 nº 89</a>).' },
    { lat: 43.027890, lng: 0.569991, nombre: 'Porte Majou.', inscripciones: 1,
      info: '<em>|(Obito) Andosso Primuli f(ilio) / Sabina Frontonis f(ilia) / coniugi ex testamento</em> (<em>CIL</em> XIII, 264 = <em>CAG</em> 31-2, p 397). Cippus funéraire, surmonté d\'un fronton où se trouve un buste. Au dessous, un bas-relief représente deux chars (<a href="https://archive.org/details/inscriptionsanti00saca/page/172/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892, nº 90</a>).' },
    { lat: 43.027720, lng: 0.570219, nombre: 'Rue Porte Majou.', inscripciones: 1,
      info: '(localisation approximative) <em>I(ovi) O(ptimo) M(aximo) / Iulia In/genua / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CIL</em> XIII, 234 = <em>CAG</em> 31-2, p 393). Cippus de marbre blanc trouvé en mai 1884 dans les substructions du mur d\'une vieille grange, rue de la Porte Majou. (<a href="https://archive.org/details/inscriptionsanti00saca/page/168/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892 nº 83</a>).' },
    { lat: 43.027490, lng: 0.570940, nombre: 'Mur du presbytère (remploi).', inscripciones: 1,
      info: '<em>Enneb/on Sec/undion/[is</em> (<em>CAG</em> 31-2, p 394 = <em>AE</em> 1994, 1198).' },
    { lat: 43.027163, lng: 0.572032, nombre: 'Jardin Dussoulier.', inscripciones: 1,
      info: '(Rue de Poste actuelle). <em>Enneb/on Sec/undion/[is</em> (<em>CAG</em> 31-2, p 394 = <em>AE</em> 1994, 1198).' },
    { lat: 43.026670, lng: 0.572955, nombre: 'Porte Cabirole.', inscripciones: 1,
      info: '<em>Ti(berio) Claudio 3] / imp(eratori) XXVI co(n)s(uli) / V p(atri) p(atriae) / civitas Conven(arum)</em> (<em>CIL</em> XIII, 254 = <em>CAG</em> 31-2, p 396 = <em>AE</em> 1999, +1039).' },
    { lat: 43.026573, lng: 0.572590, nombre: 'Maison Rixens.', inscripciones: 1,
      info: '<em>]ostiar / domin / rculis / deus / MV / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CIL</em> XIII, 11013 = <em>CAG</em> 31-2, p 393).' },
    { lat: 43.026520, lng: 0.571400, nombre: 'Pente sud, près de cathédrale.', inscripciones: 1,
      info: '<em>Deo / Mar/[t]i [</em> (<em>ILTG</em> 63 = <em>CAG</em> 31-2, p 397 = <em>AE</em> 1933, 239).' },
    { lat: 43.026520, lng: 0.571140, nombre: 'Cloître.', inscripciones: 3,
      info: '❶ <em>D(is) M(anibus) / Paulae / matri / Primula / et Paul/us et / Paulinus</em> (<em>CIL</em> XIII, 281 = <em>CAG</em> 31-02, p 395).<br>❷ <em>D(is) M(anibus) s(acrum) / Aureliae La/nae coniugi / karissim(ae) / Fressus Quintus / utrisque / pos{s}uit</em> (<em>CIL</em> XIII, 266 = <em>CAG</em> 31-2, p 395).<br>❸ <em>Borso / Adeili f(ilio) Silex / Epannaigi uxor heres / ex testamento / |(obito) Odoxo f(ilio) Lohitton(i) f(ilio) / Andostenni f(ilio) Andosso f(ilio).</em> (<em>CIL</em> XIII, 268 = <em>CIL</em> XIII, 11011 = <em>CAG</em> 31-2, p 395).' },
    { lat: 43.026700, lng: 0.571294, nombre: 'Cathédrale.', inscripciones: 2,
      info: '❶ <em>D(is) M(anibus) / Andossic[i] / Salisius / fil(io) pien/tissimo</em> (<em>CIL</em> XIII, 263 = CAG 31-2, p 394, <a href="https://archive.org/details/inscriptionsanti00saca/page/174/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892 nº 91</a>).<br>❷ <em>]ila[</em> (<em>CIL</em> XIII, 294e = <em>CAG</em> 31-2, p 394).' },
    { lat: 43.026900, lng: 0.570817, nombre: 'Place de la cathédrale.', inscripciones: 1,
      info: '<em>] / Borconis / [v(otum)] s(olvit) f[el(iciter?)]</em> (<em>ILTG</em> 68 = <em>CAG</em> 31-2, p 393).' },
    { lat: 43.027024, lng: 0.570927, nombre: 'Les Olivétains.', inscripciones: 4,
      info: '❶ <em>]anis[</em> (<em>CIL</em> XIII, 294b = <em>CAG</em> 31-2, p 396).<br>❷ <em>] L(uci) f(ilio) Galeri[a 3] / [de]curioni in co[l(onia) Copia] / [Clau]dia Augusta Lu[guduno] / [flamini(?)] August[i(?)] o(b?) m(emoriam?) / [3 Fro]ntonis neg(otiator) / [fili]o piissimo fec[it] / d(ecreto) d(ecurionum) / Conve[n(arum)]</em> (<em>CIL</em> XIII, 256 = <em>ILTG</em> 87 = <em>CAG</em> 31-2, p 396 = <em>AE</em> 1945, 15).<br>❸ <em>] / Iul[3] / [3] cornic[en(?) 3] / [3] tibic[en 3] / [3]sa[</em> (<em>CAG</em> 31-2, p 396).<br>❹ <em>]ano Vol[usiano 3] / [3]o Piis Feli[cibus 3] Aug(ustis) m(ilia) [p(assuum)</em>. (<em>CAG</em> 31-2, p 396).' },
    { lat: 43.026840, lng: 0.571547, nombre: 'Abords de la cathédrale.', inscripciones: 1,
      info: '<em>Mar(ti) / cum pat(era?) / aur(ea?) vov(it) / Albinus / Orgot(i) f(ilius)</em> (<em>ILTG</em> 62 = <em>CAG</em> 31-2, p 392 = <em>AE</em> 1957, 6).' },
    { lat: 43.026408, lng: 0.570391, nombre: '«Dans les remparts, du côté du Midi».', inscripciones: 1,
      info: '(Emplacement indicatif) <em>]VL M / [3]LIV / [</em> (<em>CIL</em> XIII, 274 = <em>CAG</em> 31-2, p 400).' },
    { lat: 43.026228, lng: 0.569505, nombre: 'Abords de la Porte Lhérisson.', inscripciones: 2,
      info: '❶ <em>Deo Mar/ti Lucid[us(?)</em> (<em>CIL</em> XIII, 242 = <em>CAG</em> 31-2, p 393).<br>❷ <em>c…[—</em> (<em>CIL</em> XIII, 293 = <em>CAG</em> 31-2, p 393).' },
    { lat: 43.026867, lng: 0.568773, nombre: 'Le rempart, «près du roc de Matacan».', inscripciones: 2,
      info: '(Emplacement indicatif)<br>❶ <em>]P[</em> (<em>CIL</em> XIII, 295a = <em>CAG</em> 31-2, p 400). Fragment peut-être de borne milliaire.<br>❷ <em>S[</em> (<em>CIL</em> XIII, 294d = <em>CAG</em> 31-2, p 400).' },
    { lat: 43.027697, lng: 0.571651, nombre: '«Au pied des remparts, au nord de la ville».', inscripciones: 1,
      info: '(Emplacement indicatif) <em>]EP[ // ]XO[</em> (<em>CIL</em> XIII, 295c = <em>CAG</em> 31-2, p 400).' },
    { lat: 43.032908, lng: 0.581596, nombre: 'Ferme Montsérié.', inscripciones: 1,
      info: '(Emplacement indicatif). <em>Se[...]/iu [...]/ci[...]/u[...</em> (<em>CAG</em> 31-2, p 441).' },
    { lat: 43.031037, lng: 0.573310, nombre: 'Thermes du Nord, piscine.', inscripciones: 1,
      info: '<em>Fortun[ae] // deae / Secundus / Secundio/nis f(ilius) v(otum) s(olvit) [l(ibens) m(erito)]</em>. (<em>ILTG</em> 57 = <em>CAG</em> 31-2, p 380 = <em>AE</em> 1951, 152 = <em>AE</em> 1994, 1190).' },
    { lat: 43.031597, lng: 0.573160, nombre: 'Thermes du Nord, latrines.', inscripciones: 1,
      info: '<em>]in/us et Al//cima / v(otum) s(olverunt) l(ibentes) m(erito)</em>. (<em>ILTG</em> 67 = <em>CAG</em> 31-2, p 379).' },
    { lat: 43.031480, lng: 0.573560, nombre: 'Thermes du Nord', inscripciones: 1,
      info: '<em>Fortunae / Aug(ustae) / M(arcus) Mans(uetius) / Titullinus / v(otum) s(olvit) l(ibens) m(erito)</em>. (<em>CAG</em> 31-2, p 382 = <em>AE</em> 2001, 1375).' }
  ];

  var anillos = [
    { lat: 43.027524, lng: 0.574728, nombre: 'Le Plan.', inscripciones: 4,
      info: 'Découvertes fortuites du quartier du Plan.<br>❶ <em>Uolkano / Marti s(acrum) / Chio / Paulini / [e]x voto</em> (<em>ILTG</em> 65 = <em>CAG</em> 31-2, p 357 = <em>AE</em> 1957, 7).<br>❷ <em>Mercurio [- - -</em> (<em>CIL</em> XIII, 243 = <em>CAG</em> 31-2, p 357).<br>❸ <em>D(is?) [M(anibus?)]</em> (<em>CIL</em> XIII, 293b = <em>CAG</em> 31-2, p 357).<br>❹ <em>]obit[</em> (<em>CIL</em> XIII, 297 = <em>CAG</em> 31-2, p 357).' },
    { lat: 43.032000, lng: 0.577250, nombre: 'Le Couvent.', inscripciones: 3,
      info: '(Emplacement indicatif).<br>❶ <em>I(ovi) O(ptimo) M(aximo) / L(ucius) P(ompeius?) / Masclinus / v(otum) s(olvit) l(ibens) m(erito)</em>. (<em>CIL</em> XIII, 237 = <em>CAG</em> 31-2, p. 440).<br>❷ <em>Alfia / Lohisi f(ilia) / Bulluca</em>. (<em>CIL</em> XIII, 261 = <em>CAG</em> 31-2, p. 440).<br>❸ <em>...]us/ .arbo/nis f(ilius) / u(otum) s(oluit) l(ibens) [m(erito)]</em>. (<em>CIL</em> XIII, 248 = <em>CAG</em> 31-2, p. 440).' },
    { lat: 43.033243, lng: 0.581519, nombre: 'Valcabrère.', inscripciones: 16,
      info: '<a href="https://pop.culture.gouv.fr/notice/joconde/05630030096" target="_blank" rel="noopener noreferrer"><img src="https://pop-perf-assets.s3.gra.io.cloud.ovh.net/joconde/05630030096/0b68d196eb27593f68c8.jpg" alt="CIL XIII, 230" style="max-width:300px;width:100%"></a><br>Plus d\'une douzaine d\'inscriptions, beaucoup d\'entre eux mal situées dans Valcabrère (voir texte ci-dessous), voir aussi: <strong>Basilique Saint-Just de Valcabrère, cimetière et abords</strong>.' }
  ];

  fetch('https://pyrenaeus.github.io/mapas-tiles/poligonos.geojson')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      L.geoJSON(data, {
        style: function() { return { color: '#e63946', weight: 0, fillOpacity: 0.0 }; },
        onEachFeature: function(feature, layer) {
          var p = feature.properties;
          var div = document.createElement('div');
          div.style.width = '350px';
          div.innerHTML = '<b>' + p.nombre + '</b><br><br>' + p.info;
          layer.bindPopup(div, { maxWidth: 350 });
        }
      }).addTo(map);

      var capaEpigrafia = L.layerGroup();

      anillos.forEach(function(p) {
        var r = Math.sqrt(p.inscripciones) * 5;
        var circle = L.circleMarker([p.lat, p.lng], {
          radius: r, fillOpacity: 0, opacity: 0.7, color: '#F54927', weight: 5, renderer: L.svg()
        });
        var div = document.createElement('div');
        div.style.width = '350px';
        div.innerHTML = '<b>' + p.nombre + '</b><br><br>' + p.info;
        circle.bindPopup(div, { maxWidth: 350 });
        circle.addTo(capaEpigrafia);
      });

      puntos.forEach(function(p) {
        var r = Math.sqrt(p.inscripciones) * 5;
        var circle = L.circleMarker([p.lat, p.lng], {
          radius: r, fillColor: '#F54927', color: '#fff', weight: 0.5, fillOpacity: 0.65
        });
        var div = document.createElement('div');
        div.style.width = '350px';
        div.innerHTML = '<b>' + p.nombre + '</b><br><br>' + p.info;
        circle.bindPopup(div, { maxWidth: 350 });
        circle.addTo(capaEpigrafia);
      });

      capaEpigrafia.addTo(map);
      L.control.layers(null, { 'Épigraphie': capaEpigrafia }, { position: 'topright', collapsed: false }).addTo(map);
    })
    .catch(function(err) { console.log('Error cargando GeoJSON:', err); });

  L.control.scale({ position: 'bottomleft', imperial: false, maxWidth: 200 }).addTo(map);
  L.control.fullscreen({ position: 'topleft', title: 'Pantalla completa', titleCancel: 'Salir de pantalla completa' }).addTo(map);
})();
</script>

<!-- ============================================================ -->
<h4 class="place-heading">Saint-Bertrand-de-Comminges</h4>

<!-- MONUMENTO DE RECINTO CIRCULAR -->
<p class="section-title">Monumento de recinto circular</p>

<div class="two-col">
<div>
<p>La significación de este monumento viene marcada por su particular situación en una importante confluencia viaria. Con dos fases distintas —el basamento cuadrangular se data en los años 20, mientras el recinto circular se habría construido en la segunda mitad del siglo I con posteriores modificaciones en el siglo III—, su posición central se desvirtuó conforme el desarrollo urbano de la ciudad modificó el trazado viario. De este modo la vía entre <em>Aquae Tarbellicae</em> y <em>Tolosa</em> (<a href="https://archive.org/details/bub_gb_uAVYqu_XP7IC/page/n261/mode/2up" target="_blank" rel="noreferrer noopener"><em>It.Ant.</em> 457.8</a>) a su entrada a la ciudad se desvió hacia el norte deviniendo en <em>decumanus maximus</em>, cuando originalmente confluía en el monumento con otras calzadas de las que cabe señalar la vía de <em>Aginum</em> (<a href="https://archive.org/details/bub_gb_uAVYqu_XP7IC/page/n263/mode/2up" target="_blank" rel="noreferrer noopener"><em>It.Ant.</em> 463.2</a>). Su interior albergaba un lugar de culto en el que se han recuperado un importante conjunto de altares votivos. La destrucción del monumento se fecha hacia el siglo IV-V.</p>

<p class="section-heading">epigrafía</p>
<p class="epigraphy-block"><em>]egi fi(lius) / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1114)</p>
<p class="epigraphy-block"><em>I(ovi) O(ptimo) M(aximo) / Sile[x(?)</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1110).</p>
<p class="epigraphy-block"><em>I(ovi) O(ptimo) M(aximo) / [</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1111).</p>
<p class="epigraphy-block"><em>D(eo) I(ovi) O(ptimo) M(aximo) / Placida / Consu/[eti(?)</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1112).</p>
<p class="epigraphy-block"><em>]/a et M/aximi/nus v(otum) s(olverunt)</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1113).</p>
<p class="epigraphy-block"><em>A]//emilius Nigrinus // [</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1116).</p>
<p class="epigraphy-block"><em>]/inus</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1117).</p>
<p class="epigraphy-block"><em>I]mp(eratori) Cae[s(ari) 3] / [3]CON[</em> (<em>CAG</em> 31-2, p 287 = <em>AE</em> 1997, 1115).</p>
</div>
<div>
<figure>
<a href="https://monumentum.fr/monument-historique/pa00094450/saint-bertrand-de-comminges-ruines-antiques" target="_blank" rel="noreferrer noopener"><img src="https://p.monumentum.fr/galerie/maxi/00192/192171-francais-le-monument-a-enceinte-circulaire-au-second-plan-lespace-degage-du-forum-limite-a-droite-par-les-vestiges-dun-portique-et-a-gauche-par-ceux-du-marche-macellum-de-lugdunum-convenarum-saint-ber.jpg" alt="Le monument à enceinte circulaire"></a>
<figcaption>Le monument à enceinte circulaire ; au second-plan, l'espace dégagé du forum limité à droite par les vestiges d'un portique et à gauche par ceux du <em>macellum</em>. (Père Igor)</figcaption>
</figure>
</div>
</div>

<!-- Mapa vías convergentes en el monumento -->
<div id="map-vias" class="map-medium"></div>

<script>
(function() {
  var map2 = L.map('map-vias', {
    center: [43.029585, 0.573982],
    zoom: 17, minZoom: 17, maxZoom: 19, zoomControl: true
  });
  L.tileLayer('https://pyrenaeus.github.io/mapas-tiles/lugdunum-tiles/{z}/{x}/{y}.png', {
    minZoom: 17, maxZoom: 19, attribution: ''
  }).addTo(map2);

  var centro = [43.029585, 0.573982];
  var vias = [
    { nombre: 'R4', puntos: [[43.031324, 0.574380], centro] },
    { nombre: 'C',  puntos: [[43.030112, 0.578202], centro] },
    { nombre: 'R8', puntos: [[43.027865, 0.575777], centro] },
    { nombre: 'R1', puntos: [[43.028380, 0.572965], centro] },
    { nombre: 'R3', puntos: [[43.031458, 0.570575], centro] }
  ];
  vias.forEach(function(v) {
    L.polyline.antPath(v.puntos, {
      delay: 800, dashArray: [10, 20], weight: 4,
      color: '#F54927', pulseColor: '#ffffff', paused: false, reverse: false
    }).bindPopup(v.nombre).addTo(map2);
  });
  L.control.scale({ position: 'bottomleft', imperial: false, maxWidth: 200 }).addTo(map2);
})();
</script>

<!-- ============================================================ -->
<p class="section-title">Plaza del mercado. <em>Forum boarium</em> / <em>forum uetus</em></p>

<div class="two-col">
<div>
<p>Situado en el epicentro de la vida económica de la ciudad, este espacio será objeto de diferentes transformaciones conforme el desarrollo urbano de la ciudad evoluciona. Siendo en origen el lugar por el que dos vías confluían en el monumento de recinto circular, tras la construcción del <em>macellum</em>, en época de Tiberio será objeto de los primeros acondicionamientos hasta culminar en una estructura cercada por un muro perimetral con un pequeño templo (segunda mitad del siglo II) y un corredor (siglo IV). Entre los restos registrados en la plaza es destacable la presencia de fragmentos de dos grandes estatuas ecuestres y abundantes restos óseos bovinos.</p>

<p class="section-heading">epigrafía</p>
<p class="epigraphy-block"><em>I(ovi) O(ptimo) M(aximo) / [</em> (<em>ILTG</em> 60 = <em>CAG</em> 31-2, p 282 = <em>AE</em> 1957, 8).</p>
<p class="epigraphy-block"><em>[I(ovi)] O(ptimo) M(aximo) / [</em> (<em>CAG</em> 31-2, p 282).</p>
<p class="epigraphy-block"><em>sanc/tissimo / numini / Aurel(ius) Amor / [co]llegi[</em> (<em>ILTG</em> 66 = <em>CAG</em> 31-2, p 282 = <em>AE</em> 1994, 1199).</p>
<p class="epigraphy-block"><em>Eroteni[s] / uxoris v(otum) s(olvit)</em> (<em>ILTG</em> 69 = <em>CAG</em> 31-2, p 282 = <em>AE</em> 1957, 10).</p>
<p class="epigraphy-block"><em>]/rulis v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CAG</em> 31-2, p 282).</p>

<div class="three-col-img">
  <figure>
    <a href="https://www.persee.fr/doc/anami_0003-4398_1956_num_68_34_6100" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/anami_0003-4398_1956_num_68_34_T1_0147_0000_2.png" alt="AE 1957, 8"></a>
    <figcaption><em>AE</em> 1957, 8</figcaption>
  </figure>
  <figure>
    <a href="https://www.persee.fr/doc/anami_0003-4398_1956_num_68_34_6100" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/anami_0003-4398_1956_num_68_34_T1_0148_0000_3.png" alt="AE 1994, 1199"></a>
    <figcaption><em>AE</em> 1994, 1199</figcaption>
  </figure>
  <figure>
    <a href="https://www.persee.fr/doc/anami_0003-4398_1956_num_68_34_6100" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/anami_0003-4398_1956_num_68_34_T1_0150_0000_2.png" alt="AE 1957, 10"></a>
    <figcaption><em>AE</em> 1957, 10</figcaption>
  </figure>
</div>

<p class="subsection-title">Templo de la plaza del <em>macellum</em></p>
<p>En la segunda mitad del siglo II d. E. en el extremo meridional de la explanada del <em>macellum</em> se construye un edificio cuadrangular, un <em>sacellum</em> o pequeño templo, tal vez dedicado a Hércules —protector de los ganados— según se desprende de los restos escultóricos conservados que muestran un combate con las amazonas.</p>
</div>
<div>
<figure>
<a href="https://www.persee.fr/doc/galia_0016-4119_1966_num_24_2_2454" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/galia_0016-4119_1966_num_24_2_T1_0423_0000_1.png" alt="Gallia 1966, 24-2"></a>
<figcaption><em>Gallia</em>, 1966, 24-2</figcaption>
</figure>
</div>
</div>

<!-- ============================================================ -->
<p class="section-title"><em>Macellum</em> (mercado)</p>

<div class="two-col">
<div>
<p>El mayor <em>macellum</em> de los conocidos en las Galias (54,50 m N-S, 26,60 E-W). Su planta alargada con patio interior de mosaico, doble pórtico transversal, así como el corredor que rodea el edificio son completamente atípicos hace de él uno de los más grandiosos y originales que se conocen tras el de <em>Leptis Magna</em>. Construido en torno a un gran patio central —del que se conserva buena parte del mosaico del pavimento—, se divide en tres partes por dos edículos transversales. El espacio central del muro norte parece corresponder con un <em>sacellum</em>, pequeño santuario del mercado. El primer edificio construido durante el reinado de Tiberio fue destruido a finales del siglo I d.C. Inmediatamente reconstruido permaneció en uso hasta el Bajo Imperio aunque sustituido por un edificio de planta basilical en el siglo IV.</p>

<p class="section-heading">epigrafía</p>
<p class="epigraphy-block"><em>C(aio) Iul(io) [3] / [IIIIvi]ro / [sac]erdoti / [Romae] et Aug(ustorum) [</em> (<em>ILTG</em> 84 = <em>CAG</em> 31-2, p 293 = <em>AE</em> 1997, 1097).</p>
<p class="epigraphy-block"><em>] Gn(aeus) P[ompeius 3] / [3] sa[cer]dos Ro[mae et Aug(ustorum) 3] / [3] Aqu[it]ani(c)a [3] / [3 Po]mpeiu[s</em> (<em>ILTG</em> 84 = <em>CAG</em> 31-2, p 293 = <em>AE</em> 1997, 1098).</p>
<p class="epigraphy-block"><em>Gn(aeo) Po[mpeio(?)] / Gn(aei) f(ilio) [Volt(inia)] / Fron[toni] / sac[erdoti] / Ro[mae et Aug(ustorum)] /</em> [ (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$AE_1997_01099.jpg" target="_blank" rel="noreferrer noopener"><em>CAG</em> 31-2, p 294 = <em>AE</em> 1997, 1099 = <em>AE</em> 2009, 855</a>).</p>
<p class="epigraphy-block"><em>sacerdot]i Rom[ae et A]ugusto[rum 3] / [3 praefe]cto a[lae</em> (<em>CAG</em> 31-2, p 294 = <em>AE</em> 1997, 1100).</p>
<p class="epigraphy-block"><em>sacerdos(?) R]omae e[t Aug(ustorum)] / [3]SER[</em> (<em>CAG</em> 31-2, p 294 = <em>AE</em> 1938, +171 = <em>AE</em> 1997, 1102).</p>
<p class="epigraphy-block"><em>] / [sacerdoti] / [Romae et(?)] Augu[st(orum?)] / [III]viro(?)</em> [ (<em>CAG</em> 31-2, p 294 = <em>AE</em> 1997, 1103).</p>
</div>
<div>
<!-- Mapa mini del macellum -->
<div id="map-macellum" class="map-mini"></div>
<script>
(function() {
  var m = L.map('map-macellum', {
    center: [43.029785, 0.574680], zoom: 19, minZoom: 19, maxZoom: 19, zoomControl: false
  });
  L.tileLayer('https://pyrenaeus.github.io/mapas-tiles/lugdunum-tiles/{z}/{x}/{y}.png', {
    minZoom: 17, maxZoom: 19, attribution: ''
  }).addTo(m);
  var coordenadas = [
    [43.029900315, 0.574723979],[43.02988566, 0.574760930],[43.029868795, 0.574748324],
    [43.029883466, 0.574711361]
  ];
  L.polygon(coordenadas, { color: 'none', fillColor: '#9810FA', fillOpacity: 0.5, weight: 0 })
    .bindPopup('<em>¿Sacellum?</em>').addTo(m);
})();
</script>
</div>
</div>

<!-- ============================================================ -->
<p class="section-title">Termas del foro</p>

<div class="two-col">
<div>
<p>Edificio complejo por su estratigrafía con diez niveles en los que es posible distinguir tres estados distintos del edificio a su vez divididos en diferentes fases. El primer estado de las termas está atestiguado, bajo Augusto, en el espacio delimitado por el primer marco urbano. Durante los reinados de Tiberio y Claudio Nerón se producen importantes transformaciones que llevan al estado II. A finales del siglo I se produjo la destrucción y posterior reconstrucción de las termas, que pasaron a estar adosadas al templo, respetando su orientación. Este tercer estado (con 3 fases) duró hasta el siglo III, con algunas transformaciones ocasionales hasta su destrucción definitiva como muy pronto alrededor del año 378.</p>

<figure>
<a href="https://www.flickr.com/photos/delphinecingal/2807170776/" target="_blank" rel="noreferrer noopener"><img src="http://farm4.static.flickr.com/3195/2807170776_f39e3b99a4_z.jpg" alt="Termas del foro"></a>
<figcaption>Termas del foro. (©Delphine Cingal)</figcaption>
</figure>

<p class="section-heading">epigrafía</p>
<p class="epigraphy-block"><em>[C(aio) Iulio Sex(ti) f(ilio) Volt(inia)] / [Sereno IIIIviro] / [sacerd]oti R[omae] / [et Aug(ustorum)] praef[ecto] / [alae] VII Phrygum / [3]ur so[</em> (<em>ILTG</em> 77 = <em>CAG</em> 31-2, p 303 = <em>AE</em> 1997, 1095).</p>
<p class="epigraphy-block"><em>[C(aio) Iulio Sex(ti) fi]l(io?) Ser[eno] / IIIIvir(o) sacer[d(oti)] / [Ro]mae et [Aug(ustorum)] / [pra]efecto a[lae] / [VII Ph]rygum / [3] L(uci) fil(ius) Sabinus / [ami]co opt&lt;i=U&gt;m[o] / [</em> (<em>ILTG</em> 78 = <em>CAG</em> 31-2, p 303 = <em>AE</em> 1997, 1096).</p>
<p class="epigraphy-block"><em>I(ovi) O(ptimo) M(aximo) / Salutari / Ulpianus / Amf(i)l(us?) gravi / infirmita/te libera/[tus(?)</em> (<em>CIL</em> XIII, 240 = <em>CAG</em> 31-2, p 303).</p>
<p class="epigraphy-block"><em>]AR / [3]IA / [3]AO / [3]VIC / [3]TI / [3]RIB / [</em> (<em>ILTG</em> 94 = <em>CAG</em> 31-2, p 308).</p>
<p class="epigraphy-block"><em>]VG G[3] / [3]P I[</em> (<em>ILTG</em> 72 = <em>CAG</em> 31-2, p 308).</p>
<p class="epigraphy-block"><em>]RD[3] / [3]P[</em> (<em>CAG</em> 31-2, p 308).</p>
</div>
<div>
<figure>
<a href="https://www.persee.fr/doc/aquit_0758-9670_2001_num_18_1_1320" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/aquit_0758-9670_2001_num_18_1_T1_0032_0000_5.png" alt="Plan des thermes du forum : état Ia-niveau 3, Auguste"></a>
<figcaption>Plan des thermes du <em>forum</em> : état Ia-niveau 3, Auguste</figcaption>
</figure>
</div>
</div>

<!-- ============================================================ -->
<p class="section-title">El templo</p>

<div class="two-col">
<div>
<p>Templo hexástilo próstilo datado hacia el primer cuarto del siglo I, con unas dimensiones para el <em>podium</em> de 24,85 m x 14,80 m. Los elementos decorativos conservados permiten establecer conexiones tanto con la <em>Maison Carrée</em> de Nîmes como con los capiteles de Saintes. El templo contaba con un muro perimetral que conformaba un patio en U en torno al santuario dentro del cual, frente al templo, se conserva el basamento de un altar o un grupo escultórico. Hacia el oeste, en su cara posterior limitando con el <em>forum novum</em>, el templo conserva unos basamentos que dada su proximidad inmediata al depósito de esculturas del trofeo imperial, ha permitido deducir que es en este espacio en el que fuera erigido este monumento. Los restos conservados no permiten definir la naturaleza de este santuario. Las hipótesis han oscilado entre un templo del culto a Roma y al Emperador —equivalente del conocido santuario de Lyon para las Tres Galias—, en este caso para la <em>Novempopulana</em>, o un templo consagrado a un Marte indígena, tal vez el que albergara las <em>palmae argentae</em> halladas en el lecho del Rhin.</p>

<p class="section-heading">epigrafía</p>
<p class="epigraphy-block"><em>Victo[riae] / Augu[sti(?)] / [3 I]ul(ius) C(ai) f(ilius) Vol[t(inia) 3] / [s]acerdos R[omae et Aug(ustorum)] / [p]ro(?) h(onore)</em> [ (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$ILTG_00064.jpg" target="_blank" rel="noreferrer noopener"><em>ILTG</em> 64 = <em>CAG</em> 31-2, p 316 = <em>AE</em> 1941, 154 = AE 1997, 1089</a>).</p>
<p class="epigraphy-block"><em>[Imp(eratori) C]aes[a]ri / [Vesp]as[ia]no / [Aug(usto) pont(ifici)] max(imo) / [trib(unicia) pot(estate) VI(?)] imp(eratori) [3 co(n)s(uli)] V p(atri) p(atriae) / [</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$Rosso_00009.jpg" target="_blank" rel="noreferrer noopener"><em>ILTG</em> 71 = <em>CAG</em> 31-2, p 316 = <em>AE</em> 1997, 1090</a>).</p>
<p class="epigraphy-block"><em>[Imp(eratori) Caes(ari) divi] / [Nerva]e fi[l(io) Ner]/[vae] Traian[o Aug(usto)] / [Ger]m(anico) pontif[ici] / [maximo] trib(unicia) [pot(estate)] / [IIII] co(n)s(uli) III p(atri) [p(atriae)] / [C(aius) Iulius Ser]en[us(?)</em> (<em>AE</em> 1945, +125 = <em>ILTG</em> 70 = <em>CAG</em> 31-2, p 316 = <em>AE</em> 1997, 1091).</p>
<p class="epigraphy-block"><em>Plotin[ae] / [I]mp(eratoris) Traiani / [Ca]es(aris) Aug(usti) Ger[m(anici)] / C(aius) Iul(ius) Seren[us] / nomine suo et / Iuliae L(uci) f(iliae) Iuliolae / uxoris</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$Rosso_00011.jpg;$ILTG_00070.jpg" target="_blank" rel="noreferrer noopener"><em>ILTG</em> 74 = <em>CAG</em> 31-2, p 317 = <em>AE</em> 1938, 170</a>).</p>
<p class="epigraphy-block"><em>[C(aius) Iuli]us Se[x(ti) f(ilius)] C(ai) [n]ep(os) V[ol]t(inia) Se[r]en[us IIIIvir sacerdos Romae et Aug(ustorum)] / [praef]ec[t]us alae V[II Phry]gu[m 3]</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$ILTG_00081.jpg" target="_blank" rel="noreferrer noopener"><em>ILTG</em> 81 = <em>CAG</em> 31-2, p 317 = <em>AE</em> 1938, 169 = <em>AE</em> 1997, 1093</a>).</p>
<p class="epigraphy-block"><em>[C(aio) Iuli]o Sex(ti) fi[l(io)] / [Vol]t(inia) Sereno / IIIIviro sacerd(oti) / Romae et Aug(ustorum) / [praef]ecto alae / [VII Phry]gum / [vic]ani(?) [</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$ILTG_00076.jpg" target="_blank" rel="noreferrer noopener"><em>ILTG</em> 76 = <em>CAG</em> 31-2, p 318 = <em>AE</em> 1938, 171 = <em>AE</em> 1999, +1039</a>).</p>
<p class="epigraphy-block"><em>I(ovi) O(ptimo) M(aximo) Iunoni Mercurio [</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$ILTG_00061.jpg" target="_blank" rel="noreferrer noopener"><em>ILTG</em> 61 = <em>CAG</em> 31-2, p 318 = <em>AE</em> 1941, 155 = <em>AE</em> 1942/43, +81</a>).</p>
<p class="epigraphy-block"><em>Fortunae / [</em> (<em>ILTG</em> 58 = <em>CAG</em> 31-2, p 318 = <em>AE</em> 1933, 238).</p>
<p class="epigraphy-block"><em>]PRA[</em> (<em>CAG</em> 31-2, p 318). <em>]NE[3] / [3]CIO Titul[lus(?) 3] / [3]co [</em> (<em>CAG</em> 31-2, p 318). <em>]IDIN[3] / [3]TITV[</em> (<em>CAG</em> 31-2, p 318 = <em>AE</em> 1997, 1108). <em>]RO[3] / [3 P]ompei</em>[ (<em>CAG</em> 31-2, p 319 = <em>AE</em> 1997, 1109). Del templo y su entorno proceden también otras 17 inscripciones conservadas de forma muy fragmentaria (<em>CAG</em> 31-2, p 319).</p>
</div>
<div>
<figure>
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAYyOsR_YVbkSfVlFgZ75wVM6-dD8KPHA2A8G1h7syOXx7hMtRvSC6RHUN_z_UI34S1lDI_TGilRctCU38m0KS1o-VjUnfwBgR2bQdcCk-PdKLG6AIGLoXxnZ4LQqLg9etlCDHa0rjLkg/s1600/trophy3.jpg" alt="Trofeo imperial según la propuesta de E. Boube">
<figcaption>Trofeo imperial según la propuesta de E. Boube</figcaption>
</figure>
<figure>
<a href="https://db.edcs.eu/epigr/epi_ergebnis.php" target="_blank" rel="noopener noreferrer"><img src="https://edcs.hist.uzh.ch/bilder/Ro/Rosso_00009.jpg" alt="AE 1997, 1090"></a>
<figcaption><em>AE</em> 1997, 1090 (EDCS)</figcaption>
</figure>
</div>
</div>

<!-- Dos mapas del mismo área en paralelo: templo (período romano) y termas del pórtico (tardoantigüedad) -->
<div class="two-col" style="align-items: start;">
<div>
<!-- Mapa templo: solo períbolo y marcadores de escultura, sin termas -->
<div id="map-templo" class="map-tall"></div>
<script>
(function() {
  var m = L.map('map-templo', {
    center: [43.029663, 0.573116], zoom: 19, minZoom: 19, maxZoom: 19, zoomControl: false
  });
  L.tileLayer('https://pyrenaeus.github.io/mapas-tiles/lugdunum-tiles/{z}/{x}/{y}.png', {
    minZoom: 17, maxZoom: 19, attribution: ''
  }).addTo(m);

  // Períbolo y pórtico del templo
  var perCoords = [
    [43.030022401, 0.572997252],[43.0300191792, 0.5730237491],[43.0300346451, 0.5730479373],
    [43.03001407835, 0.5730944158],[43.02999094111, 0.57308572111],[43.0299178198, 0.5732472319],
    [43.029924894, 0.573272382],[43.0299191742, 0.5732976344],[43.029902335, 0.573303247],
    [43.0298940264, 0.5732988294],[43.02981312317, 0.57347635334],[43.02983765493, 0.57349829641],
    [43.0298085556, 0.5735590365],[43.02978420123, 0.57353746585],[43.0297738551, 0.5735605816],
    [43.02957566746, 0.57339245619],[43.02955606558, 0.5734361061],[43.02948785927, 0.57337811082],
    [43.0295064293, 0.5733336827],[43.029315619, 0.573172021],[43.0295620738, 0.5726231364],
    [43.02963869, 0.57268268],[43.0294394417, 0.5731223421],[43.02974598633, 0.57337773169],
    [43.029945628, 0.572948657]
  ];
  var divP = document.createElement('div');
  divP.style.width = '400px';
  divP.innerHTML = 'Períbolo, pórtico del templo. <a href="https://hal.science/hal-01056986/document" target="_blank" rel="noreferrer noopener">Badie, A. La façade extérieure du portique du temple du <em>forum</em> de Saint-Bertrand-de-Comminges (Haute-Garonne)</a>.';
  L.polygon(perCoords, { color: 'none', fillColor: '#5EA529', fillOpacity: 0.3, weight: 0 })
    .bindPopup(divP, { maxWidth: 400 }).addTo(m);

  // Marcadores de hallazgos escultóricos
  var iconEstatua = L.divIcon({ html: '<span style="font-size:20px;color:#e63946;text-shadow:1px 1px 2px rgba(0,0,0,0.4)">⁂</span>', className: '', iconAnchor: [10,10] });
  var iconTrofeo  = L.divIcon({ html: '<span style="font-size:20px;color:#1a6bcc;text-shadow:1px 1px 2px rgba(0,0,0,0.4)">⁂</span>', className: '', iconAnchor: [10,10] });
  var divE = document.createElement('div'); divE.style.width='320px';
  divE.innerHTML = '<b>Fragmentos de estatuas colosales.</b><br><br><a href="https://fr.linkedin.com/posts/conseil-d%C3%A9partemental-de-la-haute-garonne_culture-activity-7300832103636582400-nOMg" target="_blank" rel="noreferrer noopener"><img src="https://media.licdn.com/dms/image/v2/D5622AQH-Jp_IwKzo2w/feedshare-shrink_800/B56ZU9VdexHsAk-/0/1740490794798?e=2147483647&v=beta&t=oskU5lYHvPWX2wqSPnfh5VJZ8xVhjMRKYmP8K8rcvCA" style="width:100%;max-width:300px;display:block;margin:6px 0;"></a><em>Conseil départemental de la Haute-Garonne</em>';
  L.marker([43.029869, 0.572795], { icon: iconEstatua }).bindPopup(divE, { maxWidth: 320 }).addTo(m);
  var divT = document.createElement('div'); divT.style.width='320px';
  divT.innerHTML = '<b>Fragmentos del trofeo imperial.</b><br><br><a href="https://fr.linkedin.com/posts/conseil-d%C3%A9partemental-de-la-haute-garonne_culture-activity-7300832103636582400-nOMg" target="_blank" rel="noreferrer noopener"><img src="https://media.licdn.com/dms/image/v2/D5622AQGG9uo7K_4yOg/feedshare-shrink_800/B56ZU9Vdd.HQAg-/0/1740490794464?e=2147483647&v=beta&t=GhwRUHcbG4zoVVVi2o8f8rBzuw4GQXvHlfKWf96Pcsc" style="width:100%;max-width:300px;display:block;margin:6px 0;"></a><em>Conseil départemental de la Haute-Garonne</em><br><br><a href="https://books.openedition.org/pupvd/26307" target="_blank" rel="noreferrer noopener">Schenck-David, J.-L. Le trophée augustéen de Saint-Bertrand-de-Comminges.</a>';
  L.marker([43.029791, 0.572730], { icon: iconTrofeo }).bindPopup(divT, { maxWidth: 320 }).addTo(m);
})();
</script>
</div>
<div>

<!-- Mapa termas del pórtico: mismo encuadre, solo el polígono de las termas tardías -->
<div id="map-portico" class="map-tall"></div>
<script>
(function() {
  var m = L.map('map-portico', {
    center: [43.02966338666923, 0.5731158854816377], zoom: 19, minZoom: 19, maxZoom: 19, zoomControl: false
  });
  L.tileLayer('https://pyrenaeus.github.io/mapas-tiles/lugdunum-tiles/{z}/{x}/{y}.png', {
    minZoom: 17, maxZoom: 19, attribution: ''
  }).addTo(m);
  var coordenadas = [
    [43.029742012, 0.573388492],
    [43.029726834, 0.57342387311],
    [43.0296051660, 0.573339466],
    [43.029571924, 0.573400636],
    [43.02950310533, 0.5733416945],
    [43.0295064363, 0.5733337247],
    [43.02946218, 0.57329489],
    [43.0294810297, 0.5732452622],
    [43.02950508, 0.5732388981],
    [43.029537086, 0.573162006],
    [43.02955371, 0.573153212],
    [43.02955892, 0.57315188],
    [43.02956776, 0.57315418],
    [43.02957422, 0.57316201],
    [43.02957715, 0.5731743],
    [43.02957468, 0.57319053],
    [43.029567713, 0.573220588],
    [43.029614574, 0.573257446],
    [43.029611733, 0.573264487]
  ];
  L.polygon(coordenadas, {
    color: 'none', fillColor: '#8E51FF', fillOpacity: 0.3, weight: 0
  }).bindPopup('<em>Termas</em>.<br>En un momento que no ha podido ser determinado (¿siglo V?) se produce la construcción de un pequeño edificio termal sobre las ruinas del pórtico.').addTo(m);
})();
</script>
</div>
</div>

<!-- ============================================================ -->
<p class="section-title"><em>Forum nouum</em></p>

<div class="two-col">
<div>
<p>Espacio rectangular de 75 m x 41 m ubicado junto a la cara posterior del templo. La estratigrafía evidencia distintas fases tras un primer incendio en los años 60-80 con dos niveles más de destrucción a mediados del siglo II y en el III o inicios del IV. Estaba rodeado por el S. y el E. por un muro bajo así como un pórtico cubierto al que se abrían hacia el Foro 16 pequeños habitáculos interpretados como tiendas. En esta misma hilera existía un pasaje a nivel del octavo nicho o intervalo que suponía la entrada sur al Foro. En este espacio se desenterró la cabeza colosal de una estatua femenina de mármol y los restos del torso y la cabeza de una estatua masculina de grandes dimensiones. En el interior se observaron 5 cimentaciones de mampostería de bloques así como las huellas de otras dos.</p>

<figure>
<a href="https://www.persee.fr/doc/anami_0003-4398_1935_num_47_186_5580" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/anami_0003-4398_1935_num_47_186_T1_0134_0003_3.png?rotate=1" alt="Plan du Forum"></a>
<figcaption>Plan du Forum</figcaption>
</figure>

<p class="section-heading">epigrafía</p>
<p class="epigraphy-block"><em>]IVL[3] / [3]ON[</em> (<em>CAG</em> 31-2, p 325). <em>her]es ex tes[tamento]</em> (<em>ILTG</em> 91 = <em>CAG</em> 31-2, p 326). <em>]TII[</em> (<em>ILTG</em> 109 = <em>CAG</em> 31-2, p 326).</p>
<p class="epigraphy-block"><em>] Volt(inia) [3] / [sacerd(oti) Romae] et Aug(ustorum) II[IIviro] / [3]III[3] / [3 Vo]lt(inia) Barba[rus</em> (<em>ILTG</em> 82 = <em>CAG</em> 31-2, p 334 = <em>AE</em> 1997, 1101).</p>
<p class="epigraphy-block"><em>P(ublius) Valer(ius) P(ubli) [fil(ius)] / Volt(inia) / Pro[culus] / et [</em> (<em>ILTG</em> 90 = <em>CAG</em> 31-2, p 334).</p>
<p class="epigraphy-block"><em>]EN[3] / [3 Aug]usti(?) [3] / [3]O[3] / [3]N[</em> [ (<em>CAG</em> 31-2, p 334 = <em>AE</em> 1997, 1105).</p>
<p class="epigraphy-block"><em>Geni[o] / [c]oloni[ae] / [Con]ven[arum(?)]</em> (<em>ILTG</em> 59 = <em>CAG</em> 31-2, p 334 = <em>AE</em> 1957, 4 = <em>AE</em> 1999, 1047).</p>
<p class="epigraphy-block"><em>---] pat [---/---] onu[---</em> (<em>ILTG</em> 75 = <em>CAG</em> 31-2, p 334).</p>
<p class="epigraphy-block"><em>donatus bello Da]cico [coronis 3] / [ve]xillis II ha[stis puris 3]</em> (<em>ILTG</em> 85 = <em>CAG</em> 31-2, p 334).</p>
<p class="epigraphy-block"><em>le]g(ionis?) XV [3] / [3]on[3] / [3]a[</em> (<em>ILTG</em> 98 = <em>CAG</em> 31-2, p 335). <em>]CTVS [3] / [3]COP[3] / [3]CI[</em> (<em>ILTG</em> 95 = <em>CAG</em> 31-2, p 335). <em>]SA[3] / [3]XIA[3] / [3]T[</em> (<em>ILTG</em> 106 = <em>CAG</em> 31-2, p 335).</p>
<p class="epigraphy-block"><em>I(ovi) O(ptimo) M(aximo) / Mansue/[tus</em> (<em>CAG</em> 31-2, p 335 = <em>AE</em> 1994, 1185). <em>]ulius An/dostenni/s fil(ius) ex boto(!) // S(olvit) l(ibens) m(erito)</em> (<em>AE</em> 1994, 1200).</p>
</div>
<div>
<figure>
<a href="https://www.persee.fr/doc/anami_0003-4398_1956_num_68_34_6100" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/anami_0003-4398_1956_num_68_34_T1_0135_0000_2.png" alt="Genio coloniae Convenarum"></a>
<figcaption><em>Geni[o] / [c]oloni[ae] / [Con]ven[arum(?)]</em> (<em>ILTG</em> 59 = <em>CAG</em> 31-2, p 334 = <em>AE</em> 1957, 4 = <em>AE</em> 1999, 1047)</figcaption>
</figure>
</div>
</div>

<!-- ============================================================ -->
<p class="section-title">Teatro</p>

<div class="two-col">
<div>
<p>El mejor testigo de la ciudad antigua por haber conservado visible hasta la actualidad uno de los accesos a la <em>cauea</em> (11,70 m de altura) conocido en la tradición local como «La Grande Arche». El estudio arquitectónico y la estratigrafía permiten distinguir tres estados. Los restos más antiguos corresponden a un muro revestido de <em>opus uittatum</em> datado en torno al cambio de era. Posteriormente fue destruido para dar paso a mamposterías que sostenían un sistema de bóvedas superpuestas. Este último, en una tercera etapa (pero no antes de finales del siglo I) será objeto de consolidaciones cuya construcción se distingue de la anterior por el uso de ladrillos dispuestos en hiladas intercaladas con capas de escombros y toba. Una gruesa capa de destrucción cerca del <em>uomitorium</em>, se data por el mobiliario cerámico y numismático entre siglo III y IV.</p>

<p class="subsection-title"><em>Porticus post scaenam</em></p>
<p>Gran plaza (100 m x 80 m) delimitada por pórticos con una entrada monumental al menos en su parte occidental. Fue construido en un barrio muy antiguo, donde al parecer coexistían viviendas modestas y talleres. Su construcción, que se puede datar en el reinado de Claudio, bloqueaba parte de una red viaria ortogonal. Es probable que este reordenamiento esté relacionado con el segundo estado del teatro.</p>
</div>
<div>
<div id="map-teatro" class="map-small"></div>
<script>
(function() {
  var m = L.map('map-teatro', {
    center: [43.028753, 0.572420], zoom: 18, minZoom: 17, maxZoom: 19, zoomControl: true
  });
  L.tileLayer('https://pyrenaeus.github.io/mapas-tiles/lugdunum-tiles/{z}/{x}/{y}.png', {
    minZoom: 17, maxZoom: 19, attribution: ''
  }).addTo(m);
})();
</script>
</div>
</div>

<!-- ============================================================ -->
<p class="section-title"><em>Domus</em> I y II, <em>Chantiers Escoubas Victor I-II, Base, Gez René, Jardin Verdale</em></p>

<div class="two-col">
<div>
<p>Junto a la vía procedente de Hispania y próximo a los principales edificios públicos de la ciudad en el lugar denominado <em>Le Plan</em>, se conservan los restos de lo que se ha denominado un barrio aristocrático en el que una compleja estructura revela la presencia de distintas edificaciones a las que se ha dado el nombre de <em>domus</em> I (o <em>domus</em> occidental) y <em>domus</em> II (o <em>domus</em> oriental). La complicada estratigrafía no permite con seguridad establecer las fases de construcción de ambos edificios.</p>
<p>Al norte de la <em>Domus II</em>, en paralelo a su fachada, se encuentran los cimientos de dos pilares que por su forma podrían pertenecer a un <em>tetrapylon</em>.</p>

<div id="map-domus" class="map-tall"></div>
<script>
(function() {
  var m = L.map('map-domus', {
    center: [43.02880, 0.57380], zoom: 19, minZoom: 19, maxZoom: 19, zoomControl: false
  });
  L.tileLayer('https://pyrenaeus.github.io/mapas-tiles/lugdunum-tiles/{z}/{x}/{y}.png', {
    minZoom: 17, maxZoom: 19, attribution: ''
  }).addTo(m);

  var polys = [
    { coords: [[43.02842583,0.57369051],[43.028586625,0.573686068],[43.028747997,0.573849359],[43.02876384,0.573872805],[43.028776928,0.573899583],[43.028786382,0.573947795],[43.028780535,0.574001619],[43.02898345,0.574176761],[43.029136577,0.573818226],[43.028583663,0.573347556],[43.028586625,0.573686068]], color:'#016630', text:'<em>Domus</em> I' },
    { coords: [[43.028892882,0.574375103],[43.028773866,0.574292085],[43.028410123,0.573985872],[43.02842583,0.57369051],[43.028586625,0.573686068],[43.028747997,0.573849359],[43.02876384,0.573872805],[43.028776928,0.573899583],[43.028786382,0.573947795],[43.028780535,0.574001619],[43.02898345,0.574176761]], color:'#8207DB', text:'<em>Domus</em> II' },
    { coords: [[43.029014221,0.574257705],[43.028985527,0.574322812],[43.028958634,0.574300779],[43.028987383,0.57423604]], color:'#34A6F4', text:'<em>¿Tetrapylon?</em>' }
  ];
  polys.forEach(function(p) {
    L.polygon(p.coords, { color:'none', fillColor:p.color, fillOpacity:0.3, weight:0 })
      .bindPopup(p.text, { maxWidth:400 }).addTo(m);
  });
})();
</script>

<p class="section-heading">epigrafía</p>
<p class="epigraphy-block"><em>i]mp(eratori?) [3] / [3] p(atri) p(atriae) [</em> (<em>CAG</em> 31-2, p 344).</p>
<p class="epigraphy-block"><em>]mis[3] / [3 S]ulpiciu[s</em> (<em>ILTG</em> 98 = <em>CAG</em> 31-2, p 344).</p>
<p class="epigraphy-block"><em>]RD[3] / [3]OP[</em> (<em>CAG</em> 31-2, p 344 = <em>AE</em> 1997, 1107).</p>
</div>
<div></div>
</div>

<!-- ============================================================ -->
<p class="section-title">Basílica paleocristiana</p>

<div class="two-col">
<div>
<p>El primer edificio de Saint-Bertrand-de-Comminges objeto de una investigación arqueológica sistemática, documenta 3 fases o estados distintos en su estructura y construcción con unas dimensiones generales de 45 m de este a oeste y 13,60 en su máxima extensión. Erigida alrededor del año 430 sobre los restos de una <em>domus</em> las principales modificaciones se efectuarán en el siglo VI y en el VIII. La basílica conserva in situ 34 sarcófagos fechados entre los siglos V-VII.</p>

<figure>
<a href="https://www.persee.fr/doc/crai_0065-0536_2010_num_154_3_93011" target="_blank" rel="noreferrer noopener"><img src="https://www.persee.fr/renderIllustration/crai_0065-0536_2010_num_154_3_T21_1272_0000_1.png" alt="Plan évolutif de l'établissement chrétien"></a>
<figcaption>Plan évolutif de l'établissement chrétien.</figcaption>
</figure>

<p class="section-heading">epigrafía</p>
<p class="epigraphy-block"><em>Da Chr(ist)e famulae tuae / Aemilian(a)e requi&lt;e=I&gt;m et vitam aeternam</em> (<em>ILTG</em> 111 = <em>CAG</em> 31-2, p 355).</p>
<hr class="separator">
<p class="epigraphy-block"><em>Herculi / [In]vi[cto</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$CIL_13_00229.jpg" target="_blank" rel="noreferrer noopener"><em>CIL</em> XIII, 229 = <em>CAG</em> 31-2, p 357 = <em>AE</em> 1994, 1191</a>). Fragmento de altar descubierto al sur de la basílica, en el cementerio Saint-Julien.</p>
<hr class="separator">
<p>Otras inscripciones halladas en el barrio de <em>Le Plan</em>:</p>
<p class="epigraphy-block"><em>Uolkano / Marti s(acrum) / Chio / Paulini / [e]x voto</em> (<em>ILTG</em> 65 = <em>CAG</em> 31-2, p 357 = <em>AE</em> 1957, 7).</p>
<p class="epigraphy-block"><em>Mercurio [- - -</em> (<em>CIL</em> XIII, 243 = <em>CAG</em> 31-2, p 357). <em>D(is?) [M(anibus?)]</em> (<em>CIL</em> XIII, 293b = <em>CAG</em> 31-2, p 357). <em>]obit[</em> (<em>CIL</em> XIII, 297 = <em>CAG</em> 31-2, p 357).</p>
</div>
<div>
<figure>
<a href="https://www.persee.fr/doc/crai_0065-0536_2010_num_154_3_93011" target="_blank" rel="noreferrer noopener"><img src="https://www.persee.fr/renderIllustration/crai_0065-0536_2010_num_154_3_T21_1301_0000_1.png" alt="Évocation à l'aquarelle du troisième état de l'établissement chrétien par Jean-Marie Gassend"></a>
<figcaption>Évocation à l'aquarelle du troisième état de l'établissement chrétien par Jean-Marie Gassend.</figcaption>
</figure>
<figure>
<a href="https://www.persee.fr/doc/anami_0003-4398_1956_num_68_34_6100" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/anami_0003-4398_1956_num_68_34_T1_0142_0000_3.png" alt="Uolkano Marti sacrum"></a>
<figcaption><em>Uolkano / Marti s(acrum) / Chio / Paulini / [e]x voto</em> (<em>ILTG</em> 65)</figcaption>
</figure>
</div>
</div>

<!-- ============================================================ -->
<p class="section-title">Edificios superpuestos de <em>Coupéré</em></p>

<div class="two-col">
<div>
<p>En este sector las excavaciones arqueológicas revelan la presencia de diferentes estructuras superpuestas correspondientes a dos construcciones. La más antigua pertenece a las primeras décadas de nuestra era, hacia el 20-40. A mediados del siglo I sufrió una importante remodelación ampliando la sala principal. Este edificio, destruido por el fuego a juzgar por el aspecto de los materiales que constituían los terraplenes de destrucción y rehabilitación, fue completamente arrasado y utilizado como cantera de abastecimiento por los constructores del segundo edificio a partir del 130-150, con reformas a mediados del siglo III.</p>
</div>
<div>
<figure>
<a href="https://www.persee.fr/doc/aquit_0758-9670_2001_num_18_1_1320" target="_blank" rel="noreferrer noopener"><img src="https://www.persee.fr/renderIllustration/aquit_0758-9670_2001_num_18_1_T1_0056_0000_1.png" alt="Plan des édifices superposés de Coupéré"></a>
<figcaption>Plan des édifices superposés de Coupéré</figcaption>
</figure>
</div>
</div>

<!-- ============================================================ -->
<p class="section-title">Campamento militar de Tranquistan</p>

<div class="two-col">
<div>
<p>El <em>castrum</em> ocupa una superficie de 2,85 ha rodeado por un recinto rectangular de mampostería de 176 x 162 m, provisto de torres cuadrangulares dispuestas a intervalos regulares en la cara interior, con un ligero resalte hacia el exterior, una torre en cada esquina, dos torres a cada lado de las cuatro puertas centrales y finalmente una torre intermedia entre las puertas y las esquinas. La superficie del campamento cumple con las normas de castramentación previstas para una <em>cohors quingenana</em> (no es posible determinar si <em>peditata</em> o <em>equitata</em>). Para la construcción del campamento se propone un rango cronológico que va del 161 (reinado conjunto de Marco Aurelio y Lucio Vero) hasta 211 (muerte de Septimio Severo). Con una ubicación muy alejada del <em>limes</em>, la función de este campamento no cuenta con una explicación. El campamento militar de Saint-Bertrand-de-Comminges es, para este período, el único en las Tres Galias que está atestiguado por la arqueología. Al pie de la puerta oeste se han recuperado fragmentos de una inscripción monumental que sería visible sobre la puerta conmemorando la fundación del asentamiento militar.</p>

<p class="section-heading">epigrafía</p>
<p class="epigraphy-block"><em>Au]g(ustus) pont(ifex) max(imus) / [3 C]aes(ar) [ // ]r[3] / [3]ra c[3] / [3]DAM [ // ]A[3] / [3] Aug(ustus) [</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$AE_1991_01212.jpg" target="_blank" rel="noreferrer noopener"><em>CAG</em> 31-2, p 370 = <em>AE</em> 1991, 1212 = <em>AE</em> 2003, +1163</a>).</p>

<figure>
<a href="https://www.persee.fr/doc/aquit_0758-9670_2003_num_19_1_1353" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/aquit_0758-9670_2003_num_19_1_T1_0136_0000_4.png" alt="CAG 31-2, p 370 = AE 1991, 1212"></a>
<figcaption><em>CAG</em> 31-2, p 370 = <em>AE</em> 1991, 1212 = <em>AE</em> 2003, +1163</figcaption>
</figure>
</div>
<div>
<figure>
<a href="https://journals.openedition.org/adlfi/10222" target="_blank" rel="noopener noreferrer"><img src="https://journals.openedition.org/adlfi/docannexe/image/10222/img-2-small580.jpg" alt="Torre del ángulo suroeste"></a>
<figcaption>Torre del ángulo suroeste (Schaad, D. Gi 1997 ; CNRS Éditions 1998 (1990))</figcaption>
</figure>
</div>
</div>

<!-- ============================================================ -->
<p class="section-title">Termas de <em>Sales Arrougues</em></p>

<p>Probablemente unas <em>thermae militares</em> por su proximidad al campamento de Tranquistan y por la particular coincidencia existente entre los hallazgos monetales documentados en ambos espacios.</p>

<!-- ============================================================ -->
<p class="section-title">Termas del norte</p>

<div class="two-col">
<div>
<p>Construidas a mediados del siglo I, probablemente durante el periodo Antonino, sobre las ruinas de un barrio incendiado. A finales del siglo I, el estado IIa se caracteriza por una renovación completa del bloque termal. En el siglo IV (estado III), se percibe un cambio considerable que señala el abandono del antiguo bloque termal y su restricción a espacios de construcción mucho más modestos. El complejo termal pasará por diferentes fases hasta su abandono en el siglo IV. El estado reproducido en el mapa corresponde con el IIb, fin del siglo I.</p>

<figure>
<a href="https://journals.openedition.org/adlfi/10981" target="_blank" rel="noopener noreferrer"><img src="https://journals.openedition.org/adlfi/docannexe/image/10981/img-1.jpg" alt="Thermes du Nord. Plan de l'état IIb"></a>
<figcaption>Thermes du Nord. Plan de l'état IIb</figcaption>
</figure>

<p class="section-heading">epigrafía</p>
<p class="epigraphy-block"><em>]in/us et Al//cima / v(otum) s(olverunt) l(ibentes) m(erito)</em> (<em>ILTG</em> 67 = <em>CAG</em> 31-2, p 379).</p>
<p class="epigraphy-block"><em>Fortun[ae] // deae / Secundus / Secundio/nis f(ilius) v(otum) s(olvit) [l(ibens) m(erito)]</em> (<em>ILTG</em> 57 = <em>CAG</em> 31-2, p 380 = <em>AE</em> 1951, 152 = <em>AE</em> 1994, 1190).</p>
<p class="epigraphy-block"><em>Fortunae / Aug(ustae) / M(arcus) Mans(uetius) / Titullinus / v(otum) s(olvit) l(ibens) m(erito)</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$AE_2001_01375.jpg" target="_blank" rel="noreferrer noopener"><em>CAG</em> 31-2, p 382 = <em>AE</em> 2001, 1375</a>).</p>
<p class="epigraphy-block"><em>D(omino) n(ostro) / Marco Aurel[io] / Carino nobil(issimo) / [Caes]ar(i) principi / [iuventutis</em> (<em>CIL</em> XVII-2, 309 = <em>ILTG</em> 463 = <em>CAG</em> 31-2, p 381 = <em>AE</em> 1951, 151).</p>

<p class="subsection-title">El edificio en U</p>
<p>Las campañas de fotografía aérea llevadas a cabo entre 1986 y 1990 ponían de manifiesto la existencia de una construcción limitando con el muro septentrional de las termas del norte, de la que su estructura resultaba visible en líneas generales. Un edificio con una característica forma de U, del que posteriores prospecciones ha podido determinar una serie de propuestas en torno a su datación —en uso entre mediados del siglo III y el IV— y función como templo de Cibeles.</p>
</div>
<div>
<figure>
<a href="https://www.flickr.com/photos/tourismeoccitanie/5576078861/" target="_blank" rel="noreferrer noopener"><img src="http://farm6.static.flickr.com/5058/5576078861_c0b5e91e4a_z.jpg" alt="Saint-Bertrand-de-Comminges. Site archéologique de Lugdunum. Les Thermes du Nord"></a>
<figcaption>Saint-Bertrand-de-Comminges. Site archéologique de Lugdunum. Les Thermes du Nord (Foto: Tourisme en Occitanie)</figcaption>
</figure>
</div>
</div>

<!-- ============================================================ -->
<p class="section-title">La <em>Ville Haute</em></p>

<div class="two-col">
<div>
<p>Como todo un ejemplo de las transformaciones producidas en la transición de la Antigüedad tardía y el inicio de la Alta Edad Media, la fortificación de la <em>ville haute</em> evidencia un desplazamiento del centro neurálgico de la vida urbana hacia una posición fortificada en altura. Pese a que las características de la colina pudieran hacer pensar en el emplazamiento de un <em>oppidum</em> prerromano los sondeos no han revelado materiales ni estructuras anteriores al siglo IV d.C. En la segunda mitad del siglo IV se detecta la construcción de un edificio precediendo la construcción de la muralla. El recinto fortificado, con 885 m de longitud, supone la última gran obra de la Antigüedad. La presencia en la muralla de elementos arquitectónicos reutilizados, columnas, capiteles, cornisas y canalones identificados en los edificios de la ciudad baja, así como el conjunto heterogéneo de elementos de terracota (ladrillos, tejas, losas) utilizados en las hiladas de ladrillo del paramento evidencian como el antiguo centro de la ciudad sirvió de cantera para la muralla hacia el primer tercio del siglo V.</p>

<p class="section-heading">epigrafía</p>
<p class="note-small">(Inscripciones reutilizadas en los muros de la catedral)</p>
<p class="epigraphy-block"><em>D(is) M(anibus) / Andossic[i] / Salisius / fil(io) pien/tissimo</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$CIL_13_00263.jpg;$CIL_13_00263_1.jpg" target="_blank" rel="noreferrer noopener"><em>CIL</em> XIII, 263 = CAG 31-2, p 394</a>). Placa funeraria encastrada en el muro occidental. (<a href="https://archive.org/details/inscriptionsanti00saca/page/174/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892 nº 91</a>).</p>

<figure>
<a href="https://www.flickr.com/photos/121849652@N02/27240462009/" target="_blank" rel="noopener noreferrer"><img src="https://live.staticflickr.com/4555/27240462009_fc63f30a61_h.jpg" alt="CIL XIII 263" style="aspect-ratio:1;object-fit:cover;width:100%"></a>
<figcaption><em>D(is) M(anibus) / Andossic[i] / Salisius / fil(io) pien/tissimo</em>. <em>CIL</em> XIII 263 = <em>CAG</em> 31-2, p. 394. Foto: Mateusz Marczyk ©</figcaption>
</figure>

<p class="epigraphy-block"><em>]ila[</em> (<em>CIL</em> XIII, 294e = <em>CAG</em> 31-2, p 394).</p>
<p class="note-small">(Inscripciones reutilizadas en el claustro)</p>
<p class="epigraphy-block"><em>D(is) M(anibus) / Paulae / matri / Primula / et Paul/us et / Paulinus</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$CIL_13_00281.jpg" target="_blank" rel="noreferrer noopener"><em>CIL</em> XIII, 281 = <em>CAG</em> 31-02, p 395</a>).</p>
<p class="epigraphy-block"><em>D(is) M(anibus) s(acrum) / Aureliae La/nae coniugi / karissim(ae) / Fressus Quintus / utrisque / pos{s}uit</em> (<em>CIL</em> XIII, 266 = <em>CAG</em> 31-2, p 395). Perdida, conocida por una transcripción de J. Scaliger.</p>
<p class="epigraphy-block"><em>Borso / Adeili f(ilio) Silex / Epannaigi uxor heres / ex testamento / |(obito) Odoxo f(ilio) Lohitton(i) f(ilio) / Andostenni f(ilio) Andosso f(ilio).</em> (<em>CIL</em> XIII, 268 = <em>CIL</em> XIII, 11011 = <em>CAG</em> 31-2, p 395). Placa funeraria mencionada por J. Scaliger en el siglo XVI (<a href="https://www.persee.fr/doc/rea_0035-2004_1912_num_14_1_1706" target="_blank" rel="noreferrer noopener">Lizop, R. «Notes épigraphiques sur Saint-Bertrand-de-Comminges». <em>Revue des Études Anciennes</em>, 1912, 14-1 pp. 77-79</a>).</p>
<p class="note-small">(Entorno de la catedral)</p>
<p class="epigraphy-block"><em>Mar(ti) / cum pat(era?) / aur(ea?) vov(it) / Albinus / Orgot(i) f(ilius)</em> (<em>ILTG</em> 62 = <em>CAG</em> 31-2, p 392 = <em>AE</em> 1957, 6).</p>
<p class="epigraphy-block"><em>] / Borconis / [v(otum)] s(olvit) f[el(iciter?)]</em> (<em>ILTG</em> 68 = <em>CAG</em> 31-2, p 393). Fragmento de altar descubierto en la plaza de la catedral durante trabajos realizados en 1933.</p>
<p class="epigraphy-block"><em>Enneb/on Sec/undion/[is</em> (<em>CAG</em> 31-2, p 394 = <em>AE</em> 1994, 1198). Fragmento de altar votivo hallado en el jardín situado tras el abside de la catedral.</p>
<p class="epigraphy-block"><em>Deo / Mar/[t]i [</em> (<em>ILTG</em> 63 = <em>CAG</em> 31-2, p 397 = <em>AE</em> 1933, 239).</p>
<p class="note-small">(<em>Les Olivétains</em>)</p>
<p class="epigraphy-block"><em>]anis[</em> (<em>CIL</em> XIII, 294b = <em>CAG</em> 31-2, p 396, <a href="https://archive.org/details/inscriptionsanti00saca/page/184/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892 nº 105</a>).</p>
<p class="epigraphy-block"><em>] L(uci) f(ilio) Galeri[a 3] / [de]curioni in co[l(onia) Copia] / [Clau]dia Augusta Lu[guduno] / [flamini(?)] August[i(?)] o(b?) m(emoriam?) / [3 Fro]ntonis neg(otiator) / [fili]o piissimo fec[it] / d(ecreto) d(ecurionum) / Conve[n(arum)]</em> (<em>CIL</em> XIII, 256 = <em>CIL</em> XIII, 257 = <em>ILTG</em> 87 = <em>CAG</em> 31-2, p 396 = <em>AE</em> 1945, 15).</p>
<p class="epigraphy-block"><em>] / Iul[3] / [3] cornic[en(?) 3] / [3] tibic[en 3] / [3]sa[</em> (<em>CAG</em> 31-2, p 396). <em>]ano Vol[usiano 3] / [3]o Piis Feli[cibus 3] Aug(ustis) m(ilia) [p(assuum)</em>. (<em>CAG</em> 31-2, p 396). Fragmento de miliario.</p>
<p class="note-small">(<em>Ville Haute</em>)</p>
<p class="epigraphy-block"><em>Deo Mar/ti Lucid[us(?)</em> (<em>CIL</em> XIII, 242 = <em>CAG</em> 31-2, p 393). Fragmento superior de altar votivo hallado en 1886 junto a la puerta Lhérisson (<a href="https://archive.org/details/inscriptionsanti00saca/page/168/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892 nº 84</a>).</p>
<p class="epigraphy-block"><em>c...[---</em> (<em>CIL</em> XIII, 293 = <em>CAG</em> 31-2, p 393). Fragmento de altar descubierto cerca de la anterior (<a href="https://archive.org/details/inscriptionsanti00saca/page/186/mode/2up">Sacaze 1892 nº 112</a>).</p>
<p class="epigraphy-block"><em>I(ovi) O(ptimo) M(aximo) / Iulia In/genua / v(otum) s(olvit) l(ibens) m(erito)</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$CIL_13_00234.jpg" target="_blank" rel="noreferrer noopener"><em>CIL</em> XIII, 234 = <em>CAG</em> 31-2, p 393</a>). Altar hallado en el muro de un edificio de la calle <em>Porte Majou</em> en 1884 (<a href="https://archive.org/details/inscriptionsanti00saca/page/168/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892 nº 83</a>).</p>
<p class="epigraphy-block"><em>M(arti?) d(eo?) / Bonxori/us Fausti/ni filius / v(otum) s(olvit) l(ibens) m(erito)</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$CIL_13_00241.jpg" target="_blank" rel="noreferrer noopener"><em>CIL</em> XIII, 241 = <em>CAG</em> 31-2, p 397</a>). Placa empotrada en un muro del presbiterio (<a href="https://archive.org/details/inscriptionsanti00saca/page/170/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892 nº 85</a>).</p>
<p class="epigraphy-block"><em>] / I[3] / DO[3] / v(otum) s(olvit) [l(ibens) m(erito)]</em> (<em>CIL</em> XIII, 250 = <em>CAG</em> 31-2, p 393). Fragmento descubierto en 1883 al pie de la muralla junto a la <em>Porte Majou</em> (<a href="https://archive.org/details/inscriptionsanti00saca/page/172/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892 nº 89</a>).</p>
<p class="epigraphy-block"><em>|(Obito) Andosso Primuli f(ilio) / Sabina Frontonis f(ilia) / coniugi ex testamento</em>. (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$CIL_13_00264.jpg" target="_blank" rel="noreferrer noopener"><em>CIL</em> XIII, 264 = <em>CAG</em> 31-2, p 397</a>). Placa funeraria con frontón triangular y relieves empotrada en el paramento interior de la <em>Porte Majou</em>. (<a href="https://archive.org/details/inscriptionsanti00saca/page/172/mode/2up" target="_blank" rel="noreferrer noopener">Sacaze 1892, nº 90</a>).</p>
<p class="epigraphy-block"><em>]ostiar / domin / rculis / deus / MV / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CIL</em> XIII, 11013 = <em>CAG</em> 31-2, p 393). Fragmento de altar encontrado en la casa de Jean-André Rixens, cerca de la <em>Porte Cabirole</em>.</p>
<p class="epigraphy-block"><em>Ti(berio) Claudio 3] / imp(eratori) XXVI co(n)s(uli) / V p(atri) p(atriae) / civitas Conven(arum)</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$CIL_13_00254.jpg;$CIL_13_00254_1.jpg" target="_blank" rel="noreferrer noopener"><em>CIL</em> XIII, 254 = <em>CAG</em> 31-2, p 396 = <em>AE</em> 1999, +1039</a>). Fragmento de dedicatoria imperial ubicado sobre el arco exterior de la <em>Porte Cabirole</em> por orden del obispo de Comminges a mediados del siglo XVII. Datado en el año 52 d.C.</p>
<p class="epigraphy-block"><em>]P[</em> (<em>CIL</em> XIII, 295a = <em>CAG</em> 31-2, p 400). Posible fragmento de miliario descubierto en 1883 cerca de <em>Roc de Matacan</em>. <em>S[</em> (<em>CIL</em> XIII, 294d = <em>CAG</em> 31-2, p 400). Hallado en el mismo lugar. <em>]VL M / [3]LIV / [</em> (<em>CIL</em> XIII, 274 = <em>CAG</em> 31-2, p 400). <em>]EP[ // ]XO[</em> (<em>CIL</em> XIII, 295c = <em>CAG</em> 31-2, p 400).</p>
<p class="note-small">(<em>Ville Haute</em>, sin precisión sobre su hallazgo)</p>
<p class="epigraphy-block"><em>[Ilu]mberri(?) / deo /</em> [ (<em>CIL</em> XIII, 11011a = <em>CAG</em> 31-2, p 397 = <em>AE</em> 1912, 276 = <em>AE</em> 1994, 1195 = <em>AE</em> 2006, 808). Sobre su lectura: <a href="https://www.persee.fr/doc/aquit_0758-9670_2006_num_22_1_1150" target="_blank" rel="noreferrer noopener">Schenck-David, J.-L. «À propos d'un nouvel autel votif découvert à Saint-Pé-d'Ardet en Haute-Garonne». <em>Aquitania</em> 2006, 22 pp. 171-203</a>.</p>
<div class="two-col-equal">
  <figure>
    <a href="https://www.persee.fr/doc/aquit_0758-9670_2006_num_22_1_1150" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/aquit_0758-9670_2006_num_22_1_T6_0175_0000_1.png" alt="CIL XIII, 11011a"></a>
    <figcaption><em>CIL</em> XIII, 11011a</figcaption>
  </figure>
  <figure>
    <a href="https://www.persee.fr/doc/aquit_0758-9670_2006_num_22_1_1150" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/aquit_0758-9670_2006_num_22_1_T6_0175_0000_2.png" alt="CIL XIII, 11011a detalle"></a>
  </figure>
</div>
<p class="note-small">(Inscripciones descubiertas en Saint-Bertrand-de-Comminges sin precisión sobre el lugar de su hallazgo)</p>
<p class="epigraphy-block"><em>Dis [Man(ibus)] / [3]ninus / [3]M[</em> (<em>CIL</em> XIII, 285 = <em>CAG</em> 31-2, p 408). <em>]AG[3] / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CIL</em> XIII, 251 = <em>CAG</em> 31-2, p 408). <em>Iunoni / V[</em> (<em>CIL</em> XIII, 232 = <em>CAG</em> 31-2, p 408).</p>
<p class="epigraphy-block"><em>Deo / Iovi / Clam/osa ci/vis Tr/evera / v(otum) s(olvit) l(ibens) m(erito)</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$CIL_13_00233.jpg" target="_blank" rel="noreferrer noopener"><em>CIL</em> XIII, 233 = <em>CAG</em> 31-2, p 408</a>). La parte superior se conoce por copias del siglo XVI.</p>
<p class="epigraphy-block"><em>Deo(!) / Tutelae / T(itus) Aurelius / pro / [salute(?)</em> (<em>CIL</em> XIII, 246 = <em>CAG</em> 31-2, p 408). <em>] v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CIL</em> XIII, 253 = CAG 31-2, p 408 = <em>AE</em> 1994, 1209). <em>I(ovi) O(ptimo) [M(aximo)] / Gem[</em> (<em>CIL</em> XIII, 238 = <em>CAG</em> 31-2, p 408 = <em>AE</em> 1994, 1187). <em>Gal[3] / Ca[3] / Iu[3] / Iu[</em> (<em>CIL</em> XIII, 272 = <em>CAG</em> 31-2, p 409).</p>
<p class="epigraphy-block"><em>I(ovi) O(ptimo) M(aximo) / L(ucius) P(ompeius?) / Masclinus / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CIL</em> XIII, 237 = <em>CAG</em> 31-2, p 409 = <em>CAG</em> 31-2, p 440). <em>Merc(urio) / Masculu/s / Ingenu/ae l(ibertus) / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CIL</em> XIII, 244 = <em>CAG</em> 31-2, p 409).</p>
<p class="epigraphy-block"><em>Statio splend[idissimi] / vectigal(is) XL(quadragesimae) G[all(iarum) Lugd(unensis)] / Conv(enarum) sub c[ura 3]</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$CIL_13_00255.jpg" target="_blank" rel="noreferrer noopener"><em>CIL</em> XIII, 255 (4, p 3) = <em>CAG</em> 31-2, p 409 = <em>AE</em> 1999, +1039 = <em>AE</em> 2009, 854</a>). Sobre los problemas de esta inscripción ver: <a href="https://www.persee.fr/doc/aquit_0758-9670_2003_num_19_1_1353">Schaad, D. & Schenck-David, J-L. «Le camp militaire romain de Saint-Bertrand-de-Comminges». <em>Aquitania</em> 2003, 19, pp. 150-152</a>. ❦ <a href="https://www.persee.fr/doc/aquit_0758-9670_2009_num_25_1_1182">France, J. «La station du quarantième des Gaules à Lugdunum des Convènes». <em>Aquitania</em> 2009, 25, pp. 95-106</a>.</p>

<figure>
<a href="https://www.persee.fr/doc/aquit_0758-9670_2009_num_25_1_1182" target="_blank" rel="noopener noreferrer"><img src="https://www.persee.fr/renderIllustration/aquit_0758-9670_2009_num_25_1_T5_0096_0000_3.png" alt="CIL XIII, 255"></a>
<figcaption><em>CIL</em> XIII, 255 (Musée Saint-Raymond, Musée des Antiques de Toulouse.)</figcaption>
</figure>

<p class="epigraphy-block"><em>Tib(erius) Publ(ius) Sabinus vi&lt;c=K&gt;anis vici Florentini mensas cum basibus s(ua) p(ecunia) f(ecit)</em> (<em>CIL</em> XIII, 258 = <em>CAG</em> 31-2, p 409). La inscripción habría estado durante un tiempo apoyada en el muro oriental de la catedral. El <em>uicus Florentinus</em> se referiría a una aglomeración secundaria o a un barrio de la ciudad.</p>
<p class="epigraphy-block"><em>I(ovi) O(ptimo) M(aximo) / [6] / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CIL</em> XIII, 239 = <em>CAG</em> 31-2, p 410). <em>Sil[vano?] / [6]</em> (<em>CIL</em> XIII, 245 = <em>CAG</em> 31-2, p 410). <em>]o fil(io) Iusta / [</em> (<em>CIL</em> XIII, 279 = <em>CAG</em> 31-2, p 410).</p>
<p class="epigraphy-block"><em>[3 F]ronto(?) Lian/nassis sibi et / Gratae Pompeiae l(ibertae) / coniugi / |(obitae) Andrecconi matri / |(obito) Frontacco f(ilio) Proculae f(iliae) / h(oc) m(onumentum) h(eredem) n(on) s(equetur) n(ec) h(eredem) h(eredis)</em> (<em>CIL</em> XIII, 280 (4, p 3) = <em>CAG</em> 31-2, p 410).</p>
</div>
<div>
<figure>
<a href="https://www.flickr.com/photos/tourismeoccitanie/5576664166/" target="_blank" rel="noreferrer noopener"><img src="https://live.staticflickr.com/5020/5576664166_4227636eef_o.jpg" alt="Saint-Bertrand-de-Comminges"></a>
<figcaption>Saint-Bertrand-de-Comminges (Foto: Tourisme en Occitanie)</figcaption>
</figure>
</div>
</div>

<!-- ============================================================ -->
<h4 class="place-heading">Valcabrère</h4>

<div class="two-col">
<div>
<p>El espacio ocupado por la <em>urbs</em> sobrepasaba los actuales límites de Saint-Bertrand-de-Comminges ocupando también el territorio de Valcabrère de donde procede un importante conjunto epigráfico en buena medida procedente de localizaciones imprecisas o desconocidas.</p>

<p class="epigraphy-block"><em>Se[…]/iu […]/ci[…]/u[…</em> (<em>CAG</em> 31-2, p 441). Placa de mármol hallada en un jardín de la <em>ferme Montsérié</em>.</p>
<p class="epigraphy-block"><em>] Andos / Barosis f(ilius) / v(otum) s(olvit)</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$CIL_13_00247.jpg" target="_blank" rel="noreferrer noopener"><em>CIL</em> XIII, 247 = <em>CAG</em> 31-2, p 456</a>). Fragmento de altar votivo descubierto en 1888 durante la excavación de los cimientos de la escuela pública.</p>
<p class="epigraphy-block"><em>[Imp(eratori)] Caes(ari) P(ublio) L[i]c[i]nio / [Val]eriano Au[g(usto)] / [et I]mp(eratori) Caes(ari) / [P(ublio) L]icinio / [Ga]llieno Valeria/no Aug(usto) m(ilia) p(assuum) II</em> (<em>CIL</em> XVII-2, 307 = <em>CIL</em> XIII, 8890 = <em>CAG</em> 31-2, p 457). Fragmento de miliario.</p>
<p class="epigraphy-block"><em>Sembecconi / [3]sa Herossis f(ilia) / Prima lib(erta) / ex test(amento)</em> (<em>CIL</em> XIII, 287 = <em>CAG</em> 31-2, p 457). Urna descubierta en 1719. Perdida.</p>
<p class="epigraphy-block"><em>]hili Dunsiosi/[nn]is f(iliae) Harsori/o fratri</em> (<em>CIL</em> XIII, 270 = <em>CAG</em> 31-2, p 457). Fragmento de placa funeraria descubierta «dans un jardin».</p>
<p class="epigraphy-block"><em>Ercu(li) / deo A/ndos / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CIL</em> XIII, 226 (4, p 3) = <em>ILTG</em> 56 = <em>CAG</em> 31-2, p 457 = <em>AE</em> 1956, +174). Descubierta en el siglo XIX entre Loures-Barousse y Valcabrère, perdida.</p>
<p class="epigraphy-block"><em>Hercul(i) / Invicto / Bihotus ex vo/to posuit</em> (<em>CIL</em> XIII, 230 = <em>CAG</em> 31-2, p 457). Recuperado de «les anciens remparts» y trasladado al museo de Toulouse en 1828. Rodriguez, L. & Sablayrolles, R., <em>Les autels votifs du musée Saint-Raymond, musée des Antiques de Toulouse, catalogue raisonné</em>, 2008, p. 117.</p>
<p class="epigraphy-block"><em>]nus Ru[3] / [3]pi et [</em> (<em>ILTG</em> 54 = <em>CAG</em> 31-2, p 457).</p>
<p class="epigraphy-block"><em>Herculi / Poblicius / Rufus /</em> [ (<em>CIL</em> XIII, 228 = <em>CAG</em> 31-2, p 457). Fragmento extraído del muro de una casa y trasladado al Museo Arqueológico Departamental.</p>
<p class="epigraphy-block"><em>]//ninus / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CAG</em> 31-2, p 458). Extraído en 1965 de la maison Medan.</p>
<p class="epigraphy-block"><em>Amando / Optati serv[o] / Aucta mater</em> (<em>CIL</em> XIII, 262 = <em>CAG</em> 31-2, p 458 = <em>AE</em> 2009, 829). Placa funeraria reutilizada en una casa de Valcabrère.</p>
<p class="epigraphy-block"><em>Canpan[us nat(ione?)] / H(ispanus) Iul(ia) Nov(a) [Karth(agine) et] / Silvanus a [latro]/nibus hi[c inte]/rfecti V [3] Iun(ias) Imp(eratore) [L(ucio) Sept(imio)] / Sev(ero) co(n)s(ule) I(?)</em> (<em>CIL</em> XIII, 259 = <em>CAG</em> 31-2, p 458 = <em>AE</em> 2019, + 614). Reutilizado como jamba de puerta, actualmente en el Museo Arqueológico Departamental.</p>
<p class="epigraphy-block"><em>u]xor / [3 Cres]cens /</em> [ (<em>CIL</em> XIII, 269 = <em>CAG</em> 31-2, p 458).</p>
<p class="epigraphy-block"><em>Herc[uli(?)] / Festu[s] / v(otum) s(olvit) l(ibens) m(erito)</em> (<em>CIL</em> XIII, 227 = <em>CAG</em> 31-2, p 458). Inscripción perdida.</p>
<p class="epigraphy-block"><em>Iuliae / Ane / Sorini</em> (<a href="https://db.edcs.eu/epigr/bilder.php?s_language=es&bild=$CIL_13_00276.jpg" target="_blank" rel="noreferrer noopener"><em>CIL</em> XIII, 276 = <em>CAG</em> 31-2, p 459</a>). Actualmente en Toulouse, musée Saint-Raymond.</p>
<p class="epigraphy-block"><em>C(aius) Fabius C(ai) f(ilius) / [M]ontanus / [Ala]rdossi / [v(otum) s(olvit)] l(ibens) m(erito)</em> (<em>CIL</em> XIII 48 = <em>CAG</em> 31/2, p. 152 y 458). Rodriguez, L. & Sablayrolles, R., <em>Les autels votifs du musée Saint-Raymond</em>, 2008, p. 118.</p>

<div class="two-col-equal">
  <figure>
    <a href="https://pop.culture.gouv.fr/notice/joconde/05630030097" target="_blank" rel="noopener noreferrer"><img src="https://pop-perf-assets.s3.gra.io.cloud.ovh.net/joconde/05630030097/0b68dcdfe1bb0a644df7.jpg" alt="CIL XIII 48"></a>
  </figure>
  <figure>
    <a href="https://pop.culture.gouv.fr/notice/joconde/05630030097" target="_blank" rel="noopener noreferrer"><img src="https://pop-perf-assets.s3.gra.io.cloud.ovh.net/joconde/05630030097/0b68dcdfe1cb1cbbe661.jpg" alt="CIL XIII 48 detalle"></a>
  </figure>
</div>
<p class="note-small">(<em>CIL</em> XIII 48 = <em>CAG</em> 31/2, p. 152 y 458) © Jean-François Peiré. Musée Saint-Raymond, Musée des Antiques de Toulouse.</p>

<p class="subsection-title"><em>Couvent des Cordeliers</em></p>
<p>Destruido hacia 1822 el área del antiguo convento es conocida por haber deparado abundante material antiguo. Al margen de <em>domus</em> suburbanas situadas junto a la vía existe constancia de algunas inscripciones romanas.</p>
<p class="section-heading">epigrafía</p>
<p class="epigraphy-block"><em>I(ovi) O(ptimo) M(aximo) / L(ucius) P(ompeius?) / Masclinus / v(otum) s(olvit) l(ibens) m(erito)</em>. (<em>CIL</em> XIII, 237 = <em>CAG</em> 31-2, p. 440). Altar depositado en el convento en 1638.</p>
<p class="epigraphy-block"><em>Alfia / Lohisi f(ilia) / Bulluca</em>. (<em>CIL</em> XIII, 261 = <em>CAG</em> 31-2, p. 440). Estela de origen inseguro conservada a mediados del siglo XVIII en el convento.</p>
<p class="epigraphy-block"><em>...]us/ .arbo/nis f(ilius) / u(otum) s(oluit) l(ibens) [m(erito)]</em>. (<em>CIL</em> XIII, 248 = <em>CAG</em> 31-2, p. 440). Desaparecido fragmento de altar votivo descubierto en las ruinas del castillo de los condes de Aure.</p>
</div>
<div>
<figure>
<a href="https://pop.culture.gouv.fr/notice/joconde/05630030096" target="_blank" rel="noopener noreferrer"><img src="https://pop-perf-assets.s3.gra.io.cloud.ovh.net/joconde/05630030096/0b68d196eb27593f68c8.jpg" alt="Hercul(i) Invicto Bihotus ex voto posuit, CIL XIII, 230"></a>
<figcaption><em>Hercul(i) / Invicto / Bihotus ex vo/to posuit</em> (<em>CIL</em> XIII, 230 = <em>CAG</em> 31-2, p 457). © Jean-François Peiré. Musée Saint-Raymond, Musée des Antiques de Toulouse.</figcaption>
</figure>
</div>
</div>

<!-- ============================================================ -->
<p class="section-title">Saint-Just de Valcabrère</p>

<div class="two-col">
<div>
<p class="section-heading">epigrafía</p>
<p class="note-small">(Reutilizaciones identificadas en los muros de la iglesia)</p>
<p class="epigraphy-block"><em>P(ublio) Licinio Mon/tani l(iberto) Rufioni / Hautensoni / Halscotarris / filiae</em> (<em>CIL</em> XIII 277 = <em>CAG</em> 31/2, p. 446).</p>
<p class="epigraphy-block"><em>Val(eria) Severa egit annos XXX recessit III Non(as) Iul(ias) Rufino et Eusebio conss(ulibus) / Pac() Patroclus pr{a}esbyter sibi in pace</em> (<em>CIL</em> XIII 299 = <em>CAG</em> 31/2, p. 448).</p>
<p class="epigraphy-block"><em>I(ovi) O(ptimo) M(aximo) / Nigrinus Ap/ti f(ilius) et Optuma(!) / Galli f(ilia) / v(otum) s(olverunt) l(ibentes) m(erito)</em> (<em>CIL</em> XIII 235 = <em>CAG</em> 31/2, p. 449). Disparu.</p>
<p class="epigraphy-block"><em>Depositio / P() Severini XV K(alendas) M(a)rtias / Valeri [consulatu(?)</em> (<em>CIL</em> XIII 300 = <em>CAG</em> 31/2, p. 455).</p>
<p class="epigraphy-block"><em>]ria / L(ucius) Valeri[us] / Saturn[inus</em> (<em>CIL</em> XIII 290 = <em>CAG</em> 31/2, p. 455).</p>
<p class="note-small">(Cementerio y entorno)</p>
<p class="epigraphy-block"><em>V(ivus) Silvanus Iacessis f(ilius) sibi et / |(obitae) Priscae Harontarris f(iliae) uxori / v(ivo) Proculo f(ilio) Propinquo [f(ilio)]</em>. (<em>CIL</em> XIII, 289 = <em>CAG</em> 31-2, p. 456).</p>
<p class="epigraphy-block"><em>V(ivus) C(aius) Iulius Erotis / l(ibertus) Atticus / |(obita) Iulia Erotis libert(a) / Salviola / |(obitus) C(aius) Iulius Attici f(ilius) Victor / an(norum) XVIII</em>. (<em>CIL</em> XIII, 275 = <em>CAG</em> 31-2, p. 456).</p>

<figure>
<a href="http://www.cheminscompostelle-patrimoinemondial.fr/fr/composantes/basilique-saint-just-79" target="_blank" rel="noreferrer noopener"><img src="http://www.cheminscompostelle-patrimoinemondial.fr/backoffice/uploads/DSC-5956.jpg" alt="CIL XIII, 275"></a>
<figcaption>(<em>CIL</em> XIII, 275) Photo : Jean-Jacques Gelbart (cheminscompostelle-patrimoinemondial.fr)</figcaption>
</figure>
</div>
<div>
<figure>
<a href="https://www.flickr.com/photos/tourismeoccitanie/5576080265/" target="_blank" rel="noreferrer noopener"><img src="https://live.staticflickr.com/5027/5576080265_a29a56d022_o.jpg" alt="Basilique St-Just de Valcabrère"></a>
<figcaption>Basilique St-Just de Valcabrère (Foto: Tourisme en Occitanie)</figcaption>
</figure>
</div>
</div>
