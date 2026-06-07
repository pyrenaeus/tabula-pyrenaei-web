const CECAS_BASE = [
  { nombre: 'Kaiantolos', color: 'rgba(2, 47, 46, 0.7)', info: null },
  { nombre: 'Rigantikos', color: 'rgba(11, 79, 74, 0.7)', info: null },
  { nombre: 'Bitoukos/Bitouios', color: 'rgba(7, 95, 90, 0.7)', info: null },
  { nombre: 'Bituiotuos', color: 'rgba(24, 120, 111, 0.7)', info: null },
  { nombre: 'Amytos', color: 'rgba(42, 150, 137, 0.7)', info: null },
  { nombre: 'Bronzes des chefs indéterminés', color: 'rgba(54, 187, 167, 0.7)', info: null },
  { nombre: 'Longostalètes / biuŕbi', color: 'rgba(230, 24, 118, 0.7)', info: null },
  { nombre: 'Neronken', color: 'rgba(255, 112, 67, 0.7)', info: null },
  { nombre: 'Birikantin', color: 'rgba(230, 74, 25, 0.7)', info: null },
  { nombre: 'Ekana', color: 'rgba(239, 108, 0, 0.7)', info: null },
  { nombre: 'Lero', color: 'rgba(255, 193, 7, 0.7)', info: null },
  { nombre: 'Selonken', color: 'rgba(191, 54, 12, 0.7)', info: null },
  { nombre: 'Imit. Neronken indéterminé', color: 'rgba(255, 171, 145, 0.7)', info: null },
  { nombre: 'NMY', color: 'rgba(192, 202, 51, 0.7)', info: null },
  { nombre: 'Kurukuru-Atin', color: 'rgba(165, 42, 42, 0.7)', info: null },
  { nombre: 'Ruscino', color: 'rgba(240, 98, 146, 0.7)', info: null },
  { nombre: 'Imit. Emporion', color: 'rgba(121, 113, 107, 0.7)', info: null },
  { nombre: 'ΒΗΤΑΡΡΑΤΙC / Beterra', color: 'rgba(121, 85, 72, 0.7)', info: null },
  // Nuevos tipos añadidos (colores coherentes con la paleta existente)
  { nombre: 'Ibériques', color: 'rgba(231, 24, 11, 0.7)', info: null },               // Marrón tierra (índice 18)
  { nombre: 'Ibéro-puniques', color: 'rgba(136, 14, 79, 0.7)', info: null },         // Rojo terracota suave (índice 19)
  { nombre: 'Gauloises de la Gallia Comata', color: 'rgba(43, 127, 255, 0.7)', info: null }, // Azul grisáceo (índice 20)
  { nombre: 'Imitations de Rhodè', color: 'rgba(96, 125, 139, 0.7)', info: null }, // Amarillo oro (índice 21)
  { nombre: 'Drachmes à la croix', color: 'rgba(22, 36, 86, 0.7)', info: null },      // Rojo oscuro intenso (índice 22)
  { nombre: 'Oboles à la croix', color: 'rgba(25, 60, 184, 0.7)', info: null }       // Naranja rojizo (índice 23)
];

