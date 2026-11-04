export const COMPANY = {
  name: "Schreinerei Embs",
  legal: "Achim Embs GmbH & Co KG",
  founded: 1998,
  succession: 2020,
  teamSize: 13,
  owner: "Christian Wagner",
  foundedBy: "Achim Embs",
  address: {
    street: "Zum Gerlen 8",
    zip: "66131",
    city: "Saarbrücken-Ensheim",
  },
  contact: {
    phone: "06893-70656",
    phoneDisplay: "+49 6893 70656",
    fax: "06893-70659",
    email: "info@schreinerei-embs.de",
  },
  hours: [
    { label: "Montag — Donnerstag", value: "07:30 — 16:30" },
    { label: "Freitag", value: "07:30 — 14:00" },
  ],
};

export type Bereich = {
  slug: string;
  number: string;
  title: string;
  kicker: string;
  claim: string;
  lead: string;
  essence: string[];
  intention: string;
  focus: string[];
};

export const BEREICHE: Bereich[] = [
  {
    slug: "innenausbau",
    number: "01",
    title: "Innenausbau & Treppen",
    kicker: "Architektur im Detail",
    claim: "Formschön. Funktionell. Attraktiv.",
    lead:
      "Räume entstehen, wo Material präzise auf Architektur trifft. Wir setzen Einbauten, Wandverkleidungen und Treppen so, dass sie zum ruhigen Rückgrat eines Hauses werden.",
    essence: [
      "Freitragende und gewendelte Treppen",
      "Einbauschränke, Garderoben, Wandpaneele",
      "Türen, Zargen, Sondermaße",
      "Decken- und Bodendetails in Vollholz",
    ],
    intention:
      "Wir planen Innenausbau als Fortsetzung der Architektur. Jede Kante, jedes Profil, jede Oberfläche greift in die Linie des Raumes ein — nicht neben ihr.",
    focus: ["Planung", "Vorfertigung in der Werkstatt", "Montage vor Ort"],
  },
  {
    slug: "kuechen",
    number: "02",
    title: "Küchen",
    kicker: "Alltag als Komposition",
    claim: "Jeden Tag den Gaumen verwöhnen.",
    lead:
      "Die Küche ist der Raum, an dem Material, Wärme und Gebrauch zusammenfallen. Wir entwerfen sie so, dass sie Handwerk zeigt und gleichzeitig unaufgeregt funktioniert.",
    essence: [
      "Vollholz- und Furnierfronten",
      "Mineralwerkstoff-, Stein- und Massivholzarbeitsplatten",
      "Individuelle Innenorganisation",
      "Integration von Markengeräten",
    ],
    intention:
      "Wir bauen Küchen für Menschen, die wissen, wie sie kochen. Jede Tiefe, jede Griffkante, jede Beleuchtung folgt diesem Gebrauch — nicht einem Katalog.",
    focus: ["Konzeption", "Materialmuster vor Ort", "Komplettmontage"],
  },
  {
    slug: "moebel",
    number: "03",
    title: "Möbel",
    kicker: "Ein lebendiger Werkstoff",
    claim: "Holz. Farben. Texturen. Einsatz ohne Grenzen.",
    lead:
      "Einzelmöbel fallen auf, weil sie Ruhe mitbringen. Wir arbeiten in Vollholz, feinen Furnieren und präzisen Beschlägen — in Proportionen, die bleiben.",
    essence: [
      "Sideboards, Schränke, Lowboards, Vitrinen",
      "Massivholz in Eiche, Nussbaum, Esche, Ahorn",
      "Furniertechniken und Oberflächenfinish",
      "Beschläge aus Deutschland und Italien",
    ],
    intention:
      "Ein Möbel von Embs wird nicht ersetzt, weil es aus der Mode fällt. Es wird weitergegeben, weil es gebaut ist, um weitergegeben zu werden.",
    focus: ["Entwurf", "Materialwahl", "Finish"],
  },
  {
    slug: "badmoebel",
    number: "04",
    title: "Badmöbel",
    kicker: "Wohnen im Bad",
    claim: "Wir entwerfen das Bad, in dem man lebt.",
    lead:
      "Das Bad verdient die gleiche Präzision wie ein Wohnraum. Wir bauen Waschtische, Schränke und Wandlösungen, die Feuchteresistenz, Proportion und ruhige Oberflächen zusammenführen.",
    essence: [
      "Waschtische aus Massivholz, Mineralwerkstoff, Stein",
      "Hoch- und Unterschränke, Wandpaneele",
      "Spiegel, Lichtführung, verdeckte Beschläge",
      "Materialien mit Feuchteresistenz und Oberflächenschutz",
    ],
    intention:
      "Wir planen Badmöbel wie Innenausbau: millimetergenau in die Wand, in die Lichtführung, in den Alltag — nicht davor gestellt.",
    focus: ["Aufmaß", "Materialabstimmung", "Montage mit Installateur"],
  },
  {
    slug: "buero",
    number: "05",
    title: "Büro",
    kicker: "Arbeiten mit Haltung",
    claim: "Arbeiten mit Stil. Sich fühlen wie zu Hause.",
    lead:
      "Ein Büro, das Konzentration erlaubt, ist ein gestaltetes Büro. Wir bauen Empfang, Konferenz, Einzelplatz und Archiv als zusammenhängende Materialwelt.",
    essence: [
      "Empfangs- und Konferenztresen",
      "Arbeitsplatzsysteme, Akustik, Stauraum",
      "Trennwände und Wandverkleidungen",
      "Firmenidentität im Material",
    ],
    intention:
      "Ein Büro kommuniziert, bevor jemand spricht. Wir setzen die Materialität so, dass sie das Unternehmen darstellt — ohne es zu zitieren.",
    focus: ["Raumplanung", "Akustik und Licht", "Serienfertigung"],
  },
  {
    slug: "ladenbau",
    number: "06",
    title: "Gaststätten & Ladenbau",
    kicker: "Ganzheitliche Konzepte",
    claim: "Die Ware tritt nach vorne.",
    lead:
      "Ein Lokal oder ein Geschäft funktioniert, wenn das Mobiliar in den Hintergrund tritt und dem Produkt den Raum lässt. Wir planen und bauen die Bühne, nicht das Spektakel.",
    essence: [
      "Theken, Tresen, Bar- und Service-Stationen",
      "Regale, Vitrinen, Warenpräsentation",
      "Wand- und Deckenpanele, Sitzbänke",
      "Material mit Gebrauchsresistenz",
    ],
    intention:
      "Wir denken im Betrieb mit: Reinigung, Verschleiß, Logistik, Service. Erst dann folgt die Form — und sie folgt ihr ohne Kompromiss.",
    focus: ["Konzept", "Werkstattfertigung", "Komplettmontage vor Ort"],
  },
  {
    slug: "schlafzimmer",
    number: "07",
    title: "Schlaf- & Kinderzimmer",
    kicker: "Dort, wo man zu Hause ist",
    claim: "Wo der Mensch viel Zeit verbringt, soll er auch zu Hause sein.",
    lead:
      "Das Zimmer, in dem geschlafen wird, braucht ruhige Oberflächen, Ordnung ohne Aufwand und Material, das nicht ermüdet. Wir bauen begehbare Schränke, Betten, Garderoben als Teil des Raumes.",
    essence: [
      "Begehbare Kleiderschränke",
      "Betten, Nachttische, Kommoden",
      "Kinderzimmer mit Wachstumslogik",
      "Materialien mit emissionsarmer Oberfläche",
    ],
    intention:
      "Ein Schlafzimmer ist eine persönliche Zone. Wir entwerfen es als solche — nicht als Zusammenstellung einzelner Möbel.",
    focus: ["Aufmaß", "Innenorganisation", "Montage"],
  },
  {
    slug: "tische",
    number: "08",
    title: "Tische",
    kicker: "Platz für Stunden",
    claim: "Unsere Tische laden ein.",
    lead:
      "Ein Tisch ist das Möbel, um das sich der Rest ordnet. Wir fertigen ihn aus einem Baum, einer Platte, einem Gedanken — und bauen die Gestelle, die ihn tragen, ohne ihn zu überlagern.",
    essence: [
      "Massivholztische, Baumkanten, Einzelstücke",
      "Mehrbeiner, Kufen, Säulen, Stahlgestelle",
      "Furniertische in Reihe",
      "Oberflächenöle und Hartwachsfinish",
    ],
    intention:
      "Wir bauen Tische so, dass sie nicht in jede Küche passen — sondern in genau die eine, in der sie stehen werden.",
    focus: ["Baumauswahl", "Trocknung und Aufbau", "Finish"],
  },
];

export const NAV = [
  { href: "/", label: "Startseite" },
  { href: "/werk", label: "Werk" },
  { href: "/werkstatt", label: "Werkstatt" },
  { href: "/kontakt", label: "Kontakt" },
];
