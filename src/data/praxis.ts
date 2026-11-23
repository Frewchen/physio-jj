// Zentrale Praxisdaten – werden später von allen Seiten der neuen Website genutzt.
export const praxis = {
  name: "Physiotherapie Jeannette Jasinski",
  inhaberin: "Jeannette Jasinski",
  strasse: "Scharbeutzer Str. 47",
  plz: "22147",
  ort: "Hamburg",
  telefon: { anzeige: "040 / 320 814 71", href: "tel:+494032081471" },
  mobil: { anzeige: "0151 / 210 572 75", href: "tel:+4915121057275" },
  // E-Mail wird im Browser zusammengesetzt, damit Spam-Bots sie nicht einfach auslesen.
  email: { user: "mail", domain: "physiotherapie-jasinski.de" },
  geo: { lat: 53.600195, lng: 10.144484 },
};

// Rechtliche Angaben für Impressum (§ 5 DDG). Leere Felder werden nicht angezeigt.
export const recht = {
  berufsbezeichnung: "Physiotherapeutin (staatlich anerkannt)",
  verliehenIn: "Bundesrepublik Deutschland",
  // Behörde, die die Erlaubnis zum Führen der Berufsbezeichnung erteilt hat (siehe Urkunde).
  aufsichtsbehoerde: "",
  // Nur angeben, falls vorhanden. Heilbehandlungen sind nach § 4 Nr. 14 UStG steuerfrei.
  ustId: "",
  stand: "November 2026",
};

export const leistungen = [
  "Krankengymnastik auf neurophysiologischer Grundlage",
  "Manuelle Therapie",
  "Manuelle Lymphdrainage",
  "Faszientherapie",
  "Schröpftherapie",
  "Klassische medizinische Massage",
  "Wärme- und Kältetherapie",
  "Kinesio-Taping",
  "Elektrotherapie",
  "Hausbesuche",
  "Mentales GesundheitsCoaching",
  "Ernährung",
  "Ganzheitliches Gesundheitskonzept",
];