// ============== SITIOS con 235 entradas únicas (sin regiones genéricas) ==============
const SITIOS = [
{
  "nombre": "Abeilhan",
  "lat": 43.65,
  "lng": 3.02,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 1],
  "totalInicial": 14,
  "infoEspecifica": {
    "18": {
      "textoIntro": "<em>—kese</em> (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-183 (Le type de Goutrens, Rutènes?) 4 ex.<br>—Type DCR-277 (Drachmes au sanglier): 2 ex.<br>—Type DCR-278 (Drachme au cheval): 1 ex.<br>—Type DCR-279 (Drachme au cheval): 3 ex.<br>—Type DCR-273, VIIRIA/BIRACOS: 1 ex.<br>—Type DCR-275, COP: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-74 (bas-languedocienne?): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Agde Αγαθή πόλις",
  "lat": 43.3108,
  "lng": 3.4758,
  "valores": [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 1, 2, 0, 0, 0],
  "totalInicial": 11,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "1": {
      "textoIntro": "—Type IBL-2403. M/Br. D/Tête virile à droite, cheveux en rangées de boucles ; derrière, massue. R/Lion courant à droite ; dessous, entre deux traits, légende ΡΙΓΑΝΤΙΚΟΥ ou ΡΙΓΑΝΤΙΚΟC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "—Type IBL-2387. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique NERONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "16": {
      "textoIntro": "—Type IEM-X. Imitations d’Ampurias de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em> (As de bronze), 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "19": {
      "textoIntro": "—Type EBU-Xbr. Petit bronze d’Ebusus de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type PIC-4316. Bronze CONTOVTOS: 1 ex.<br>—PIC-4349. Bronze ATECTORI: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
  "nombre": "Age",
  "lat": 42.417,
  "lng": 1.949,
  "valores": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "2": {
      "textoIntro": "Unidad a nombre de <em>Bitoykos Basile</em>, sur de la Galia. Ref.: <em>CNH</em> 436, núm. 3. Proc.: ¿Zona de Age?",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Fernández, O & Campo, M.</span> Aproximación a la circulación monetaria en la Cerdanya (siglo III a.C.-mediados siglo I d.C.).",
      "enlace": "https://www.academia.edu/3560849/APROXIMACI%C3%93N_A_LA_CIRCULACI%C3%93N_MONETARIA_EN_LA_CERDANYA_S_III_A_C_MEDIADOS_S_I_D_C_7"
    },
    "18": {
      "textoIntro": "En el seu cementiri hom ha localitzat dos asos ibèrics de seques del nord-est català, amb una cronologia de finals de segle II o primera meitat de segle I ane.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Morera, J</span>. Territori i poblament de Cerdanya a l'Antiguitat. La iberització i Romanització de la Vall Cerdana.",
      "enlace": "https://ddd.uab.cat/pub/tesis/2017/hdl_10803_402257/jmc1de4.pdf"
    }
  }
  },
  {
    "nombre": "Aigremont",
    "lat": 43.965,
    "lng": 4.123,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
{
  "nombre": "Alet-les-Bains",
  "lat": 42.996,
  "lng": 2.256,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "20": {
      "textoIntro": "—Monnaie gauloise d’argent indéterminée ou non identifiée: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Alignan-du-Vent",
  "lat": 43.52,
  "lng": 3.35,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "8": {
      "textoIntro": "—Type IBL-2499. M/Br. D/Tête féminine à droite, chignon ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique BIRIKANTIN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "22": {
      "textoIntro": "—Type DCR-279 (Drachme au cheval): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": 'Albias',
    "lat": 44.087,
    "lng": 1.444,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    "totalInicial": 1,
    "infoEspecifica": {
      "16": {
      "textoIntro": "—Type IEM-10. M/Ar. D/Tête de Cérès à droite, entourée de trois dauphins. R/Pégase à gauche, surmontée d’une victoire à gauche: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
  "nombre": "AMBRUSSUM",
  "lat": 43.719,
  "lng": 4.149,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 17, 0, 5, 0],
  "totalInicial": 29,
  "infoEspecifica": {
    "6": {
      "textoIntro": "•<em>Bronzes récents</em><br>—Type IBL-154, moyen bronze M/Br. D/Buste de femme diadémée à droite, dans un cercle de grènetis. R/Corne d’abondance dans un cercle de grènetis; de part et d’autre, légende ΛΟ/Γ, dessous, peut-être Η: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "",
      "textoPaper": "",
      "enlace": ""
    },
    "19": {
      "textoIntro": "",
      "textoPaper": "",
      "enlace": ""
    },
    "20": {
      "textoIntro": "",
      "textoPaper": "",
      "enlace": ""
    },
    "22": {
      "textoIntro": "",
      "textoPaper": "",
      "enlace": ""
    }
  }
},
{
  "nombre": "Ampurias Ἐμποριτῶν",
  "lat": 42.132,
  "lng": 3.122,
  "valores": [1, 0, 0, 2, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 6, 0, 6, 120, 2, 0, 0, 2, 0],
  "totalInicial": 148,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "3": {
      "textoIntro": "—Type IBL-2408/2412 (L’une ou l’autre des variantes a légende ΒΙΤΟΥΙΟC/ΒΑCΛΕΥC): 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449 (Grands bronzes de <em>neronken</em>). M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique NERONKEN: 1 ex.<br>—Type IBL-2470. M/Br. D/Tête féminine voilée à droite ; devant, signe ibérique (EBA ou EI). R/taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique sur deux lignes séparées par un trait, NERONKEN/BIU: 1 ex.<br>—Type IBL-2449/2488. Grands bronzes des <em>neronken</em> de variante indéterminée: 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "15": {
      "textoIntro": "Petits bronzes<br>—Type IBL-187. Émission monétaire susceptible d’avoir été frappée à <em>Ruscino</em>. M/Br. D/Dauphin à droite dans une couronne de palme; en dessous, H couché. R/Dans un cercle de grènetis, deux cercles unis par un trait ; en dessous, échelle à trois barreaux: 4 ex.<br><br>Hémioboles<br>—Type IBL-189. M/Ar. D/Hippocampe tourné vers la droite ; à sa droite, lettre ibérique O. R/Globule central dont partent une ou deux tiges; de part et d’autre, lettres ibériques KU et A.: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 6 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—Ejemplares de <em>untikesken</em>, <em>kese</em>, <em>iltirta</em>, <em>baitolo</em>, <em>ilturo</em>, <em>lauro</em>, <em>eustibaikula</em>, <em>bolskan</em>, <em>arse</em>, <em>iaka</em> y <em>bilbilis</em>",
      "textoPaper": [
        "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
        "<span style=\"font-variant: small-caps;\">Sinner, A.G.</span> <em>La difusión de las emisiones ibéricas layetanas</em>.",
        "<span style=\"font-variant: small-caps;\">Ripollés, P.P.</span> <em>La circulación monetaria en la Tarraconense Mediterránea</em>.",
        "<span style=\"font-variant: small-caps;\">Martín Valls, R.</span> <em>La circulación monetaria ibérica</em>."
      ],
      "enlace": [
        "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1",
        "https://www.academia.edu/5666620/La_difusi%C3%B3n_de_las_emisiones_ib%C3%A9ricas_layetanas",
        "https://www.academia.edu/11906503/La_circulaci%C3%B3n_monetaria_en_la_Tarraconense_Mediterr%C3%A1nea",
        "https://uvadoc.uva.es/handle/10324/56070"
      ]
    },
    "22": {
      "textoIntro": "—Type DCR-73A (à tête de style languedocien): 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Antugnac",
  "lat": 42.954,
  "lng": 2.225,
  "valores": [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "5": {
      "textoIntro": "—Type IBL-2403/2431: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Arboras (Les Intillières)",
  "lat": 43.708,
  "lng": 3.475,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Aumes",
  "lat": 43.474,
  "lng": 3.465,
  "valores": [7, 2, 1, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 6, 0, 38, 3],
  "totalInicial": 63,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés; derrière, massue. R/Lion courant à droite; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "1": {
      "textoIntro": "—Type IBL-2403. M/Br. D/Tête virile à droite, cheveux en rangées de boucles; derrière, massue. R/Lion courant à droite; dessous, entre deux traits, légende ΡΙΓΑΝΤΙΚΟΥ ou ΡΙΓΑΝΤΙΚΟC: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "2": {
      "textoIntro": "—Type IBL-2408. M/Br. D/Tête virile à droite, cheveux bouclés; derrière, massue. R/Lion courant à droite ; dessous, sur dos lignes, légende ΒΙΤΟΥΚΟC/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449 (<em>Grands bronzes</em>). M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 2 ex.<br>—Type IBL-2449/2488 (variante indéterminée): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "8": {
      "textoIntro": "—Type IBL-2499. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique BIRIKANTIN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—Type IBE-Xar (Monnaie ibérique en argent indéterminée): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type BIT-4021 (Potin au sanglier): 1 ex.<br>—Type EDU-5275 (Potin à l’aigle): 1 ex.<br>—Type TUR-5674: 3 ex.<br>—Type GAU-9248 (Bronze GERMANVS INDVTILII): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-80: 1 ex.<br>—Type DCR-72/93, Variante indéterminée de style «cubiste»: 2 ex.<br>—Type DCR-73A (à tête de style languedocien): 4 ex.<br>—Type DCR-75: 1 ex.<br>—Type DCR-80: 3 ex.<br>—Type DCR-72/93 (Variante indéterminée de style «cubiste»): 5 ex.<br>—Type DCR-182 (émission du Languedoc central, groupe «aux feuilles aquatiques», Rutènes?): 1 ex.<br>—Type DCR-183 (type de Goutrens, Rutènes ?): 3 ex.<br>—Type DCR-277 (Drachmes au sanglier): 2 ex.<br>—Type DCR-267, drachme à la main en croix, type 2: 1 ex.<br>—Type DCR-273, VIIRIA/BIRACOS: 1 ex.<br>—Type DCR-274, VIIRIA/COP: 2 ex.<br>—Type DCR-274, VIIRIA/COP: 3 ex.<br>—Type DCR-282, V/NB: 1 ex.<br>—Type DCR-249 (Série «à l’annelet» et tête negroide): 1 ex.<br>—Type DCR-X. Monnaies à la croix de type indéterminé: 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-74 (bas-languedocienne?): 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Arles",
  "lat": 43.677,
  "lng": 4.631,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 0, 0, 0],
  "totalInicial": 7,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-2387. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "Ibériques: 1 ex.",
      "textoPaper": "",
      "enlace": ""
    },
    "20": {
      "textoIntro": "Gauloises de la Gallia Comata: 5 ex.",
      "textoPaper": "",
      "enlace": ""
    }
  }
},
  {
    "nombre": "Auterive",
    "lat": 43.352,
    "lng": 1.478,
    "valores": [0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0],
    "totalInicial": 7
  },
{
  "nombre": "Avène",
  "lat": 43.757,
  "lng": 3.099,
  "valores": [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-2363. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ ; immédiatement à gauche du trépied, formule ibérique BIURBI: 1 ex.<br>—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Baillargues",
    "lat": 43.661,
    "lng": 4.013,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
{
    "nombre": "Balaruc-le-Vieux",
    "lat": 43.460,
    "lng": 3.684,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1,
    "infoEspecifica": {
      "20": {
        "textoIntro": "—Type GAU-9248 (Bronze GERMANVS INDVTILII): 1 ex.",
        "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
        "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
      }
    }
  },
{
  "nombre": "Banyoles",
  "lat": 42.117,
  "lng": 2.768,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>kelse</em> (Unidad de bronce): 1 ex.<br>—<em>untikesken</em> (Unidad de bronce): 1 ex.<br>—<em>kese</em> (Unidad de bronce): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Ripollés, P.P.</span> <em>La circulación monetaria en la Tarraconense Mediterránea</em>.",
      "enlace": "https://www.academia.edu/11906503/La_circulaci%C3%B3n_monetaria_en_la_Tarraconense_Mediterr%C3%A1nea"
    }
  }
},
  {
    "nombre": 'Bàscara',
    "lat": 42.158,
    "lng": 2.91,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    "totalInicial": 1,
    "infoEspecifica": {
      18: {
      "textoIntro": "—Exemplaire de <em>kese</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Baziège",
  "lat": 43.45,
  "lng": 1.61,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—<em>longostalètes</em>: M/Br. D/Tête virile à droite portant une coiffe arrondie ; derrière, caducée ; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ ; à gauche du trépied, légende ibérique BIURBI: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "22": {
      "textoIntro": "—Type DCR-182, émission du Languedoc central. Groupe «aux feuilles aquatiques» (Rutènes?): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Bélarga",
  "lat": 43.552,
  "lng": 3.489,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 15, 0],
  "totalInicial": 18,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Type IBL-2449/2488 (Grands bronzes des <em>neronken</em> de variante indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "8": {
      "textoIntro": "—Type IBL-2499. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique BIRIKANTIN.: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "20": {
      "textoIntro": "—Type ARV-3952. Bronze IIPOS à l’échassier: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-80: 1 ex.<br>—Type DCR-72/93, Variante indéterminée de style «cubiste»: 1 ex.<br>—Type DCR-127/180. Variante indéterminée de style «flamboyant»: 1 ex.<br>—Type DCR-182 (émissions du Languedoc central, groupe «aux feuilles aquatiques» Rutènes?): 2 ex.<br>—Type DCR-183 (type de Goutrens, Rutènes?): 1 ex.<br>—Type DCR-273, VIIRIA/BIRACOS: 1 ex.<br>—Type DCR-274, VIIRIA/COP: 1 ex.<br>—Type DCR-X. Monnaie à la croix en argent ou en argent fourré, de type indéterminé ou indéterminable: 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Belcastel-et-Buc",
  "lat": 43.029,
  "lng": 2.353,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>kese</em> (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
  "nombre": "Bélesta",
  "lat": 42.893,
  "lng": 1.932,
  "valores": [0, 0, 0, 0, 0, 0, 1, 18, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 20, 0, 2, 0, 8, 1],
  "totalInicial": 53,
  "infoEspecifica": {
    "7": {
      "textoIntro": "18 bronzes des Neronken.<br>D/ tête féminine à droite, avec chignon; devant légende ibérique.<br>R/ taureau bondissant à droite, couronne au-dessus; en-dessous, légende ibérique NERONKEN, complétée éventuellement par une autre légende sur la ligne de dessous.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Richard, J-C.</span> L’oppidum du Mayné à Bélesta (Ariège) : découvertes et circulations monétaires.",
      "enlace": "https://publicacions.iec.cat/repository/pdf/00000434/00000004.pdf"
    },
    "16": {
      "textoIntro": "3 grands bronzes NMY (début Ier s.av.J.-C.).<br>D/tête masculine à droite, cheveux ondulés, dauphins.<br>R/cavalier à droite tenant une palme, légende ibérique NMY.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Richard, J-C.</span> L’oppidum du Mayné à Bélesta (Ariège) : découvertes et circulations monétaires.",
      "enlace": "https://publicacions.iec.cat/repository/pdf/00000434/00000004.pdf"
    },
    "6": {
      "textoIntro": "Bronze des <em>longostalètes</em> (deuxième moitié du IIe s.av.J.-C.).<br>D/ tête à droite, caducée derrière.<br>R/ trépied, avec de part et d’autre la légende grecque ΛOΓΓOΣTA / ΛHTΩN, avec entre les deux, la légende ibérique BIURBI.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Richard, J-C.</span> L’oppidum du Mayné à Bélesta (Ariège) : découvertes et circulations monétaires.",
      "enlace": "https://publicacions.iec.cat/repository/pdf/00000434/00000004.pdf"
    },
    "18": {
      "textoIntro": "—<em>untikesken</em>: 8 ex.<br>—<em>iltirkesken</em>: 5 ex.<br>—<em>iltirta</em>: 9 ex.<br>—<em>ore</em>: 1 ex.<br>—<em>sekobirikes</em>: 1 ex.<br>—<em>ilturo</em>: 1 ex.<br>—indeterminadas: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Richard, J-C.</span> L’oppidum du Mayné à Bélesta (Ariège) : découvertes et circulations monétaires.",
      "enlace": "https://publicacions.iec.cat/repository/pdf/00000434/00000004.pdf"
    },
    "20": {
      "textoIntro": "—Statère des Redones: D/tête imberbe à droite, à 3 rangées de boucles parallèles; R/cheval à droite, aurige au-dessus et roue en-dessous.<br>—Bronze «anonyme des Bituriges»: D/tête informe ;R/cheval à gauche, en-dessous 3 annelets.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Richard, J-C.</span> L’oppidum du Mayné à Bélesta (Ariège) : découvertes et circulations monétaires.",
      "enlace": "https://publicacions.iec.cat/repository/pdf/00000434/00000004.pdf"
    },
    "22": {
      "textoIntro": "—DCR-73 ou 75. D/tête \"cubiste\"; R/croix, hache, olives: 5 ex.<br>DCR-102 (cadurques), D/tête triangulaire ; R/annelets et points: 1 ex.<br>DCR-252, D/tête aux cheveux bouclés; R/croix, hache et demi-cercle pointé: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Richard, J-C.</span> L’oppidum du Mayné à Bélesta (Ariège) : découvertes et circulations monétaires.",
      "enlace": "https://publicacions.iec.cat/repository/pdf/00000434/00000004.pdf"
    },
    "23": {
      "textoIntro": "1 obole à la croix.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Richard, J-C.</span> L’oppidum du Mayné à Bélesta (Ariège) : découvertes et circulations monétaires.",
      "enlace": "https://publicacions.iec.cat/repository/pdf/00000434/00000004.pdf"
    }
  }
},
  {
    "nombre": 'Besalú',
    "lat": 42.199,
    "lng": 2.696,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
    "totalInicial": 2,
    "infoEspecifica": {
      "18": {
      "textoIntro": "—Exemplaires de <em>kese</em> et <em>untikesken</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Béziers BAETERRAE",
  "lat": 43.344,
  "lng": 3.216,
  "valores": [0, 1, 0, 0, 0, 32, 25, 103, 0, 0, 0, 1, 0, 3, 0, 0, 0, 21, 2, 0, 2, 3, 21, 0],
  "totalInicial": 214,
  "infoEspecifica": {
    "1": {
      "textoIntro": "—Type IBL-2403. M/Br. D/Tête virile à droite, cheveux en rangées de boucles ; derrière, massue. R/Lion courant à droite ; dessous, entre deux traits, légende ΡΙΓΑΝΤΙΚΟΥ ou ΡΙΓΑΝΤΙΚΟC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "5": {
      "textoIntro": "—Type IBL-2403/2431: 32 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "—Incertaines ou imitations de <em>longostalètes</em>: 24 ex.<br><br>(Région Béziers)<br>—IBL-2387. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449/2488. Grands bronzes des <em>neronken</em> de variante indéterminée: 103 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "11": {
      "textoIntro": "—Type IBL-2468. M/Br. D/Tête féminine à droite ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique SELONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "13": {
      "textoIntro": "—Type IBL-2702. M/Br. D/Tête masculine à droite entourée par des dauphins. R/Cavalier à droite tenant une palme ; en dessous, légende (ibérique?) NMY: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 21 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em> (As de bronze), 1 ex.; Monnaie de bronze pré-augustéenne d’Emporion (<em>untikesken</em>) indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type ARV-3614. Statère imité de Philippe II de Macédoine. M/Or.: 1 ex.<br>—Type PIC-4316. Bronze CONTOVTOS: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "21": {
      "textoIntro": "—Type IRH-53: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "22": {
      "textoIntro": "—Type DCR-57 (Groupe hache-croissants, sans meubles, Sotiates?): 1 ex.<br>—Type DCR-60 (Groupe hache-croissants avec meubles divers, Aude?): 1 ex.<br>—Type DCR-64 (Groupe hache-croissants avec meubles divers, Aude?): 1 ex.<br>—Type DCR-72, phase ancienne (Groupe hache-croissants, olives, Toulouse et vallée de l’Aude ?): 1 ex.<br>—Type DCR-73, (Groupe hache-croissants, olives, Toulouse et vallée de l’Aude ?): 2 ex.<br>—Type DCR-221 (Groupe «languedocien» à l’oreille ou à l’œil): 10 ex.<br>—Type DCR-224 (Groupe «languedocien» à l’oreille ou à l’œil): 1 ex.<br>—Type DCR-226 (Groupe «languedocien» à l’oreille ou à l’œil): 1 ex.<br>—Type DCR-227 (Groupe «languedocien» à l’oreille ou à l’œil): 2 ex.<br>—Type DCR-229 (Groupe «languedocien» à l’oreille ou à l’œil): 1 ex.<br>—Type DCR-235 (Monnaies «languedociennes» aux revers variés): 1 ex.<br>—Type DCR-284 M/Ar. D/Tête à droite. R/Croix bouletée au centre; un globule dans chaque canton accompagné d’une ou deux lettres ibériques : légende lue AU N TI KI: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Bizanet",
  "lat": 43.16,
  "lng": 2.88,
  "valores": [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "16": {
      "textoIntro": "—Type IEM-11. M/Ar. D/Tête de Cérès à droite, entourée de trois dauphins. R/Pégase à droite, surmonté d’une victoire: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Blan",
  "lat": 43.526,
  "lng": 2.008,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>untikesken</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
  {
    nombre: 'Bollène',
    lat: 44.28,
    lng: 4.75,
    valores: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0],
    totalInicial: 4
  },
{
  "nombre": "Bompas",
  "lat": 42.731,
  "lng": 2.933,
  "valores": [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  "totalInicial": 5,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—<em>longostalètes</em>: (Incertaines ou imitations) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "<em>—neronken</em>: (Grands bronzes de variante indéterminée) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "22": {
      "textoIntro": "DCR-73A. M/Ar ou Arf. Variante du type DCR-73, à tête de style languedocien, 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Bouriège",
  "lat": 42.984,
  "lng": 2.165,
  "valores": [0, 0, 0, 0, 0, 0, 1, 6, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 8, 1, 2, 1, 27, 63],
  "totalInicial": 109,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—<em>longostalètes</em>: 1 ex. M/Br. D/Tête virile à droite portant une coiffe arrondie ; derrière, caducée ; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ ; à gauche du trépied, légende ibérique BIURBI.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—<em>neronken</em> (Grands bronzes). M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement: EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 4 ex.<br>—Imitations <em>neronken</em> au taureau, de type indéterminé: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "16": {
      "textoIntro": "—Type IEM-162. M/Ar. D/Tête de Cérès à gauche; devant, dauphins. R/Pégase à droite; au-dessus, Victoire: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em>: (As de bronze) 3 ex. (Sémis à légende ibérique) 1 ex. (Bronze indéterminé) 1 ex.<br><em>—kese</em> (Sémis de bronze au cheval) 1 ex.<br><em>—eusti</em> ou <em>eustibaikula</em> (As de bronze) 1 ex.<br><em>—ore</em> (As de bronze au cavalier) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "19": {
      "textoIntro": "—M/Br. D/Le dieu Bès vêtu d’une jupe tenant une masse et un serpent ; à côté, lettres ou symboles. R/Légende punique ‘YBSHM accompagnée du nombre 50: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5906301/Lattara_19_2_2_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_2"
    },
    "23": {
      "textoIntro": "Sur le plan typologique, la plus grande partie de l’ensemble étudié se répartit presque également entre le groupe de type «cubiste» (OCR 73-75) (28 exemplaires) et celui du type «à tête triangulaire» (OCR 108-109), parfois considéré comme cadurque, ici d’importance presque égale (27 exemplaires). A remarquer la présence de 8 oboles du type OCR 263 (dites «de Grabels»).",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Rancoule, G.</span> Un ensemble d’oboles à la croix, Bouriège (Aude, France).",
      "enlace": "https://dialnet.unirioja.es/servlet/articulo?codigo=6070768"
    }
  }
},
{
  "nombre": "Bram",
  "lat": 43.243,
  "lng": 2.113,
  "valores": [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0],
  "totalInicial": 5,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—<em>longostalètes</em>: M/Br. D/Tête virile à droite portant une coiffe arrondie ; derrière, caducée ; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ ; à gauche du trépied, légende ibérique BIURBI: 1 ex.<br>—Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—Monnaie ibérique en bronze indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Brouzet-lès-Alès",
    "lat": 44.135,
    "lng": 4.244,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
  {
  nombre: 'Burgos', 
  lat: 42.340, 
  lng: -3.704, 
  valores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  totalInicial: 1,
  infoEspecifica: {
    11: {
      textoIntro: 'Une monnaie à légende <em>S-e-l-o-n-ce-n</em> de l\'ancienne collection J.-L. Monteverde, provenant des environs de Burgos.',
      textoPaper: '<span style="font-variant: small-caps;">Richard, J-C.</span> Una monnaie ibérique à légende <em>śeloncen</em> découverte aux environs de Burgos.',
      enlace: 'https://www.persee.fr/doc/casa_0076-230x_1971_num_7_1_1047'
    }
  }
  },
{
  "nombre": "Canet (Puig-del-Baja)",
  "lat": 42.7,
  "lng": 3.03,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Carcassonne CARCASSO",
  "lat": 43.206,
  "lng": 2.353,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0],
  "totalInicial": 4,
  "infoEspecifica": {
    "14": {
      "textoIntro": "—<em>kurukuru-atin</em>, moyen bronze, D/Tête masculine à droite ; légende ibérique BER derrière la nuque et SA sous le menton. R/Hippocampe ailé à droite ; en dessous, légende ibérique KURUKURU. 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1?rhid=37947916447&swp=rr-rw-wc-5906301&nav_from=60012782-05d7-4ac3-ba62-ca8ac7761789"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em>: (As de bronze) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Statère imité de Philippe II de Macédoine, or et électrum. D/Tête masculine à droite ou à gauche. R/Bige avec éventuellement restes de légende à l’exergue. 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1?rhid=37947916447&swp=rr-rw-wc-5906301&nav_from=60012782-05d7-4ac3-ba62-ca8ac7761789"
    }
  }
},
{
  "nombre": "Carpentras",
  "lat": 44.055,
  "lng": 5.048,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 6 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Castelnaudary",
  "lat": 43.318,
  "lng": 1.954,
  "valores": [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  "totalInicial": 5,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—<em>longostalètes</em>M/Br. D/Tête virile à droite portant une coiffe arrondie ; derrière, caducée ; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ ; à gauche du trépied, légende ibérique BIURBI: 1 ex. <br>—Incertaines ou imitations de <em>longostalètes</em>: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "16": {
      "textoIntro": "Imitations d’Ampurias de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "21": {
      "textoIntro": "Type IRH-43: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
  },
{
  "nombre": "Caux",
  "lat": 43.507,
  "lng": 3.368,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>iltirta</em>, bronze de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    nombre: 'Cazères',
    lat: 43.207,
    lng: 1.317,
    valores: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    totalInicial: 1
  },
{
  "nombre": "Castelnau-d’Aude",
  "lat": 43.232,
  "lng": 2.672,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 0],
  "totalInicial": 101,
  "infoEspecifica": {
    "22": {
      "textoIntro": "—Type DCR-72, phase ancienne (Groupe hache-croissants, olives (Toulouse et vallée de l’Aude ?): 96 ex.<br>—Type DCR-90 (Double hache): 1 ex.<br>—Type DCR-92 (Double hache): 1 ex.<br>—Type DCR-104 (Variantes aux lunules): 2 ex.<br>—Type DCR-139 (Groupe à la hache du style «flamboyant» Pétrocores? Nitiobroges?): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    }
  }
},
{
  "nombre": "Castres",
  "lat": 43.607,
  "lng": 2.242,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "21": {
      "textoIntro": "—Dérivées des drachmes de Rhodè de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Ceilhes",
  "lat": 43.803,
  "lng": 3.110,
  "valores": [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-2363. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 1 ex.<br>—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Cessenon",
  "lat": 43.450,
  "lng": 3.054,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Ceyras (vallée de Rabieux)",
  "lat": 43.667,
  "lng": 3.437,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Chastellard-de-Lardiers",
  "lat": 44.080,
  "lng": 5.380,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "7": {
      "textoIntro": "•<em>Grands bronzes</em><br>—Type IBL-2483. M/Br. D/Tête féminine voilée à droite ; devant, légende ibérique TIUIS verticale ascendante. R/Taureau bondissant à droite; au-dessus, couronne ; en dessous, légende ibérique NERONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Claira",
  "lat": 42.759,
  "lng": 2.955,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "15": {
      "textoIntro": "Émissions monétaires susceptibles d’avoir été frappées à <em>Ruscino</em>.<br><br>•<em>Petits bronzes</em><br>—Type IBL-187. M/Br. D/Dauphin à droite dans une couronne de palme; en dessous, H couché. R/Dans un cercle de grènetis, deux cercles unis par un trait ; en dessous, échelle à trois barreaux: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
  },
  {
  "nombre": "Clermont-le-Fort",
  "lat": 43.458,
  "lng": 1.432,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-2363. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; devant, légende grecque montante ΒꞶΚΙΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Conilhac",
  "lat": 43.188,
  "lng": 2.716,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
  "totalInicial": 7,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>kese</em> (bronzes de type indéterminé): 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
  },
  {
    "nombre": "Conilhac-de-la-Montagne",
    "lat": 42.978,
    "lng": 2.194,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    "totalInicial": 1
  },
  {
  "nombre": "Corent",
  "lat": 45.666,
  "lng": 3.194,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "6": {
      "textoIntro": "Une petite monnaie de bronze provenant des prospections officielles sur le site de Corent (Puy-de-Dôme). Droit : dans un grènetis, une tête à droite avec une coiffe qui a la forme d’un triangle (diadème ?) sur le front et se prolonge sur le cou par des bandelettes. Revers : une corne d’abondance, accostée à gauche de deux lettres grecques : ΛΟ et, à droite, d’une autre lettre : Γ. Renseignements techniques : poids : 4,34 g ; diamètre : 19/20 mm ; épaisseur : 2,5 mm ; orientation des coins : 2 h.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Richard, J-C.</span> Une division de bronze provenant de Corent (Puy-de-Dôme) et le monnayage des Longostalètes.",
      "enlace": "https://www.academia.edu/44174894/Une_division_de_bronze_provenant_de_Corent_Puy_de_D%C3%B4me_et_le_monnayage_des_Longostal%C3%A8tes"
    }
  }
},
{
  "nombre": "Corneilhan",
  "lat": 43.37,
  "lng": 3.2,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "8": {
      "textoIntro": "—Type IBL-2499. M/Br. D/Tête féminine à droite, chignon ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique BIRIKANTIN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Couiza",
  "lat": 42.94,
  "lng": 2.25,
  "valores": [0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  "totalInicial": 6,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—IBL-2387. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique NERONKEN: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "21": {
      "textoIntro": "—Type IRH-53: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Cournanel",
  "lat": 43.032,
  "lng": 2.233,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "<em>—ausesken</em>: (As de bronze au cavalier) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Cournonsec",
  "lat": 43.544,
  "lng": 3.7,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Type IBL-2449/2488. Grands bronzes des <em>neronken</em> de variante indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Cras",
    "lat": 44.567,
    "lng": 1.533,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
{
  "nombre": "Cruzy",
  "lat": 43.51,
  "lng": 2.94,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Type IBL-2449/2488. Grands bronzes des <em>neronken</em> de variante indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Douzens",
  "lat": 43.185,
  "lng": 2.599,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "16": {
      "textoIntro": "—Type IEM-28. M/Ar. D/Tête de Cérès à droite ; devant, dauphins. R/Centaure à droite.: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
  "nombre": "Duilhac",
  "lat": 42.863,
  "lng": 2.566,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "15": {
      "textoIntro": "Émission monétaire susceptible d’avoir été frappée à <em>Ruscino</em>.<br><br>•<em>Petits bronzes</em><br>—Type IBL-187. M/Br. D/Dauphin à droite dans une couronne de palme; en dessous, H couché. R/Dans un cercle de grènetis, deux cercles unis par un trait ; en dessous, échelle à trois barreaux: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
  "nombre": "Elne ILIBERRI",
  "lat": 42.6,
  "lng": 2.97,
  "valores": [0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
  "totalInicial": 6,
  "infoEspecifica": {
    "7": {
      "textoIntro": "<em>—neronken</em>: (Grands bronzes de variante indéterminée) 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "<em>—longostalètes</em>: (Incertaines ou imitations) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em>: (As de bronze) 1 ex.<br><em>—iltirta</em> (As de bronze au cavalier), 1 ex. (Bronzes d'<em>iltirta</em> de type indéterminé) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Ensérune",
  "lat": 43.31,
  "lng": 3.113,
  "valores": [11, 0, 0, 0, 1, 0, 43, 69, 3, 0, 0, 1, 0, 1, 0, 0, 0, 7, 23, 1, 10, 2, 77, 1],
  "totalInicial": 250,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur dos lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 11 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "4": {
      "textoIntro": "—Type IBL-2431. M/Br. D/Tête virile à droite, cheveux bouclés, collier; derrière, massue. R/Lion courant à droite; dessous, sur dos lignes entre des traits, légende ΑΜΥΤΟ/ΒΑΣΙ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "<em>Oboles</em><br>—Type IBL-193. M/Ar. D/Tête à gauche portant un casque corinthien. R/Roue cantonnée d’une croix; dans les cantons, signes TVII (lettres ?): 2 ex.<br>—Type IBL-194. M/Ar. D/Tête nue à gauche, de petite taille. R/Roue cantonnée d’une croix; dans les cantons, signes TVII (lettres ?): 4 ex.<br><br><em>Grands bronzes</em><br>—Type IBL-2387. M/Br. D/Tête virile à droite portant una coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 1 ex.<br>—Type IBL-2363. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 1 ex.<br>—Type IBL-2369. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; à gauche du trépied, légende ibérique BIURBI: 1 ex.<br>—Type IBL-2367. Incertaines ou imitations: 30 ex.<br><br><em>Bronzes récents</em><br>—Type IBL-154, moyen bronze. M/Br. D/Buste de femme diadémée à droite, dans un cercle de grènetis. R/Corne d’abondance dans un cercle de grènetis; de part et d’autre, légende ΛΟ/Γ, dessous, peut-être Η: 3 ex.<br>—Type IBL-155, petit bronze (régional?). M/Br. D/Buste de femme diadémée à droite, dans un cercle de grènetis. R/Corne d’abondance avec nœud dans un cercle de grènetis ; à gauche, letra Α: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "<em>Grands bronzes</em><br>—Type IBL-2449/2488 (variante indéterminée): 69 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "8": {
      "textoIntro": "—Type IBL-2499. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique BIRIKANTIN: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "11": {
      "textoIntro": "—Type IBL-2468. M/Br. D/Tête féminine à droite ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique SELONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "13": {
      "textoIntro": "—Type IBL-2702. M/Br. D/Tête masculine à droite entourée par des dauphins. R/Cavalier à droite tenant una palme ; en dessous, légende (ibérique ?) NMY: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte ; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—<em>untikesken</em> (As de bronze): 11 ex.<br>—<em>kese</em> (Bronzes de Kese de type indéterminé): 11 ex.<br>—<em>kelse</em> (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "19": {
      "textoIntro": "—Type EBU-Xbr (Petit bronze d’Ebusus de type indéterminé): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type REM-8124 (Potin au personnage courant): 1 ex.<br>—Type RUT-4383 (Bronze TATINOS): 1 ex.<br>—Type TUR-5674: 1 ex.<br>—Type GAU-9248 (Bronze GERMANVS INDVTILII): 1 ex.<br>—Type GAU-Xbr. Monnaie gauloise de bronze frappé indéterminée ou non identifiée: 6 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "21": {
      "textoIntro": "—Type IRH-43/53. Dérivées des drachmes de Rhodè de type indéterminé: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "22": {
      "textoIntro": "—Type DCR-267, drachme à la main en croix, type 2: 1 ex.<br>—Type DCR-X. Monnaie à la croix en argent ou en argent fourré, de type indéterminé ou indeterminable: 76 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-109 (Cadurques?): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Err",
    "lat": 42.439,
    "lng": 2.032,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    "totalInicial": 1,
    "infoEspecifica": {
      "18": {
        "textoIntro": "—1 semi de bronze de la seca d'<em>iltirta</em>.",
        "textoPaper": "<span style=\"font-variant: small-caps;\">Morera, J</span>. Territori i poblament de Cerdanya a l'Antiguitat. La iberització i Romanització de la Vall Cerdana.",
        "enlace": "https://ddd.uab.cat/pub/tesis/2017/hdl_10803_402257/jmc1de4.pdf"
      }
    }
  },
{
  "nombre": "Estagel",
  "lat": 42.772,
  "lng": 2.698,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "15": {
      "textoIntro": "Émission monétaire susceptible d’avoir été frappée à <em>Ruscino</em>.<br><br><em>•Hémiobole</em><br>—Type IBL-189. M/Ar. D/Hippocampe tourné vers la droite; à sa droite, lettre ibérique O. R/Globule central dont partent une ou deux tiges; de part et d’autre, lettres ibériques KU et A. 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Fabrezan",
  "lat": 43.14,
  "lng": 2.7,
  "valores": [0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "2": {
      "textoIntro": "—M/Br. D/Tête virile à droite, cheveux bouclés; derrière, massue. R/Lion courant à droite; dessous, sur deux lignes, légende ΒΙΤΟΥΙΟC/ΒΑCΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "—Incertaines ou imitations de <em>longostalètes</em>: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Ferrals-les-Corbières",
  "lat": 43.17,
  "lng": 2.64,
  "valores": [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Type IBL-2449 (<em>Grands bronzes</em>. M/Br. D/Tête féminine à droite, chignon ; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique NERONKEN: 1 ex.<br>—Type IBL-2449/2488. Grands bronzes des <em>neronken</em> de variante indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
  },
{
  "nombre": "Feuilla",
  "lat": 42.931,
  "lng": 2.911,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>seteisken</em> (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
  "nombre": "Fitou",
  "lat": 42.893,
  "lng": 2.977,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "15": {
      "textoIntro": "Émissions monétaires susceptibles d’avoir été frappées à <em>Ruscino</em>.<br><br>•<em>Petits bronzes</em><br>—Type IBL-188. M/Br. D/Signe N entouré par une couronne dans un grènetis. R/Dauphin à droite dans un grènetis ; au-dessus, X ; en dessous, H. 1 ex.<br>•<em>Hémioboles<br>Type IBL-189. M/Ar. D/Hippocampe tourné vers la droite; à sa droite, lettre ibérique O. R/Globule central dont partent une ou deux tiges; de part et d’autre, lettres ibériques KU et A. 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em>: (As de bronze) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Fleury",
  "lat": 43.23,
  "lng": 3.13,
  "valores": [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 4,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449 (<em>Grands bronzes</em>). M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "16": {
      "textoIntro": "—Type IEM-X. Imitations d’Ampurias de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "Monnaie de bronze pré-augustéenne d’Emporion (<em>untikesken</em>) indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Florensac",
  "lat": 43.43,
  "lng": 3.46,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "8": {
      "textoIntro": "—M/Br. D/Tête féminine à droite, chignon ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique BIRIKANTIN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Foix",
  "lat": 42.96,
  "lng": 1.61,
  "valores": [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  "totalInicial": 4,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—<em>neronken</em>: (Grands bronzes de variante indéterminée) 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "13": {
      "textoIntro": "Grands bronzes NMY: M/Br. D/Tête masculine à droite entourée par des dauphins. R/Cavalier à droite tenant une palme ; en dessous, légende (ibérique?) NMY: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "21": {
      "textoIntro": "—Dérivées des drachmes de Rhodè de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1?rhid=37947916447&swp=rr-rw-wc-5906301&nav_from=60012782-05d7-4ac3-ba62-ca8ac7761789"
    }
  }
},
{
  "nombre": "Fontès",
  "lat": 43.54,
  "lng": 3.38,
  "valores": [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 2],
  "totalInicial": 12,
  "infoEspecifica": {
    "5": {
      "textoIntro": "—Type IBL-2403/2431: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "•<em>Oboles</em><br>—Variante IBL-163A. Revers semblable à IBL-163, mais droit présentant une tête à gauche de style languedocien, parfois précédée d’une accolade à la manière des monnaies à la croix: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "22": {
      "textoIntro": "—Type DCR-182 (émission du Languedoc central, groupe «aux feuilles aquatiques», Rutènes?): 1 ex.<br>—Type DCR-183 (type de Goutrens, Rutènes?): 1 ex.<br>—Type DCR-277 (Drachmes au sanglier): 1 ex.<br>—Type DCR-267, drachme à la main en croix, type 2: 4 ex.<br>—Type DCR-275, COP: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-74 (bas-languedocienne?): 1 ex.<br>—Type OCR-X: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Fontjoncouse",
  "lat": 43.048,
  "lng": 2.788,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>kese</em> (As de bronze au cavalier): 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Fouzilhon",
    "lat": 43.57,
    "lng": 3.29,
    "valores": [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    "totalInicial": 3
  },
  {
  "nombre": "Fréjus",
  "lat": 43.430,
  "lng": 6.730,
  "valores": [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Génat",
  "lat": 42.823,
  "lng": 1.573,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—<em>longostalètes</em>: 1 ex. M/Br. D/Tête virile à droite portant une coiffe arrondie ; derrière, caducée ; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ ; à gauche du trépied, légende ibérique BIURBI.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Ginoles",
    "lat": 42.868,
    "lng": 2.158,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>lauro</em> (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Greffeil",
    "lat": 43.0794,
    "lng": 2.3797,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],
    "totalInicial": 8
  },
  {
    "nombre": "Grenade",
    "lat": 43.77,
    "lng": 1.29,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    "totalInicial": 1,
  "infoEspecifica": {
    "16": {
      "textoIntro": "—Type IEM-25. M/Ar. D/Tête de Cérès à droite. R/Pégase à gauche; dessous, croix: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Gruissan",
  "lat": 43.11,
  "lng": 3.09,
  "valores": [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 1, 0, 0, 0],
  "totalInicial": 9,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "2": {
      "textoIntro": "—Type IBL-2408/2412: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—Monnaie de bronze pré-augustéenne d’Emporion (<em>untikesken</em>) indéterminée: 1 ex.<br>—<em>kese</em> (As de bronze au cavalier): 4 ex. Bronzes de <em>kese</em> de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type GAU-9248. Bronze GERMANVS INDVTILII: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Juzes",
  "lat": 43.448,
  "lng": 1.79,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "La Caunette-sur-Lauquet (Trésor)",
    "lat": 43.3536,
    "lng": 2.7803,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
    "totalInicial": 9
  },
  {
    "nombre": "La Cloche",
    "lat": 43.4,
    "lng": 5.4,
    "valores": [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,4,0,0,0,0],
    "totalInicial": 6,
  "infoEspecifica": {
    "2": {
      "textoIntro": "—Type IBL-2412. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes, légende ΒΙΤΟΥΚΟC/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "13": {
      "textoIntro": "—Type IBL-2701. M/Br. D/Tête féminine voilée à droite; devant, signe ibérique (EBA ou EI). R/Cavalier à droite tenant una palme; en dessous, légende (ibérique?) NMY: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "La Couvertoirade",
  "lat": 43.79,
  "lng": 3.32,
  "valores": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "1": {
      "textoIntro": "—Type IBL-2403. M/Br. D/Tête virile à droite, cheveux en rangées de boucles ; derrière, massue. R/Lion courant à droite ; dessous, entre deux traits, légende ΡΙΓΑΝΤΙΚΟΥ ou ΡΙΓΑΝΤΙΚΟC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "2": {
      "textoIntro": "—Type IBL-2408. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes, légende ΒΙΤΟΥΚΟC/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "La Jonquera",
    "lat": 42.417,
    "lng": 2.873,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
    "totalInicial": 2,
    "infoEspecifica": {
      "18": {
      "textoIntro": "—Exemplaires de <em>kese</em> et <em>untikesken</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "La Lagaste",
  "lat": 43.117,
  "lng": 2.275,
  "valores": [2, 0, 1, 0, 0, 0, 3, 32, 0, 4, 0, 4, 78, 8, 0, 0, 0, 3, 117, 4, 6, 0, 307, 14],
  "totalInicial": 583,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "2": {
      "textoIntro": "—Type IBL-2408. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur dos lignes, légende ΒΙΤΟΥΚΟC/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "•<em>Grands bronzes</em><br>—Type IBL-2363. M/Br. D/Tête virile à droite portant una coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant una urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 2 ex.<br>—Type IBL-2369. M/Br. D/Tête virile à droite portant una coiffe arrondie; derrière, caducée; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant una urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; à gauche du trépied, légende ibérique BIURBI: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "•<em>Grands bronzes</em><br>—Type IBL-2449. M/Br. D/Tête féminine à droite, chignon ; devant, signe ibérique. R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 21 ex.<br>—Type IBL-2483. M/Br. D/Tête féminine voilée à droite ; devant, légende ibérique TIUIS verticale ascendante. R/Taureau bondissant à droite; au-dessus, couronne ; en dessous, légende ibérique NERONKEN: 8 ex.<br>—Type IBL-2488. M/Br. D/Tête féminine voilée à droite ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique sur deux lignes séparées par un trait, NERONCEN/SO: 1 ex.<br>—Type IBL-2449/2488 (variante indéterminée): 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "9": {
      "textoIntro": "—Type IBL-176. M/Br. D/Tête masculine à droite. R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique EKANA: 4 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "11": {
      "textoIntro": "—Type IBL-2468. M/Br. D/Tête féminine à droite; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique SELONKEN: 4 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "12": {
      "textoIntro": "—Type IBL-180 Imitations <em>neronken</em> au taureau, de type indéterminé: 78 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "13": {
      "textoIntro": "—Type IBL-2701. M/Br. D/Tête féminine voilée à droite; devant, signe ibérique (EBA ou EI). R/Cavalier à droite tenant una palme; en dessous, légende (ibérique?) NMY: 1 ex.<br>—Type IBL-2702. M/Br. D/Tête masculine à droite entourée par des dauphins. R/Cavalier à droite tenant una palme ; en dessous, légende (ibérique ?) NMY: 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte ; derrière, massue. R/Lion courant à droite; au dessus, letra Κ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—<em>untikesken</em>: 49 ex.<br>—<em>iltirta</em>: 24 ex. (Hiriart, E.</span> Les sites majeurs de l’axe Aude-Garonne, une approche statistique, économique et monétaire).<br>—<em>kese</em>: 6 ex.<br>—<em>ausuesken</em>: 1 ex.<br>—<em>eustibaikula</em>: 2 ex.<br>—<em>ilturo</em>: 1 ex.<br>—<em>lauro</em>: 1 ex.<br>—<em>iltirkesken</em>: 13 ex.<br>—<em>bolskan</em>: 1 ex.<br>—<em>kelse</em>: 2 ex.<br>—<em>uarakos</em>: 2 ex.<br>—<em>saiti</em>: 1 ex.<br>—<em>kastilo</em>: 1 ex.<br>—Monnaie ibérique en bronze indéterminée: 13 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "19": {
      "textoIntro": "—Type EBU-19. Petit bronze au signe 50. M/Br. D/Le dieu Bès vêtu d’una jupe tenant una masse et un serpent; à côté, lettres ou symboles. R/Légende punique ‘YBSHM accompagnée du nombre 50: 4 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type ARV-3952. Bronze IIPOS à l’échassier: 1 ex.<br>—Type ARV-BrX. Monnaies de bronze arverne ou supposée telle de variété indéterminée: 1 ex.<br>—Type BIT-4199/4212: 1 ex.<br>—Type GAU-9248. Bronze GERMANVS INDVTILII: 1 ex.<br>—Type GAU-Xar. Monnaie gauloise d’argent indéterminée ou non identifiée: 1 ex.<br>—Type GAU-Xbr. Monnaie gauloise de bronze frappé indéterminée ou non identifiée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-73A (à tête de style languedocien): 144 ex.<br>—Type DCR-75: 16 ex.<br>—Type DCR-76: 61 ex.<br>—Type DCR-77: 6 ex.<br>—Type DCR-80: 2 ex.<br>—Type DCR-92: 2 ex.<br>—Type DCR-72/93 (Variante indéterminée de style «cubiste»): 20 ex.<br>—Type DCR-104: 5 ex.<br>—Type DCR-203: 2 ex.<br>—Type DCR-214: 9 ex.<br>—Type DCR-183 (type de Goutrens, Rutènes?): 1 ex.<br>—Type DCR-206: 4 ex.<br>—Type DCR-255: 3 ex.<br>—Type DCR-289 (à légende latine COVE RTOM OTVL): 2 ex.<br>—Type DCR-293 (à légende latine ANTIIIOS COVRA): 1 ex.<br>—Type DCR-X. Monnaie à la croix en argent ou en argent fourré, de type indéterminé ou indéterminable: 29 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-82 (Tectosages? Corbières?): 13 ex.<br>—Type OCR-257: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Labruguière",
    "lat": 43.54,
    "lng": 2.26,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,0,0],
    "totalInicial": 3,
    "infoEspecifica": {
    "16": {
      "textoIntro": "—Type IEM-15. M/Ar. D/Tête de Cérès à droite, entourée de trois dauphins. R/Pégase à droite; légende ΕΜΠΟΡΙΤΩΝ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Lacombe",
  "lat": 43.397,
  "lng": 2.232,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  "totalInicial": 4,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>kese</em> (Denier d’argent au cavalier): 1 ex.<br>—<em>iltirta</em> (Denier d’argent au cavalier): 1 ex.<br>—<em>sesars</em> (Denier d’argent au cavalier): 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Lacoste",
  "lat": 44.832,
  "lng": -0.028,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 5,
  "infoEspecifica": {
    "16": {
      "textoIntro": "—Type IEM-11. M/Ar. D/Tête de Cérès à droite, entourée de trois dauphins. R/Pégase à droite, surmonté d’une victoire: 1 ex.<br>—Type IEM-17. M/Ar. D/Tête de Cérès à gauche. R/Pégase à droite ; dessous, trident; à l’exergue, légende déformée: 3 ex.<br>—Type IEM-26. M/Ar. D/Tête casquée à droite. R/Pégase à gauche; à droite, un point dans un grènetis: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Lafrançaise",
    "lat": 44.127,
    "lng": 1.240,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
{
  "nombre": "Lagrasse",
  "lat": 43.091,
  "lng": 2.619,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 3, 0],
  "totalInicial": 6,
  "infoEspecifica": {
    "12": {
      "textoIntro": "—Type IBL-180. Imitations <em>neronken</em> au taureau, de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "Monnaie ibérique en bronze indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type ARV-3614. Statère imité de Philippe II de Macédoine. M/Or.: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-72/93. Variante indéterminée de style «cubiste»: 1 ex.<br>—Type DCR-X. Monnaie à la croix en argent ou en argent fourré, de type indéterminé ou indéterminable: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Lairière",
  "lat": 43.015,
  "lng": 2.483,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "20": {
      "textoIntro": "—Type VIN-9421, Statère d’or au serpent enroulé (<em>Regenbogenschüsselchen</em>), vers 125-50: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-73A (Variante de DCR-73A à tête de style languedocien) 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Lamanère",
  "lat": 42.360,
  "lng": 2.519,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>bolskan</em> (As de bronze): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Martín Valls, R.</span> <em>La circulación monetaria ibérica</em>.",
      "enlace": "https://uvadoc.uva.es/handle/10324/56070"
    }
  }
},
{
  "nombre": "Lançon",
  "lat": 43.570,
  "lng": 5.180,
  "valores": [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "7": {
      "textoIntro": "•<em>Grands bronzes</em><br>—Type IBL-2449. M/Br. D/Tête féminine à droite, chignon ; devant, signe ibérique. R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Lanet",
    "lat": 42.9639,
    "lng": 2.4961,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    "totalInicial": 1
  },
  {
    "nombre": "Laroque-de-Fa",
    "lat": 42.9575,
    "lng": 2.5653,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    "totalInicial": 1
  },
  {
    "nombre": "Lascabanes",
    "lat": 44.3403,
    "lng": 1.3047,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    "totalInicial": 1
  },
  {
  "nombre": "Lascours",
  "lat": 43.798,
  "lng": 3.075,
  "valores": [0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  "totalInicial": 17,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 16 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "22": {
      "textoIntro": "—Type DCR-X. Monnaies à la croix de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
  "nombre": "Lastours",
  "lat": 43.333,
  "lng": 2.380,
  "valores": [7, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 10,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés; derrière, massue. R/Lion courant à droite; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "5": {
      "textoIntro": "—Type IBL-2403/2431: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "•<em>Grands bronzes</em><br>—Type IBL-2449. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique. R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Lattes LATTARA",
    "lat": 43.567,
    "lng": 3.9,
    "valores": [3,0,0,0,0,0,8,3,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0],
    "totalInicial": 16
  },
{
  "nombre": "Le Cros",
  "lat": 43.8694,
  "lng": 3.3653,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 2, 2],
  "totalInicial": 9,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-154, moyen bronze. M/Br. D/Buste de femme diadémée à droite, dans un cercle de grènetis. R/Corne d’abondance dans un cercle de grènetis; de part et d’autre, légende ΛΟ/Γ, dessous, peut-être Η: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "20": {
      "textoIntro": "—Type RUT-4383 (Bronze TATINOS): 4 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-267, drachme à la main en croix, type 2: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-74 (bas-languedocienne?): 1 ex.<br>—Type OCR-276 (Oboles au cheval, Languedoc central?): 1 ex.<br>—Type OCR-267: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Le Mas-d’Agenais",
    "lat": 44.41,
    "lng": 0.38,
    "valores": [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "totalInicial": 1
  },
{
  "nombre": "Le Pouget",
  "lat": 43.592,
  "lng": 3.523,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "20": {
      "textoIntro": "—Type RUT-4794. Bronze L MUNAT ATTALLOS: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Le Puy-du-Tour",
    "lat": 44.85,
    "lng": 1.65,
    "valores": [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "totalInicial": 1
  },
{
  "nombre": "Les Martys",
  "lat": 43.4,
  "lng": 2.3,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Type IBL-2449/2488. Grands bronzes des <em>neronken</em> de variante indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "19": {
      "textoIntro": "—Petit bronze au signe 50 M/Br. D/Le dieu Bès vêtu d’une jupe tenant une masse et un serpent; à côté, lettres ou symboles. R/Légende punique ‘YBSHM accompagnée du nombre 50: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Lescar",
  "lat": 43.330,
  "lng": -0.430,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Type IBL-2449/2488 (Grands bronzes des <em>neronken</em> de variante indéterminée): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Lespignan",
  "lat": 43.27,
  "lng": 3.03,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Type IBL-2449/2488. Grands bronzes des <em>neronken</em> de variante indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Lézignan-Corbières",
  "lat": 43.2,
  "lng": 2.76,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 0],
  "totalInicial": 5,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Type IBL-2449. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique NERONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte ; derrière, massue. R/Lion courant à droite; au dessus, lettre Κ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—<em>iaka</em> (As ou sémis de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-72/93. Variante indéterminée de style « cubiste »: 1 ex.<br>—Type DCR-X. Monnaie à la croix en argent ou en argent fourré, de type indéterminé ou indéterminable. Style cubiste ou assimilé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    }
  }
},
  {
    "nombre": "Lieuran-Cabrières",
    "lat": 43.5864,
    "lng": 3.4161,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,3,0],
    "totalInicial": 4
  },
{
  "nombre": "Limoux",
  "lat": 43.05,
  "lng": 2.22,
  "valores": [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 1, 0, 1, 0],
  "totalInicial": 8,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-2363. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 5 ex.<br>—M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée ; devant, légende grecque montante ΒꞶΚΙΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449 (<em>Grands bronzes</em>). M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "16": {
      "textoIntro": "—Type IEM-5: 1 ex.<br>—Type IEM-12: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—As de bronze à l’araire. M/Br. D/Tête schématique à droite ; devant, légende latine OBULCO. R/Araire à gauche au sommet, épi à gauche à la base ; au centre entre trois lignes, légende latine sur deux lignes, L. AIMIL/M. IVNI.: 1 ex.<br>—As de bronze au taureau. M/Br. D/Tête casquée à gauche ; devant, sceptre. R/Tareau debout à gauche; au-dessus, légende latine BORA: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type GAU-Xbr. Monnaie gauloise de bronze frappé indéterminée ou non identifiée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-75. M/Ar et Arf. D/Tête à droite ; devant, deux dauphins. R/Croix, croissants périphériques ; dans les cantons, respectivement: olive, ellipse, hache, olive: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Llo",
  "lat": 42.46,
  "lng": 2.06,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "12": {
      "textoIntro": "Unidad de imitación de <em>Neronken</em>, sur de la Galia, inicio siglo I a.C. Ref.: <em>CNH</em> 440, núm. 4.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Fernández, O & Campo, M.</span> Aproximación a la circulación monetaria en la Cerdanya (siglo III a.C.-mediados siglo I d.C.).",
      "enlace": "https://www.academia.edu/3560849/APROXIMACI%C3%93N_A_LA_CIRCULACI%C3%93N_MONETARIA_EN_LA_CERDANYA_S_III_A_C_MEDIADOS_S_I_D_C_7"
    },
    "13": {
      "textoIntro": "Grands bronzes NMY: M/Br. D/Tête masculine à droite entourée par des dauphins. R/Cavalier à droite tenant une palme ; en dessous, légende (ibérique?) NMY: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Lunel",
    "lat": 43.68,
    "lng": 4.14,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    "totalInicial": 1,
      "infoEspecifica": {
    "13": {
      "textoIntro": "—Type IBL-2702. M/Br. D/Tête masculine à droite entourée par des dauphins. R/Cavalier à droite tenant une palme ; en dessous, légende (ibérique?) NMY: 1 ex. (douteuse).",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Lunas",
    "lat": 43.7069,
    "lng": 3.1936,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    "totalInicial": 1
  },
{
  nombre: 'Llívia IULIA LIBICA',
  lat: 42.465,
  lng: 1.983,
  valores: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0],
  totalInicial: 1,
  infoEspecifica: {
    7: {
      textoIntro: '<em>Neronken</em>, unidad, final siglo II-inicio siglo I a.C. encontrada en el Camino Ral de Llívia.',
      textoPaper: '<span style="font-variant: small-caps;">Fernández, O & Campo, M.</span> Aproximación a la circulación monetaria en la Cerdanya (siglo III a.C.-mediados siglo I d.C.).',
      enlace: 'https://www.academia.edu/3560849/APROXIMACI%C3%93N_A_LA_CIRCULACI%C3%93N_MONETARIA_EN_LA_CERDANYA_S_III_A_C_MEDIADOS_S_I_D_C_7'
    }
  }
},
{
  "nombre": "Magalas",
  "lat": 43.4719,
  "lng": 3.2228,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "22": {
      "textoIntro": "—Type DCR-80: 1 ex.<br>—Type DCR-279 (Drachme au cheval): 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Mailhac",
    "lat": 43.3,
    "lng": 2.85,
    "valores": [0,0,1,0,0,0,0,12,0,0,0,0,0,0,0,0,1,1,7,7,3,0,0,0],
    "totalInicial": 32,
  "infoEspecifica": {
        "16": {
      "textoIntro": "—Type IEM-X (Imitations d’Ampurias de type indéterminé): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em> (As de bronze), 2 ex.<br><em>—kese</em> (As de bronze au cavalier), 3 ex.<br><em>—bolskan</em> (As de bronze au cavalier), 1 ex.<br><em>—Obulco</em> (Sémis de bronze au taureau, légende latine <em>OBUL (CO) NIG</em>), 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "19": {
      "textoIntro": "Petit bronze au signe 50, légende punique <em>‘YBSHM</em>, 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5906301/Lattara_19_2_2_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_2"
    }
  }
  },
{
  "nombre": "Marseillan",
  "lat": 43.36,
  "lng": 3.53,
  "valores": [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0],
  "totalInicial": 7,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449 (<em>Grands bronzes</em>). M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "Monnaie de bronze pré-augustéenne d’Emporion (<em>untikesken</em>) indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-80: 1 ex.<br>—Type DCR-183 (type de Goutrens, Rutènes?): 2 ex.<br>—Type DCR-267, drachme à la main en croix, type 2: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Mas-Lavit",
    "lat": 43.734,
    "lng": 3.737,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
  {
    "nombre": "Maubourguet",
    "lat": 43.4692,
    "lng": 0.0364,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    "totalInicial": 1
  },
{
  "nombre": "Maureillas (La Prade)",
  "lat": 42.461,
  "lng": 2.811,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 6,
  "infoEspecifica": {
    "15": {
      "textoIntro": "Émission monétaires susceptibles d’avoir été frappées à <em>Ruscino</em>.<br><br><em>•Hémioboles</em><br>—Série IBL-191. M/Ar. D/Cheval debout à droite sur une ligne de terre; au-dessus, croissant pointé. R/Roue cantonnée d’une croix; dans chaque canton, un globule parfois relié au centre par un trait. La seule origine connue pour cette série, qui comporte au demeurant plusieurs variantes de droit et de revers, est un dépôt roussillonnais récemment signalé. Il n’est cependant pas exclu qu’il s’agisse au moins pour partie d’émissions espagnoles.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Mèze",
  "lat": 43.42,
  "lng": 3.6,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 7, 0],
  "totalInicial": 9,
  "infoEspecifica": {
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte ; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "22": {
      "textoIntro": "—Type DCR-81 (Variantes ponctuées): 1 ex.<br>—Type DCR-182 (émission du Languedoc central, groupe «aux feuilles aquatiques», Rutènes?): 2 ex.<br>—Type DCR-183 (type de Goutrens, Rutènes ?): 2 ex.<br>—Type DCR-206 (Drachmes au sanglier): 1 ex.<br>—Type DCR-264, drachme au M en croix: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Millau",
    "lat": 44.1039,
    "lng": 3.0772,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    "totalInicial": 1
  },
{
  "nombre": "Minerve",
  "lat": 43.36,
  "lng": 2.75,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Grands bronzes des <em>neronken</em> de variante indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Mireval-Lauragais",
  "lat": 43.254,
  "lng": 1.958,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Monceaux-sur-Dordogne",
    "lat": 44.82,
    "lng": 1.1,
    "valores": [0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "totalInicial": 2
  },
{
  "nombre": "Montbazin",
  "lat": 43.5167,
  "lng": 3.6967,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "20": {
      "textoIntro": "—Type SEQ-5368: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Montagnac",
    "lat": 43.48,
    "lng": 3.48,
    "valores": [0, 2, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    "totalInicial": 6
  },
{
  "nombre": "Montferrand ELUSIO",
  "lat": 43.364,
  "lng": 1.818,
  "valores": [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0],
  "totalInicial": 5,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em>: (As de bronze) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
    "nombre": "Montesquieu",
    "lat": 42.520,
    "lng": 2.880,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    "totalInicial": 1,
    "infoEspecifica": {
      "18": {
        "textoIntro": "—<em>untikesken</em>: 1 ex.",
        "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
        "enlace": "https://books.openedition.org/ausonius/23159"
      }
    }
  },
{
  "nombre": "Montfo",
  "lat": 43.475,
  "lng": 3.229,
  "valores": [0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 6, 3, 2, 19, 0, 21, 0],
  "totalInicial": 55,
  "infoEspecifica": {
    "3": {
      "textoIntro": "—Type IBL-2415. M/Br. D/Tête virile à droite, cheveux bouclés, collier; derrière, massue. R/Lion courant à droite; dessous, sur deux lignes, parfois entre des traits, légende ΒΙΤΟΥΙΟΤΟΥΟ/ΒΑCΙΛΕΥC: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2488. M/Br. D/Tête féminine voilée à droite ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique sur deux lignes séparées par un trait, NERONKEN/SO: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "15": {
      "textoIntro": "Émissions monétaires susceptibles d’avoir été frappées à <em>Ruscino</em><br><br>•<em>Petits bronzes</em><br>—Type IBL-188. M/Br. D/Signe N entouré par une couronne dans un grènetis. R/Dauphin à droite dans un grènetis ; au-dessus, X; en dessous, H: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 6 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em> (As de bronze), 2 ex.<br>—<em>bilbilis</em> (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "19": {
      "textoIntro": "—Type EBU-Xbr (Petit bronze d’Ebusus de type indéterminé): 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type ARV-OrX (Quart de statère d’or ou d’or fourré de type indéterminé): 1 ex.<br>—Type ARV-3952 (Bronze IIPOS à l’échassier): 12 ex.<br>—ARV-3994 (Bronze MOTUIDIACA): 4 ex.<br>—Type RUT-4383 (Bronze TATINOS): 1 ex.<br>—Type GAU-Xor. Monnaie gauloise d’or indéterminée ou non identifiée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-72, phase ancienne: 2 ex.<br>—Type DCR-182 (groupe «aux feuilles aquatiques», Rutènes ?): 2 ex.<br>—Type DCR-277 (Drachmes au sanglier):1 ex.<br>—Type DCR-265, drachme à la tête en croix: 1 ex.<br>—Type DCR-267, drachme à la main en croix, type 2: 3 ex.<br>—Type DCR-274, VIIRIA/COP: 1 ex.<br>—Type DCR-275, COP: 2 ex.<br>—Monnaies à la croix de type indéterminé: 9 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Montlaurès",
  "lat": 43.219,
  "lng": 2.983,
  "valores": [14, 0, 10, 0, 0, 0, 72, 171, 3, 0, 0, 0, 1, 1, 0, 4, 6, 0, 27, 7, 6, 9, 61, 19],
  "totalInicial": 411,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 11 ex.<br>—Type IBL-2425. M/Br. D/Tête virile à droite; devant, légende verticale montante ΚΑΙΑΝ. R/Sanglier à droite ; dessous, entre deux traits, légende ΒΑΣΙΛΕΩ: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "2": {
      "textoIntro": "—Type IBL-2408. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur dos lignes, légende ΒΙΤΟΥΚΟC/ΒΑCΙΛΕΥC: 1 ex.<br>—Type IBL-2408/2412: 9 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "•<em>Grands bronzes</em><br>—Type IBL-2355. M/Br. D/Tête virile à droite (Hermès?), à coiffure bouclée. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale descendante : à droite ΛΟΝΓΓΟΣΤΑ, à gauche ΛΗΤΩΝ: 2 ex.<br>—Type IBL-2387. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant una urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 2 ex.<br>—Type IBL-2363. M/Br. D/Tête virile à droite portant una coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant una urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 15 ex.<br>—Type IBL-2369. M/Br. D/Tête virile à droite portant una coiffe arrondie; derrière, caducée; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant una urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; à gauche du trépied, légende ibérique BIURBI: 1 ex.<br>—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 47 ex.<br><br>•<em>Bronzes récents</em><br>—Type IBL-154, moyen bronze M/Br. D/Buste de femme diadémée à droite, dans un cercle de grènetis. R/Corne d’abondance dans un cercle de grènetis; de part et d’autre, légende ΛΟ/Γ, dessous, peut-être Η: 5 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "•<em>Oboles</em><br>—Variante IBL-163A. Revers semblable à IBL-163, mais droit présentant une tête à gauche de style languedocien, parfois précédée d’une accolade à la manière des monnaies à la croix: 10 ex.<br>—Variante IBL-163B. Même chose mais avec légende inversée ΑΜ: 3 ex.<br>—Type IBL-164. M/Ar. D/Tête à droite, devant dauphin et parfois letra Μ. R/Cheval marchant vers la droite, tête tournée vers l’arrière, patte antérieure droite levée. 7 ex.<br>—Type IBL-165. M/Ar. D/Tête à droite. R/Cheval marchant vers la gauche, tête tournée vers l’arrière, patte antérieure droite levée: 1 ex.<br><br>•<em>Petits bronzes</em><br>—Type IBL-166. M/Br. D/Tête à gauche. R/Cheval marchant vers la gauche, tête tournée vers l’arrière, patte antérieure droite levée: 2 ex.<br>—Type IBL-183. M/Br. D/Tête casquée à droite. R/Dauphin à gauche ; au-dessus, croissant ; à l’exergue, légende ibérique BINEKEN: 2 ex.<br><br>•<em>Grands bronzes</em><br>—Type IBL-2449. M/Br. D/Tête féminine à droite, chignon ; devant, signe ibérique. R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 7 ex.<br>—Type IBL-2483. M/Br. D/Tête féminine voilée à droite ; devant, légende ibérique TIUIS verticale ascendante. R/Taureau bondissant à droite; au-dessus, couronne ; en dessous, légende ibérique NERONKEN: 26 ex.<br>—Type IBL-2449/2488 (variante indéterminée): 104 ex.<br><br>•<em>Moyen bronze</em><br>—Type IBL-2496. M/Br. D/Tête à droite, recouverte d’une tête de lion (Héraklès?) ou de loup ; devant, lettres ibériques. R/Hippocampe ailé à droite ; derrière, petit dauphin ?; dessous, légende ibérique NERONKEN: 9 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "8": {
      "textoIntro": "—Type IBL-2499. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique BIRIKANTIN: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "12": {
      "textoIntro": "—Type IBL-180. Imitations <em>neronken</em> au taureau, de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "13": {
      "textoIntro": "—Type IBL-2702. M/Br. D/Tête masculine à droite entourée par des dauphins. R/Cavalier à droite tenant una palme ; en dessous, légende (ibérique?) NMY: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "15": {
      "textoIntro": "Émission monétaire susceptible d’avoir été frappée à <em>Ruscino</em>.<br><br><em>•Hémiobole</em><br>—Type IBL-189. M/Ar. D/Hippocampe tourné vers la droite; à sa droite, lettre ibérique O. R/Globule central dont partent une ou deux tiges; de part et d’autre, lettres ibériques KU et A. 3 ex.<br>—Type IBL-190. Même chose mais avec hippocampe à gauche: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "16": {
      "textoIntro": "—Type IEM-X (Imitations d’Ampurias de type indéterminé): 6 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—<em>untikesken</em> (As de bronze): 19 ex.; (Sémis de bronze au taureau): 1 ex.; (Type EMP-Xbr. Monnaie de bronze pré-augustéenne d’Emporion indéterminée): 1 ex.<br>—<em>kese</em> (As de bronze au cavalier): 3 ex.<br>—<em>iltirta</em> (As de bronze au cavalier): 1 ex.<br>—<em>bolskan</em> (As de bronze au cavalier): 1 ex.<br>—Type IBE-Xbr. Monnaie ibérique en bronze indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "19": {
      "textoIntro": "—Type EBU-2. Petit bronze au taureau. M/Br. D/Le dieu Bès nu tenant una masse et un serpent: 3 ex.<br>—Type EBU-18. Petit bronze au dieu Bès sur les deux faces. M/Br. D/et R/semblables: le dieu Bès vêtu d’una jupe tenant una masse et un serpent R/Taureau marchant à gauche: 2 ex.<br>—Type EBU-19. Petit bronze au signe 50. M/Br. D/Le dieu Bès vêtu d’una jupe tenant una masse et un serpent; à côté, lettres ou symboles. R/Légende punique ‘YBSHM accompagnée du nombre 50: 1 ex.<br>—Type EBU-Xbr. Petit bronze d’Ebusus de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type ARV-3994 (Bronze MOTUIDIACA): 1 ex.<br>—Type GAU-Xbr. Monnaie gauloise de bronze frappé indéterminée ou non identifiée: 3 ex.<br>—Type GAU-Xpt (Potin gaulois indéterminé ou non identifié): 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "21": {
      "textoIntro": "—Type IRH-43: 4 ex.<br>—Type IRH-53: 5 ex",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "22": {
      "textoIntro": "—Type DCR-57 (Groupe hache-croissants, sans meubles, Sotiates?): 2 ex.<br>—Type DCR-65 (Groupe hache-croissants avec meubles divers, Aude?): 1 ex.<br>—Type DCR-73A (Groupe hache-croissants, olives, Toulouse et vallée de l’Aude?): 11 ex.<br>—Type DCR-72/93 (Type «cubiste» indéterminé): 11 ex.<br>—Type DCR-55 (Groupe à la hache sans croissants, Cadurques? Languedoc occidental?): 1 ex.<br>—Type DCR-98: 1 ex.<br>—Type DCR-105 (Variantes aux lunules): 1 ex.<br>—Type DCR-288 (légende OR TU BO): 1 ex.<br>—Type DCR-X (Monnaie à la croix en argent o en argent fourré, de type indéterminé ou indeterminable): 32 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-85: 2 ex.<br>—Type OCR-X: 17",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Montmajor",
    "lat": 41.9108,
    "lng": 1.8356,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    "totalInicial": 1,
    "infoEspecifica": {
      "18": {
      "textoIntro": "—Exemplaires de <em>bolskan</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
  {
    "nombre": "Montpellier",
    "lat": 43.611,
    "lng": 3.877,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,4,1,0,0],
    "totalInicial": 6
  },
{
  "nombre": "Montségur",
  "lat": 42.9758,
  "lng": 1.8333,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>iltirta</em> (As de bronze au cavalier): 1 ex. Bronce d'<em>iltirta</em> de type indéterminé: 1 ex.<br>—<em>iltirkesken</em> (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Montsérié",
    "lat": 43.0506,
    "lng": 0.4375,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    "totalInicial": 1
  },
{
  "nombre": "Montredon-des-Corbières",
  "lat": 43.1922,
  "lng": 2.9267,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-154, moyen bronze. M/Br. D/Buste de femme diadémée à droite, dans un cercle de grènetis. R/Corne d’abondance dans un cercle de grènetis; de part et d’autre, légende ΛΟ/Γ, dessous, peut-être Η: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Mouleydier",
    "lat": 44.85,
    "lng": 0.57,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    "totalInicial": 1,
      "infoEspecifica": {
      "16": {
      "textoIntro": "—Type IEM-X. Imitations d’Ampurias de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Mouriès",
    "lat": 43.689,
    "lng": 4.871,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
    "totalInicial": 6
  },
  {
    "nombre": "Moustier",
    "lat": 44.636,
    "lng": 0.300,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
{
  "nombre": "Murviel-les-Béziers",
  "lat": 43.43,
  "lng": 3.15,
  "valores": [0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  "totalInicial": 5,
  "infoEspecifica": {
    "3": {
      "textoIntro": "—Type IBL-2415. M/Br. D/Tête virile à droite, cheveux bouclés, collier; derrière, massue. R/Lion courant à droite; dessous, sur deux lignes, parfois entre des traits, légende ΒΙΤΟΥΙΟΤΟΥΟ/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449 (Grands bronzes de <em>neronken</em>). M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique NERONKEN: 1 ex.<br>—Type IBL-2449/2488. Grands bronzes des <em>neronken</em> de variante indéterminée: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Murviel-lès-Montpellier",
  "lat": 43.605,
  "lng": 3.737,
  "valores": [0, 0, 0, 1, 0, 0, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 0, 12, 0, 8, 0],
  "totalInicial": 33,
  "infoEspecifica": {
    "3": {
      "textoIntro": "—Type IBL-2408. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes, légende ΒΙΤΟΥΚΟC/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "—IBL-2387. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 1 ex.<br>—Type IBL-2363. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 1 ex.<br>—Type IBL-2369. M/Br. D/Tête virile à droite portant une coiffe arrondie ; derrière, caducée ; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; à gauche du trépied, légende ibérique BIURBI: 1 ex.<br>—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "8": {
      "textoIntro": "—Type IBL-2499. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique BIRIKANTIN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—<em>untikesken</em> (As de bronze): 4 ex.<br>—<em>kese</em> (As de bronze au cavalier): 1 ex.<br>—<em>iltirta</em> (Bronzes de type indéterminé): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type ARV-3943. Bronze VERCA: 2 ex.<br>—Type ARV-3952. Bronze IIPOS à l’échassier: 1 ex.<br>—Type BIT-4199/4212: 1 ex.<br>—Type TUR-5674: 5 ex.<br>—Type GAU-Xbr. Monnaie gauloise de bronze frappé indéterminée ou non identifiée: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-274, VIIRIA/COP: 1 ex.<br>—Type DCR-249C (Série «à l’annelet» et tête negroide): 1 ex.<br>—Type DCR-249 (Série «à l’annelet» et tête negroide): 2 ex.<br>—Type DCR-X. Monnaies à la croix de type indéterminé: 4 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-74 (bas-languedocienne?): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Nages",
  "lat": 43.793,
  "lng": 4.312,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 14, 0, 20, 1],
  "totalInicial": 37,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-2363. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; devant, légende grecque montante ΒꞶΚΙΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—<em>arse</em> (quadrans de bronze) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "20": {
      "textoIntro": "—Type ARV-3943 (Bronze VERCA): 1 ex.<br>—Type ARV-3952 (Bronze IIPOS à l’échassier): 2 ex.<br>—Type ARV-3994 (Bronze MOTUIDIACA): 4 ex.<br>—Type CAR-6151 (Potin à l’aigle): 1 ex.<br>—Type SEQ-5368 (Potin à la grosse tête, type A): 1 ex.<br>—Type TUR-5674: 2 ex.<br>—Type GAU-218 (Obole d’argent d’origine incertaine): 1 ex.<br>—Type GAU-Xar (Monnaie gauloise d’argent indéterminée ou non identifiée): 1 ex.<br>—Type GAU-Xbr (Monnaie gauloise de bronze frappé indéterminée ou non identifiée): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-249A (Série «à l’annelet» et tête negroide): 1 ex.<br>—Type DCR-249C: 19 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-74 (bas-languedocienne?): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Narbonne NARBO",
  "lat": 43.184,
  "lng": 3.004,
  "valores": [6, 0, 0, 0, 0, 0, 3, 6, 1, 0, 0, 1, 0, 1, 0, 3, 0, 3, 18, 3, 4, 1, 1, 0],
  "totalInicial": 51,
  "infoEspecifica": {
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em>: (As de bronze) 7 ex. (Bronzes indéterminés) 2 ex.<br>—<em>kese</em> (As de bronze au cavalier) 3 ex. (Sémis de bronze au cheval) 1 ex.<br>—<em>bolskan</em> (As de bronze au cavalier) 1 ex.<br>—<em>iltirta</em> (Bronzes de type indéterminé) 1 ex.<br><em>—iltirkesken</em> (As de bronze au cavalier) 1 ex.<br>—<em>iaka</em> (As ou sémis de bronze au cavalier) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "19": {
      "textoIntro": "<em>—ebusus</em>: (Petit bronze au signe 50) 2 ex. (Petit bronze de type indéterminé) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5906301/Lattara_19_2_2_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_2"
    }
  }
},
{
  "nombre": "Nébian",
  "lat": 43.6072,
  "lng": 3.4325,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "20": {
      "textoIntro": "—Type GAU-9248. Bronze GERMANVS INDVTILII: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Nîmes",
    "lat": 43.837,
    "lng": 4.36,
    "valores": [0,0,0,0,0,0,0,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
    "totalInicial": 5
  },
  {
    "nombre": "Nebias",
    "lat": 42.896,
    "lng": 2.115,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
    "totalInicial": 2,
    "infoEspecifica": {
      "18": {
        "textoIntro": "Ejemplares de BOLSKAN, UNTIKESKEN."
      }
    }
  },
  {
    "nombre": "Noves",
    "lat": 43.83,
    "lng": 4.83,
    "valores": [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "totalInicial": 1
  },
  {
    "nombre": "Olbia",
    "lat": 43.09,
    "lng": 6.15,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0],
    "totalInicial": 3
  },
{
  "nombre": "Oliana",
  "lat": 42.068,
  "lng": 1.313,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
  "totalInicial": 5,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—Exemplaires de <em>bolskan</em>, <em>ilturo</em>, <em>iltirkesken</em>, <em>iltirta</em> et <em>kese</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Olonzac",
  "lat": 43.28,
  "lng": 2.73,
  "valores": [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "5": {
      "textoIntro": "—Type IBL-2403/2431: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "21": {
      "textoIntro": "—Type IRH-43: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Ollioules",
  "lat": 43.139,
  "lng": 5.847,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "16": {
      "textoIntro": "—Type IEM-15. M/Ar. D/Tête de Cérès à droite, entourée de trois dauphins. R/Pégase à droite ; légende ΕΜΠΟΡΙΤΩΝ: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Opoul-Périllos",
  "lat": 42.876,
  "lng": 2.861,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>untikesken</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Ornaisons",
  "lat": 43.24,
  "lng": 2.88,
  "valores": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "1": {
      "textoIntro": "—Type IBL-2403. M/Br. D/Tête virile à droite, cheveux en rangées de boucles; derrière, massue. R/Lion courant à droite; dessous, entre deux traits, légende ΡΙΓΑΝΤΙΚΟΥ ou ΡΙΓΑΝΤΙΚΟC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "2": {
      "textoIntro": "—Type IBL-2408/2412: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Ouveillan",
  "lat": 43.22,
  "lng": 2.82,
  "valores": [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "3": {
      "textoIntro": "—Type IBL-2415. M/Br. D/Tête virile à droite, cheveux bouclés, collier; derrière, massue. R/Lion courant à droite; dessous, sur deux lignes, parfois entre des traits, légende ΒΙΤΟΥΙΟΤΟΥΟ/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2488. M/Br. D/Tête féminine voilée à droite ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique sur deux lignes séparées par un trait, NERONKEN/SO: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—Monnaie ibérique en bronze indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Palau-del-Vidre",
  "lat": 42.57,
  "lng": 3.0,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—<em>longostalètes</em>: 1 ex. M/Br. D/Tête virile à droite portant une coiffe arrondie ; derrière, caducée ; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ ; à gauche du trépied, légende ibérique BIURBI.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "15": {
      "textoIntro": "Émissions monétaires susceptibles d’avoir été frappées à <em>Ruscino</em>.<br><br>•<em>Hémiobole</em><br>—Type IBL-189. M/Ar. D/Hippocampe tourné vers la droite; à sa droite, lettre ibérique O. R/Globule central dont partent une ou deux tiges; de part et d’autre, lettres ibériques KU et A.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Palleville",
  "lat": 43.504,
  "lng": 1.996,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
      "18": {
        "textoIntro": "—<em>untikesken</em>: 1 ex.",
        "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
        "enlace": "https://books.openedition.org/ausonius/23159"
      },
    "20": {
      "textoIntro": "—Type RUT-4383. Bronze TATINOS: 1 ex.<br>—Type RUT-4794. Bronze L MUNAT ATTALLOS: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Pamiers",
    "lat": 43.115,
    "lng": 1.612,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    "totalInicial": 2
  },
{
  "nombre": "Pech-Maho (Sigean)",
  "lat": 43.0339,
  "lng": 2.9722,
  "valores": [3, 0, 0, 0, 0, 0, 1, 12, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 0, 0, 0, 2, 0],
  "totalInicial": 22,
  "infoEspecifica": {
    "0": {
      "textoIntro": "<strong>Sigean</strong><br>—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "<strong>Sigean</strong>—Type IBL-2363. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 5 ex.<br>—M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée ; devant, légende grecque montante ΒꞶΚΙΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 1 ex.<br>—Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "<strong>Pech-Maho</strong><br><br>—Variante IBL-163A (Oboles): 3 ex.<br>—Variante IBL-163B (Oboles) avec légende inversée ΑΜ: 1 ex.<br>—Type IBL-164: 1 ex.<br>—Type IBL-165: 1 ex.<br><br><strong>Sigean</strong><br><br>—Variante IBL-163A (Oboles): 4 ex.<br>—Type IBL-164: 1 ex.<br>—Type IBL-2449. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne ; en dessous, légende ibérique NERONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "15": {
      "textoIntro": " Émissions monétaires susceptibles d’avoir été frappées à <em>Ruscino</em>.<br><br><strong>Sigean</strong><br>•<em>Petits bronzes</em><br>—Type IBL-187.M/Br. D/Dauphin à droite dans une couronne de palme; en dessous, H couché. R/Dans un cercle de grènetis, deux cercles unis par un trait ; en dessous, échelle à trois barreaux: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "16": {
      "textoIntro": "<strong>Pech-Maho</strong><br><br>—Type IEM-6. M/Ar. D/Tête de Cérès à gauche. R/Pégase à gauche, sans légende: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<strong>Sigean</strong><br><em>—iltirta</em> (Sémis de bronze à la louve): 1 ex.<br>—<em>baitolo</em> (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "<strong>Sigean</strong><br>—Type DCR-249A (Série «à l’annelet» et tête negroide): 1 ex.<br>—Type DCR-286. M/Ar. D/Tête figurée à gauche, chevelure en 4 rangées de petites mèches. R/Croix bouletée ; un globule dans chaque canton attaché au centre de la croix par un petit trait ; deux lettres ibériques dans chaque canton, formant la légende AKE RE KON TON: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Perpignan",
  "lat": 42.698,
  "lng": 2.895,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—<em>longostalètes</em>: (Incertaines ou imitations) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "15": {
      "textoIntro": "—Émissions monétaires susceptibles d’avoir été frappées à <em>Ruscino</em>. Petit bronze. M/Br. D/Dauphin à droite dans une couronne de palme; en dessous, H couché. R/Dans un cercle de grènetis, deux cercles unis par un trait ; en dessous, échelle à trois barreaux: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Perthus",
    "lat": 42.4639,
    "lng": 2.8653,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
    "totalInicial": 2,
    "infoEspecifica": {
      "18": {
      "textoIntro": "—Exemplaires de <em>kese</em> et <em>untikesken</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
  {
    "nombre": "Peyre-Plantade",
    "lat": 43.632,
    "lng": 3.448,
    "valores": [0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "totalInicial": 2
  },
{
  "nombre": "Peyriac-de-Mer",
  "lat": 43.0878,
  "lng": 2.9586,
  "valores": [1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 4,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—M/Br. D/Tête virile à droite, cheveux bouclés; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449/2488. Grands bronzes des <em>neronken</em> de variante indéterminée: 1 ex.<br>—Type IBL-180. Imitations <em>neronken</em> au taureau, de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "12": {
      "textoIntro": "—Type IBL-180. Imitations <em>neronken</em> au taureau, de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
  }
},
{
  "nombre": "Pézenas",
  "lat": 43.46,
  "lng": 3.42,
  "valores": [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
  "totalInicial": 8,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "1": {
      "textoIntro": "—Type IBL-2403. M/Br. D/Tête virile à droite, cheveux en rangées de boucles; derrière, massue. R/Lion courant à droite; dessous, entre deux traits, légende ΡΙΓΑΝΤΙΚΟΥ ou ΡΙΓΑΝΤΙΚΟC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449 (<em>Grands bronzes</em>). M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "22": {
      "textoIntro": "—Type DCR-182, émission du Languedoc central. Groupe «aux feuilles aquatiques» (Rutènes?): 1 ex.<br>—Type DCR-183 (type de Goutrens, Rutènes ?): 1 ex.<br>—Type DCR-279 (Drachme au cheval): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-74 (bas-languedocienne ?): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Pézilla-la-Rivière",
  "lat": 42.694,
  "lng": 2.769,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
  "18": {
    "textoIntro": "—<em>untikesken</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Pomérols",
  "lat": 43.37,
  "lng": 3.5,
  "valores": [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 26, 2],
  "totalInicial": 34,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "3": {
      "textoIntro": "—Type IBL-2415. M/Br. D/Tête virile à droite, cheveux bouclés, collier; derrière, massue. R/Lion courant à droite; dessous, sur deux lignes, parfois entre des traits, légende ΒΙΤΟΥΙΟΤΟΥΟ/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "—Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte ; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—<em>arse</em> (quadrans de bronze à la coquille et au dauphin): 1 ex.<br>—Monnaie ibérique en argent indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-80: 1 ex.<br>—Type DCR-72/93. Variante indéterminée de style «cubiste»: 5 ex.<br>—Type DCR-117 (groupe de Cuzance Cadurques): 1 ex.<br>—Type DCR-127/180. Variante indéterminée de style «flamboyant»: 1 ex.<br>—Type DCR-182 (groupe «aux feuilles aquatiques», Rutènes?): 3 ex.<br>—Type DCR-183 (type de Goutrens, Rutènes?): 3 ex.<br>—Type DCR-278. Drachme au cheval: 2 ex.<br>—Type DCR-267, drachme à la main en croix, type 2.<br>—Type DCR-273, VIIRIA/BIRACOS: 1 ex.<br>—Type DCR-274, VIIRIA/COP: 1 ex.<br>—Type DCR-X. Monnaie à la croix en argent ou en argent fourré, de type indéterminé ou indéterminable: 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-74 (bas-languedocienne?): 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Ponteilla",
  "lat": 42.625,
  "lng": 2.814,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>untikesken</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Porqueres",
  "lat": 42.122,
  "lng": 2.747,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0],
  "totalInicial": 29,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>untikesken</em>: 21 ex.<br>—Indeterminada: 8 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Bouzas, M.</span> Les monedes ibèriques i romanes del jaciment de Mas Castell (Porqueres).",
      "enlace": "https://dugi-doc.udg.edu/bitstream/handle/10256/25444/028401.pdf?sequence=1"
    }
  }
},
{
  "nombre": "Pontós",
  "lat": 42.185,
  "lng": 2.917,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 2, 0, 0, 0, 0],
  "totalInicial": 9,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>untikesken</em> (As de bronze): 2 ex.; (Sémis de bronze au taureau): 1 ex.; (Quadrans à légende ibérique): 1 ex.<br>—<em>kese</em> (As de bronze au cavalier): 1 ex.<br>—<em>bolskan</em> (Denier d’argent au cavalier): 1 ex.; (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "19": {
      "textoIntro": "—Petit bronze au taureau d'<em>Ebussus</em>: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Pouzolles",
  "lat": 43.61,
  "lng": 3.28,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "12": {
      "textoIntro": "—Type IBL-180. Imitations <em>neronken</em> au taureau, de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "22": {
      "textoIntro": "—Type DCR-279 (Drachme au cheval): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Prats-de-Mollo-la-Preste",
  "lat": 42.404,
  "lng": 2.478,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>untikesken</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
    "nombre": "Puigcerdà",
    "lat": 42.4314,
    "lng": 1.9278,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
    "totalInicial": 3,
    "infoEspecifica": {
      "18": {
      "textoIntro": "—Exemplaires de <em>bolskan</em>, <em>ilturo</em> et <em>iltirkesken</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Puivert",
  "lat": 42.919,
  "lng": 2.046,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>kese</em> (bronzes de type indéterminé): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-73A (Variante de DCR-73 à tête de style languedocien): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    }
  }
},
{
  "nombre": "Quillan",
  "lat": 42.875,
  "lng": 2.184,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "22": {
      "textoIntro": "—Type DCR-73A (Variante de DCR-73 à tête de style languedocien): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    }
  }
},
{
  "nombre": "Rajal-del-Gorp",
  "lat": 43.15,
  "lng": 2.25,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 3, 114],
  "totalInicial": 121,
  "infoEspecifica": {
    "20": {
      "textoIntro": "—Type RUT-4383 (Bronze TATINOS). 1 ex.<br>—Type RUT-4794 (Bronze L MUNAT ATTALLOS): 2 ex.<br>—Type RUT-4797 (Bronze MUNAT ATTALVS): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1?rhid=37947916447&swp=rr-rw-wc-5906301&nav_from=60012782-05d7-4ac3-ba62-ca8ac7761789"
    },
    "22": {
      "textoIntro": "—Type DCR-72/93 (Variante de DCR-73 à tête de style languedocien): 3 ex.<br>— Type DCR-183 (Le type de Goutrens (Rutènes?): 2 ex.<br>—Type DCR-X. Monnaie à la croix en argent ou en argent fourré, de type indéterminé ou indéterminable: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    },
    "23": {
      "textoIntro": "—Type OCR-X. Oboles à la croix, tous types: 114 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    }
  }
},
{
  "nombre": "Rennes-le-Château",
  "lat": 42.927,
  "lng": 2.263,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 7, 2],
  "totalInicial": 14,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Type IBL-180. Imitations <em>neronken</em> au taureau, de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "12": {
      "textoIntro": "—Type IBL-180. Imitations <em>neronken</em> au taureau, de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "13": {
      "textoIntro": "—Type IBL-2702. M/Br. D/Tête masculine à droite entourée par des dauphins. R/Cavalier à droite tenant une palme ; en dessous, légende (ibérique?) NMY: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—Monnaie ibérique en bronze indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "19": {
      "textoIntro": "—M/Br. D/Le dieu Bès vêtu d’une jupe tenant une masse et un serpent ; à côté, lettres ou symboles. R/Légende punique ‘YBSHM accompagnée du nombre 50: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-72/93 (Variante de DCR-73 à tête de style languedocien): 3 ex.<br>—Type DCR-183 (Le type de Goutrens (Rutènes?): 2 ex.<br>—Type DCR-X. Monnaie à la croix en argent ou en argent fourré, de type indéterminé ou indeterminable: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    },
    "23": {
      "textoIntro": "—Type OCR-82 (Tectosages? Corbières?): 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    }
  }
},
{
  "nombre": "Rennes-les-Bains",
  "lat": 42.92,
  "lng": 2.32,
  "valores": [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 11, 0, 0, 0, 3, 0],
  "totalInicial": 18,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Type IBL-2387. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-180. Imitations <em>neronken</em> au taureau, de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "12": {
      "textoIntro": "—Type IBL-180. Imitations <em>neronken</em> au taureau, de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "13": {
      "textoIntro": "—Type IBL-2702. M/Br. D/Tête masculine à droite entourée par des dauphins. R/Cavalier à droite tenant une palme; en dessous, légende (ibérique?) NMY: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em>: (As de bronze) 10 ex.<br><em>—iltirta</em> (As de bronze au cavalier) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-72/93 (Variante de DCR-73 à tête de style languedocien): 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    }
  }
},
{
  "nombre": "Rivesaltes",
  "lat": 42.766,
  "lng": 2.873,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>untikesken</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
 "nombre": "Rodès",
 "lat": 42.653,
  "lng": 2.559,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>untikesken</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
       "enlace": "https://books.openedition.org/ausonius/23159"
     }
  }
},
{
  "nombre": "Rodez",
  "lat": 44.35,
  "lng": 2.57,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 15, 1, 2, 0],
  "totalInicial": 19,
  "infoEspecifica": {
    "15": {
      "textoIntro": "—Émissions monétaires susceptibles d’avoir été frappées à <em>Ruscino</em>. Petit bronze. M/Br. D/Dauphin à droite dans une couronne de palme; en dessous, H couché. R/Dans un cercle de grènetis, deux cercles unis par un trait; en dessous, échelle à trois barreaux: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Roquefort-des-Corbières",
    "lat": 42.99,
    "lng": 2.954,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    "totalInicial": 1,
  "infoEspecifica": {
    "15": {
      "textoIntro": "Émissions monétaires susceptibles d’avoir été frappées à <em>Ruscino</em>.<br><br>•<em>Hémioboles</em><br>—Type IBL-189. M/Ar. D/Hippocampe tourné vers la droite; à sa droite, lettre ibérique O. R/Globule central dont partent une ou deux tiges; de part et d’autre, lettres ibériques KU et A. 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": 'Roses Ῥόδη',
    "lat": 42.2631,
    "lng": 3.1750,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0,0],
    "totalInicial": 2,
    "infoEspecifica": {
      "18": {
      "textoIntro": "—Exemplaires de <em>kese</em> et <em>untikesken</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "RUSCINO",
  "lat": 42.709,
  "lng": 2.946,
  "valores": [3, 0, 1, 1, 0, 0, 12, 18, 1, 0, 0, 1, 0, 0, 0, 34, 1, 1, 92, 5, 4, 0, 4, 1],
  "totalInicial": 166,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—M/Br. D/Tête virile à droite, cheveux bouclés; derrière, massue. R/Lion courant à droite; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "2": {
      "textoIntro": "—Type IBL-2412. M/Br. D/Tête virile à droite, cheveux bouclés; derrière, massue. R/Lion courant à droite; dessous, sur deux lignes, légende ΒΙΤΟΥΚΟC/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "3": {
      "textoIntro": "—M/Br. D/Tête virile à droite, cheveux bouclés, collier; derrière, massue. R/Lion courant à droite; dessous, sur deux lignes, parfois entre des traits, légende ΒΙΤΟΥΙΟΤΟΥΟ/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "—M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 5 ex.<br>—M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; devant, légende grecque montante ΒꞶΚΙΟC. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 1 ex.<br>—M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée ; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; à gauche du trépied, légende ibérique BIURBI: 1 ex.<br>—Incertaines ou imitations de <em>longostalètes</em>: 5 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—D/Tête féminine à droite, chignon ; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique <em>neronken</em>: 7 ex.<br>—M/Br. D/Tête féminine voilée à droite; devant, légende ibérique TIUIS verticale ascendante. R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique <em>neronken</em>: 1 ex.<br>—Grands bronzes des <em>neronken</em> de variante indéterminée: 10 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "8": {
      "textoIntro": "—M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique BIRIKANTIN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "11": {
      "textoIntro": "—M/Br. D/Tête féminine à droite ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique <em>selonken</em>.: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "15": {
      "textoIntro": "Émissions monétaires susceptibles d’avoir été frappées à <em>Ruscino</em>.<br><br>•<em>Petits bronzes</em><br>—Type IBL-187. M/Br. D/Dauphin à droite dans une couronne de palme; en dessous, H couché. R/Dans un cercle de grènetis, deux cercles unis par un trait; en dessous, échelle à trois barreaux: 21 ex.<br>—Type IBL-188. M/Br. D/Signe N entouré par une couronne dans un grènetis. R/Dauphin à droite dans un grènetis ; au-dessus, X ; en dessous, H: 9 ex.<br><br>•<em>Hémioboles</em><br>—Type IBL-189. M/Ar. D/Hippocampe tourné vers la droite; à sa droite, lettre ibérique O. R/Globule central dont partent une ou deux tiges; de part et d’autre, lettres ibériques KU et A: 2 ex.<br>—Type IBL-190. Même chose mais avec hippocampe à gauche: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "16": {
      "textoIntro": "—Imitations d’Ampurias de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "17": {
      "textoIntro": "—M/Br. D/Buste à droite, avec devant un bras levé à main ouverte; derrière, massue. R/Lion courant à droite; au dessus, lettre Κ; en dessous, entre deux lignes, légende grecque ΒΗΤΑΡΡΑΤΙC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "<em>—untikesken</em>: (As de bronze) 71 ex.<br><em>—kese</em> (As de bronze au cavalier), 4 ex. (Sémis de bronze au cheval): 1 ex. (Quadrans de bronze au demi pégase): 1 ex.<br><em>—iltirta</em> (As de bronze au cavalier), 1 ex.<br><em>—ore</em> (As de bronze au cavalier), 1 ex.<br><em>—laiesken</em> (As de bronze au cavalier), 1 ex.<br><em>—ilturo</em> (As de bronze au cavalier), 1 ex.<br><em>—baitolo</em> (As de bronze au cavalier), 1 ex.<br><em>—iltirkesken</em> (As de bronze au cavalier), 2 ex.<br><em>—kelse</em> (As de bronze au cavalier), 3 ex.<br><em>—metuainum</em> (As de bronze au cavalier), 1 ex.<br><em>—sekobirikes</em> (As de bronze au cavalier), 1 ex.<br><em>—arse</em> (Quadrans de bronze à la coquille et au dauphin), 1 ex.<br><em>—kastilo</em> (Sémis de bronze au taureau), 1 ex.<br>—<em>OBUL (CO) NIG</em> (légende latine, sémis de bronze au taureau), 1 ex.<br>—<em>BORA</em> (légende latine, sémis de bronze au taureau), 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "19": {
      "textoIntro": "—Petit bronze au signe 50 M/Br. D/Le dieu Bès vêtu d’une jupe tenant une masse et un serpent; à côté, lettres ou symboles. R/Légende punique ‘YBSHM accompagnée du nombre 50: 5 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-72/93. Variante indéterminée de style «cubiste»: 2 ex.<br>—Type DCR-X. Monnaies à la croix de type indéterminé: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-74 (bas-languedocienne?): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
  },
{
  "nombre": "Rouffiac-des-Corbières",
  "lat": 42.880,
  "lng": 2.553,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  "totalInicial": 1,
  "infoEspecifica": {
    "23": {
      "textoIntro": "—Type OCR-X (Oboles à la croix de type indéterminé): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    }
  }
},
  {
  "nombre": "Salses",
  "lat": 42.7,
  "lng": 2.92,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "15": {
      "textoIntro": "Émission monétaire susceptibles d’avoir été frappée à <em>Ruscino</em>.<br><br>•<em>Petits bronzes</em><br>—Type IBL-187. M/Br. D/Dauphin à droite dans une couronne de palme; en dessous, H couché. R/Dans un cercle de grènetis, deux cercles unis par un trait; en dessous, échelle à trois barreaux: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Saint-Alban-sur-Limagnole",
    "lat": 44.780,
    "lng": 3.388,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
{
  "nombre": "Saint-André-de-Roquelongue",
  "lat": 43.07,
  "lng": 2.83,
  "valores": [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 1 ex.<br>—Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Saint-Martory",
    "lat": 43.139,
    "lng": 0.931,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
  {
    "nombre": "Saint-Estève",
    "lat": 42.71,
    "lng": 2.85,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    "totalInicial": 1,
  "infoEspecifica": {
    "15": {
      "textoIntro": "Émissions monétaires susceptibles d’avoir été frappées à <em>Ruscino</em>.<br><br>•<em>Hémioboles</em><br>—Type IBL-189. M/Ar. D/Hippocampe tourné vers la droite; à sa droite, lettre ibérique O. R/Globule central dont partent une ou deux tiges; de part et d’autre, lettres ibériques KU et A. 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Saint-Génis-des-Fontaines",
    "lat": 42.542,
    "lng": 2.921,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
    "totalInicial": 2,
    "infoEspecifica": {
      "18": {
      "textoIntro": "—Exemplaires de <em>kese</em> et <em>untikesken</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Saint-Jean-de-Barrou",
  "lat": 42.9583,
  "lng": 2.8406,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "8": {
      "textoIntro": "—Type IBL-2499. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique BIRIKANTIN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Saint-Just-et-le-Bézu",
  "lat": 43.0,
  "lng": 2.6,
  "valores": [0, 0, 0, 0, 0, 0, 3, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 10, 4],
  "totalInicial": 25,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—IBL-2387. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 2 ex.<br>—Type IBL-2363. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; devant, légende grecque montante ΒꞶΚΙΟC. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 3 ex.<br>—Type IBL-2483. M/Br. D/Tête féminine voilée à droite ; devant, légende ibérique TIUIS verticale ascendante. R/Taureau bondissant à droite; au-dessus, couronne ; en dessous, légende ibérique NERONKEN: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—Monnaie ibérique en bronze indéterminée: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-73A. M/Ar ou Arf. Variante du type DCR-73, à tête de style languedocien, 4 ex.<br>—Type DCR-102 (Variante aux lunules): 1 ex.<br>—Type DCR-143 (Groupe à la hache du style «flamboyant», Pétrocores?): 1 ex.<br>—Type DCR-255 (Série «au S»): 4 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "23": {
      "textoIntro": "—Type OCR-82 (Tectosages ? Corbières ?): 3 ex.<br>—Type OCR-109 (Cadurques?): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Saint-Martin-de-Villeréglan",
  "lat": 43.2,
  "lng": 2.0,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 2,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Type IBL-2449 (<em>Grands bronzes</em>). M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "18": {
      "textoIntro": "—<em>untikesken</em> (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Saint-Pargoire",
    "lat": 43.528,
    "lng": 3.518,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0],
    "totalInicial": 5,
  "infoEspecifica": {
    "18": {
      "textoIntro": "<em>—untikesken</em>: (As de bronze) 10 ex.<br><em>—iltirta</em> (As de bronze au cavalier) 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-72/93 (Variante de DCR-73 à tête de style languedocien): 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    }
  }
},
{
    "nombre": "Saint-Sulpice-la-Pointe",
    "lat": 43.774,
    "lng": 1.685,
    "valores": [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "totalInicial": 1
  },
{
  "nombre": "Saint-Thibéry",
  "lat": 43.396,
  "lng": 3.417,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—Type EMP-Xbr (Monnaie de bronze pré-augustéenne d’Emporion indéterminée): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-72/93 (Type «cubiste» indéterminé): 1 ex.<br>—Type DCR-X. Monnaie à la croix en argent ou en argent fourré, de type indéterminé ou indeterminable: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Saint-Yrieix-le-Dejalat",
    "lat": 45.51,
    "lng": 2.21,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    "totalInicial": 1,
    "infoEspecifica": {
      "16": {
      "textoIntro": "—Type IEM-X. Imitations d’Ampurias de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Sallèles-d’Aude",
  "lat": 43.22,
  "lng": 2.94,
  "valores": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "6": {
      "textoIntro": "—Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Sant Julià de Lòria",
  "lat": 42.466,
  "lng": 1.492,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0],
  "totalInicial": 15,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>bolskan</em> (Unidad de bronce), 8 ex.<br>—<em>belikiom</em> (Unidad de bronce), 1 ex.<br>—<em>kelse</em> (Mitad de bronce), 1 ex.<br>—Monedas ibéricas frustras: 5 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Ripollés, P.P.</span> <em>La circulación monetaria en la Tarraconense Mediterránea</em>.",
      "enlace": "https://www.academia.edu/11906503/La_circulaci%C3%B3n_monetaria_en_la_Tarraconense_Mediterr%C3%A1nea"
    }
  }
},
  {
    "nombre": "Sant Vicenç de Camós",
    "lat": 42.096,
    "lng": 2.766,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
    "totalInicial": 2,
    "infoEspecifica": {
      "18": {
      "textoIntro": "—Exemplaires de <em>kese</em> et <em>untikesken</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Sérignan",
  "lat": 43.282,
  "lng": 3.280,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "20": {
      "textoIntro": "—Type BIT-4199/4212: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1?rhid=37947916447&swp=rr-rw-wc-5906301&nav_from=60012782-05d7-4ac3-ba62-ca8ac7761789"
    },
    "22": {
      "textoIntro": "—Type DCR-287 (<em>à légende latine</em>). M/Ar. D/Accolades et arcs de cercles bouletés. R/Croix ; hache évidée au troisième canton ; olive aux premier, deuxième et quatrième cantons; légende SE TU BO aux quatrième, deuxième et premier cantons: 1 ex.<br>—Type DCR-287, (<em>à légende latine</em>) M/Ar. D/Fleuron. R/Croix ; hache évidée et trois points au troisième canton; olive aux premier, deuxième et quatrième cantons; légende OR TU BO aux quatrième, deuxième et premier canton: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "SEXTANTIO",
    "lat": 43.642,
    "lng": 3.896,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
  {
    "nombre": "Talló",
    "lat": 42.363,
    "lng": 1.78,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
    "totalInicial": 3,
    "infoEspecifica": {
      "18": {
        "textoIntro": "—1 unitat d'<em>iltirkesken</em>.<br>—1 unitat de <em>kese</em>.<br>—1 unitat d'una seca indeterminable<br>",
        "textoPaper": "<span style=\"font-variant: small-caps;\">Morera, J</span>. Territori i poblament de Cerdanya a l'Antiguitat. La iberització i Romanització de la Vall Cerdana.",
        "enlace": "https://ddd.uab.cat/pub/tesis/2017/hdl_10803_402257/jmc1de4.pdf"
      }
    }
  },
  {
    "nombre": "Taradeau",
    "lat": 43.455,
    "lng": 6.436,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    "totalInicial": 2
  },
  {
    "nombre": "Tarascon-sur-Ariège",
    "lat": 42.845,
    "lng": 1.403,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
    "totalInicial": 2,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>iltirta</em> (As de bronze au cavalier): 1 ex.<br>—<em>iltirkesken</em> (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Taurinya",
    "lat": 42.579,
    "lng": 2.426,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
    "totalInicial": 2,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—Exemplaires de <em>kese</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Tautavel",
  "lat": 42.813,
  "lng": 2.746,
  "valores": [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 4, 0, 3, 0, 13, 0],
  "totalInicial": 24,
  "infoEspecifica": {
    "0": {
      "textoIntro": "Buste du roi à droite; une massue derrière la tête. R/ Lion courant à droite ; au-dessous légende grecque sur deux lignes : ΚΑΙΑΝΤΟΛΟΥ/ [ΒΑΣΙΑ(E)]<br>Masse: 9,26 g, diamètre: 25 mm, épaisseur: 3 mm, axe: 8 h, B8. As en bronze frappé par Kaiantolos à Béziers au IIe s. av. J.-C. Traces de découpe: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Melmoux, P-Y.</span> Les monnaies antiques du site de Los Bonissos à Tautavel et de ses alentours immédiats.",
      "enlace": "https://books.openedition.org/pupvd/4844"
    },
    "6": {
      "textoIntro": "Buste d’Hermès à droite, un caducée derrière la tête; ΛΟΎΚΟΤΙ[knoc] devant le visage. R/ Trépied avec légende grecque: ΛΟΝΓΟCTA/ ΛHTΏΝ et légende ibérique: “Biurbi”. Masse: 8,09 g, diamètre: 26 mm, épaisseur: 2,3 mm, axe: 2 h, A5. Unité de bronze frappée Ier s. av. J.-C.: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Melmoux, P-Y.</span> Les monnaies antiques du site de Los Bonissos à Tautavel et de ses alentours immédiats.",
      "enlace": "https://books.openedition.org/pupvd/4844"
    },
    "15": {
      "textoIntro": "A/ Dauphin à gauche ; au-dessous lettre en forme de H couché (O ou Bo en ibère). R/ Caducée avec à gauche un motif en forme d’échelle à trois barreaux. Sextans frappé à Ruscino au Ier s. av.: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Melmoux, P-Y.</span> Les monnaies antiques du site de Los Bonissos à Tautavel et de ses alentours immédiats.",
      "enlace": "https://books.openedition.org/pupvd/4844"
    },
    "18": {
      "textoIntro": "<em>untikesken</em><br>—Tête de Pallas à droite ; coup de poinçon au niveau de l’œil. R/ Pégase à droite, au-dessous légende ibère: UNT[ikesken] Masse : 9,11 g (demi), dimensions : 32,3/ 16,5 mm, épaisseur: 3,4 mm, axe : 4 h, D3. As oncial du IIe s. av. J.-C. coupé en deux, portant une contremarque non déterminée: 1 ex.<br>—Tête de Pallas à droite. R/ Pégase à droite, la légende hors champ au-dessous. Masse: 5,26 g (quart), diamètre: 32 mm, dimensions: 16,7/ 17 mm, épaisseur: 3,7 mm, axe: 12 h, A12. As oncial du IIe s. av. J.-C. coupé en quatre: 1 ex.<br>—Tête de Pallas à droite un palme au centre du casque. R/ Pégase à droite (surmonté d’une couronne), au-dessous légende ibérique UNT[ikesken] Masse: 3,72 g (quart), diamètre: 29 mm, dimensions: 18,6/ 13,1 mm, épaisseur: 3,2 mm, axe: 4 h, C9: 1 ex.<br><br>Indéterminée<br>—Tête à droite? R/ Cavalier tenant une lance à droite. Masse: 5,24 g (demi), diamètre : 27 mm, dimensions : 27,7/ 14,2 mm, épaisseur : 2,5 mm, A13: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Melmoux, P-Y.</span> Les monnaies antiques du site de Los Bonissos à Tautavel et de ses alentours immédiats.",
      "enlace": "https://books.openedition.org/pupvd/4844"
    },
    "20": {
      "textoIntro": "—Grosse tête à gauche. R/ Quadrupède à gauche, la queue relevée. Masse : 4,09 g, diamètre : 18 mm, épaisseur : 3,9 mm, axe : 4 h, A9. Potin de la fin du IIe s. et du Ier tiers du Ier s. av. J.-C. Peut-être émis à Bâle (Suisse): 1 ex.<br>—Monnaies frustes: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Melmoux, P-Y.</span> Les monnaies antiques du site de Los Bonissos à Tautavel et de ses alentours immédiats.",
      "enlace": "https://books.openedition.org/pupvd/4844"
    },
    "22": {
      "textoIntro": "Monnaies à la croix de type cubiste: 13 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Melmoux, P-Y.</span> Les monnaies antiques du site de Los Bonissos à Tautavel et de ses alentours immédiats.",
      "enlace": "https://books.openedition.org/pupvd/4844"
    }
  }
},
{
  "nombre": "Théza",
  "lat": 42.639,
  "lng": 2.951,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>untikesken</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "TOLOSA",
  "lat": 43.604,
  "lng": 1.443,
  "valores": [1, 0, 1, 0, 0, 0, 5, 3, 0, 0, 0, 0, 0, 1, 1, 0, 2, 1, 2, 2, 11, 3, 6, 0],
  "totalInicial": 39,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés; derrière, massue. R/Lion courant à droite; dessous, sur deux lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "2": {
      "textoIntro": "—Type IBL-2412. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes, légende ΒΙΤΟΥΚΟC/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "•<em>Grands bronzes</em><br>—Type IBL-2387. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée ; pas de légende. R/Trépied votif soutenant une urne ; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 1 ex.<br>—Type IBL-2369. M/Br. D/Tête virile à droite portant une coiffe arrondie; derrière, caducée; devant, légende grecque montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant une urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; à gauche du trépied, légende ibérique BIURBI: 1 ex.<br>—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "•<em>Grands bronzes</em><br>—Type IBL-2449/2488 (variante indéterminée): 3 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "13": {
      "textoIntro": "—Type IBL-2701. M/Br. D/Tête féminine voilée à derecha; delante, signo ibérico (EBA o EI). R/Cavalier à droite tenant una palme; en dessous, légende (ibérique?) NMY: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "14": {
      "textoIntro": "—Type IBL-184, grand bronze. M/Br. D/Tête masculine à droite; légende ibérique BER derrière la nuque et SA sous le menton. R/Cavalier casqué à droite, tenant une enseigne en forme de sanglier; en dessous, sur deux líneas separadas por un trazo, leyenda ibérica KURUKURU/ATIN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "16": {
      "textoIntro": "—Type IEM-6. M/Ar. D/Tête de Cérès à gauche. R/Pégase à gauche, sans légende: 1 ex.<br>—Type IEM-X. Imitations d’Ampurias de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "17": {
      "textoIntro": "—Type IBL-2432. M/Br. D/Buste à droite, avec devant un bras levé à main ouverte; derrière, massue. R/Lion courant à droite ; au dessus, lettre Κ; en dessous, entre dos líneas, leyenda griega ΒΗΤΑΡΡΑΤΙC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Torreilles",
  "lat": 42.754,
  "lng": 2.992,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "15": {
      "textoIntro": "Émissions monétaires susceptibles d’avoir été frappées à <em>Ruscino</em>.<br><br>•<em>Petits bronzes</em><br>—Type IBL-187. M/Br. D/Dauphin à droite dans une couronne de palme; en dessous, H couché. R/Dans un cercle de grènetis, deux cercles unis par un trait ; en dessous, échelle à trois barreaux: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Torroella de Fluvià",
  "lat": 42.175,
  "lng": 3.039,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>untikesken</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Tossal de Baltarga",
  "lat": 42.3667,
  "lng": 1.7833,
  "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,7,0,0,0,0,0],
  "totalInicial": 9,
  "infoEspecifica": {
    "16": {
      "textoIntro": "1. Imitación gala de las dracmas del caballo parado de Emporion, mediados siglo III a.C. Ref.: CNH 18, núm. 7B.<br>2. Imitación gala de las dracmas del caballo parado de Emporion, mediados siglo III a.C. Ref.: CNH 19, núm. 11B.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Fernández, O & Campo, M.</span> Aproximación a la circulación monetaria en la Cerdanya (siglo III a.C.-mediados siglo I d.C.).",
      "enlace": "https://www.academia.edu/3560849/APROXIMACI%C3%93N_A_LA_CIRCULACI%C3%93N_MONETARIA_EN_LA_CERDANYA_S_III_A_C_MEDIADOS_S_I_D_C_7"
    },
    "18": {
      "textoIntro": "1 denario forrado y perforado de <em>Bolskan</em>.<br>1 unidad de <em>Baitolo</em>.<br>1 unidad de <em>Lauro</em>.<br>1 unidad de <em>Oskumken</em>.<br>1 unidad de <em>Kese</em>.<br>1 unidad de <em>Kelse</em>.<br>1 unidad de <em>Ieso</em>."
    }
  }
  },
{
  "nombre": "Tourbes",
  "lat": 43.446,
  "lng": 3.378,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "Monnaie ibérique en bronze indéterminée: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
{
  "nombre": "Tressan",
  "lat": 43.573,
  "lng": 3.487,
  "valores": [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
  "totalInicial": 3,
  "infoEspecifica": {
    "1": {
      "textoIntro": "—Type IBL-2403. M/Br. D/Tête virile à droite, cheveux en rangées de boucles ; derrière, massue. R/Lion courant à droite ; dessous, entre deux traits, légende ΡΙΓΑΝΤΙΚΟΥ ou ΡΙΓΑΝΤΙΚΟC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "20": {
      "textoIntro": "—Type PIC-4316. Bronze CONTOVTOS: 1 ex.<br>—Type RUT-4383. Bronze TATINOS: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
    "nombre": "Trouillas",
    "lat": 42.609,
    "lng": 2.81,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
    "totalInicial": 2,
    "infoEspecifica": {
      "18": {
      "textoIntro": "—Exemplaires de <em>kese</em> et <em>untikesken</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Tuchan",
  "lat": 42.89,
  "lng": 2.72,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "12": {
      "textoIntro": "—Type IBL-180. Imitations <em>neronken</em> au taureau, de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Ullastret",
    "lat": 42.006,
    "lng": 3.079,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
    "totalInicial": 3,
    "infoEspecifica": {
      "18": {
      "textoIntro": "—Exemplaires de <em>bolskan</em> et <em>kese</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
  {
    "nombre": "Uzech",
    "lat": 44.57,
    "lng": 1.47,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    "totalInicial": 1,
    "infoEspecifica": {
      "16": {
      "textoIntro": "—Type IEM-X. Imitations d’Ampurias de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Vendres",
  "lat": 43.27,
  "lng": 3.17,
  "valores": [0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 4,
  "infoEspecifica": {
    "5": {
      "textoIntro": "—Type IBL-2403/2431: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "—Type IBL-2449/2488. Grands bronzes des <em>neronken</em> de variante indéterminée: 2 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Vieille-Toulouse",
  "lat": 43.526,
  "lng": 1.446,
  "valores": [7, 0, 5, 1, 0, 1, 88, 113, 4, 0, 13, 0, 83, 23, 0, 0, 2, 0, 202, 45, 128, 0, 830, 44],
  "totalInicial": 1586,
  "infoEspecifica": {
    "0": {
      "textoIntro": "—Type IBL-2416. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur dos lignes séparées par un trait, légende ΚΑΙΑΝΤΟΛΟΥ ΒΑΣΙΛΕ: 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "2": {
      "textoIntro": "—Type IBL-2408. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur deux lignes, légende ΒΙΤΟΥΚΟC/ΒΑCΙΛΕΥC: 2 ex. <br>—Type IBL-2412. M/Br. D/Tête virile à droite, cheveux bouclés ; derrière, massue. R/Lion courant à droite ; dessous, sur dos lignes, légende ΒΙΤΟΥΙΟC/ΒΑCΛΕΥC: 2 ex.<br>—Type IBL-2408/2412: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "3": {
      "textoIntro": "—Type IBL-2415. M/Br. D/Tête virile à droite, cheveux bouclés, collier ; derrière, massue. R/Lion courant à droite ; dessous, sur dos lignes, parfois entre des traits, légende ΒΙΤΟΥΙΟΤΟΥΟ/ΒΑCΙΛΕΥC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "5": {
      "textoIntro": "—Type IBL-2403. M/Br. D/Tête virile à droite, cheveux en rangées de boucles ; derrière, massue. R/Lion courant à droite ; dessous, entre dos traits, légende ΡΙΓΑΝΤΙΚΟΥ ou ΡΙΓΑΝΤΙΚΟC: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "6": {
      "textoIntro": "•<em>Grands bronzes</em><br>—Type IBL-2355. M/Br. D/Tête virile à droite (Hermès?), à coiffure bouclée. R/Trépied votif soutenant una urne ; de part et d’autre, légende grecque verticale descendante : à droite ΛΟΝΓΓΟΣSTA, à gauche ΛΗΤΩΝ: 2 ex.<br>—Type IBL-2387. M/Br. D/Tête virile à droite portant una coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant una urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ: 20 ex.<br>—Type IBL-2363. M/Br. D/Tête virile à droite portant una coiffe arrondie; derrière, caducée; pas de légende. R/Trépied votif soutenant una urne; de part et d’autre, légende grecque verticale montante: à gauche ΛΟΝΓΓΟCΤΑ, à droite ΛΗΤꞶΝ; immédiatement à gauche du trépied, formule ibérique BIURBI: 21 ex.<br>—Type IBL-2369. M/Br. D/Tête virile à droite portant una coiffe arrondie; derrière, caducée; devant, leyenda griega montante ΛΟΥΚΟΤΙΚΝΟC. R/Trépied votif soutenant una urne ; de part et d’autre, leyenda griega vertical montante: a la izquierda ΛΟΝΓΓΟCΤΑ, a la derecha ΛΗΤꞶΝ; a la izquierda del trípode, leyenda ibérica BIURBI: 21 ex.<br>—Type IBL-2367. Incertaines ou imitations de <em>longostalètes</em>: 24 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "7": {
      "textoIntro": "<em>Grands bronzes</em><br>—Type IBL-2449. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique. R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 7 ex.<br>—Type IBL-2483. M/Br. D/Tête féminine voilée à droite; devant, légende ibérique TIUIS verticale ascendante. R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 75 ex.<br>—Type IBL-2483. M/Br. D/Tête féminine voilée à droite; devant, légende ibérique TIUIS verticale ascendante. R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 18 ex.<br>—Type IBL-2488. M/Br. D/Tête féminine voilée à droite ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, leyenda ibérica en dos líneas separadas por un trazo, NERONKEN/SO: 5 ex.<br>—Type IBL-2449/2488. Grands bronzes des <em>neronken</em> de variante indéterminée: 1 ex.<br>—Type IBL-180. Imitations <em>neronken</em> au taureau, de type indéterminé: 7 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "8": {
      "textoIntro": "—Type IBL-2499. M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à derecha; arriba, corona; abajo, leyenda ibérica BIRIKANTIN: 4 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "10": {
      "textoIntro": "—Type IBL-177. M/Br. D/Tête masculine à derecha. R/Toro saltando a la derecha; arriba, corona; abajo, leyenda ibérica LERO: 12 ex.<br>—Type IBL-178. M/Br. D/Tête masculine à droite ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à gauche ; au-dessus, couronne ; en dessous, légende ibérique LERO: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "12": {
      "textoIntro": "—Type IBL-180 Imitations <em>neronken</em> au taureau, de type indéterminé: 83 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "13": {
      "textoIntro": "—Type IBL-2701. M/Br. D/Tête féminine voilée à derecha; delante, signo ibérico (EBA o EI). R/Cavalier à droite tenant una palme; en dessous, légende (ibérique?) NMY: 5 ex.<br>—Type IBL-2702. M/Br. D/Tête masculine à droite entourée par des dauphins. R/Cavalier à droite tenant una palme; en dessous, leyenda (¿ibérica?) NMY: 18 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "16": {
      "textoIntro": "—Type IEM-1 M/Ar ou Br. D/Tête de Cérès à gauche ; devant légende ΕΜΠΟΡΙΤΩΝ déformée. R/Pégase à droite; au-dessus, Nikè: 1 ex.<br>—Type IEM-X (Imitations d’Ampurias de type indéterminé): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
{
  "nombre": "Villerouge-la-Crémade",
  "lat": 43.0,
  "lng": 2.67,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—IBL-2488. M/Br. D/Tête féminine voilée à droite ; devant, signe ibérique (EBA ou EI). R/Taureau bondissant à droite; au-dessus, couronne; en dessous, légende ibérique sur deux lignes séparées par un trait, NERONKEN/SO: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": 'Viladamat',
    "lat": 42.133,
    "lng": 3.074,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0,0],
    "totalInicial": 2,
    "infoEspecifica": {
      "18": {
      "textoIntro": "—Exemplaires de <em>kese</em> et <em>untikesken</em>.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
      "enlace": "https://books.openedition.org/ausonius/23159"
    }
  }
},
{
  "nombre": "Villasavary",
  "lat": 43.220,
  "lng": 2.039,
  "valores": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 15, 0],
  "totalInicial": 17,
  "infoEspecifica": {
    "7": {
      "textoIntro": "—Type IBL-2449 (<em>Grands bronzes</em>). M/Br. D/Tête féminine à droite, chignon; devant, signe ibérique (lu diversement : EBA pour Richard 1973 et Taffanel 1979, EI pour Villaronga et Depeyrot ; Hill 1931a donne les deux lectures). R/Taureau bondissant à droite ; au-dessus, couronne; en dessous, légende ibérique NERONKEN: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    },
    "19": {
      "textoIntro": "—Petit bronze au signe 50 M/Br. D/Le dieu Bès vêtu d’une jupe tenant une masse et un serpent; à côté, lettres ou symboles. R/Légende punique ‘YBSHM accompagnée du nombre 50: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale, tome 2, partie 1</em>.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    },
    "22": {
      "textoIntro": "—Type DCR-73A (Variante de DCR-73 à tête de style languedocien): 3 ex.<br>—Type DCR-75: 3 ex.<br>—Type DCR-81: 2 ex.<br>—DCR-72/93 (Type « cubiste » indéterminé): 3 ex.<br>—DCR-X. Monnaie à la croix en argent ou en argent fourré, de type indéterminé ou indéterminable: 4 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1."
    }
  }
},
{
  "nombre": "Villarzel-Cabardès",
  "lat": 43.278,
  "lng": 2.459,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "18": {
      "textoIntro": "—<em>iltirta</em> (As de bronze au cavalier): 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 2, partie 1.",
      "enlace": "https://www.academia.edu/5906043/Lattara_19_2_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_2_partie_1"
    }
  }
},
  {
  "nombre": "Villeneuve-de-la-Raho",
  "lat": 42.64,
  "lng": 2.96,
  "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  "totalInicial": 1,
  "infoEspecifica": {
    "15": {
      "textoIntro": "Émission monétaire susceptible d’avoir été frappée à <em>Ruscino</em>.<br><br>•<em>Petits bronzes</em><br>—Type IBL-187. M/Br. D/Dauphin à droite dans une couronne de palme; en dessous, H couché. R/Dans un cercle de grènetis, deux cercles unis par un trait ; en dessous, échelle à trois barreaux: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
},
  {
    "nombre": "Villeneuve-les-Avignon",
    "lat": 43.972,
    "lng": 4.787,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
  {
    "nombre": "Villeneuve-sur-Lot",
    "lat": 44.406,
    "lng": 0.706,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
  {
    "nombre": "Villevieille",
    "lat": 43.790,
    "lng": 4.094,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "totalInicial": 1
  },
  {
    "nombre": "Vinça",
    "lat": 42.645,
    "lng": 2.527,
    "valores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    "totalInicial": 1,
    "infoEspecifica": {
      "18": {
        "textoIntro": "—<em>untikesken</em>: 1 ex.",
        "textoPaper": "<span style=\"font-variant: small-caps;\">Hiriart, E.</span> Le développement des monnayages celtiques.",
        "enlace": "https://books.openedition.org/ausonius/23159"
      }
    }
  },
  {
    "nombre": "Yssandon",
    "lat": 45.38,
    "lng": 1.67,
    "valores": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    "totalInicial": 1,
    "infoEspecifica": {
      "16": {
      "textoIntro": "—Type IEM-X. Imitations d’Ampurias de type indéterminé: 1 ex.",
      "textoPaper": "<span style=\"font-variant: small-caps;\">Py, M.</span> <em>Les monnaies préaugustéennes de Lattes et la circulation monétaire protohistorique en Gaule méridionale</em>, tome 1.",
      "enlace": "https://www.academia.edu/5905982/Lattara_19_1_Les_monnaies_pr%C3%A9august%C3%A9ennes_de_Lattes_et_la_circulation_mon%C3%A9taire_protohistorique_en_Gaule_m%C3%A9ridionale_tome_1"
    }
  }
}
];