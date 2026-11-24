// Texte der Website. Grundlage: start.md (Angaben von Jeannette).
// Alles, was mit "PRÜFEN" markiert ist, bitte vor der Veröffentlichung von Jeannette bestätigen lassen.

export interface Leistung {
  titel: string;
  text: string;
  icon: string; // Dateiname aus lucide-static/icons (ohne .svg)
}

export interface LeistungsGruppe {
  titel: string;
  intro: string;
  leistungen: Leistung[];
}

export const leistungsGruppen: LeistungsGruppe[] = [
  {
    titel: "Physiotherapie",
    intro: "Aktive und manuelle Behandlung für Beweglichkeit, Kraft und weniger Schmerzen.",
    leistungen: [
      {
        titel: "Krankengymnastik auf neurophysiologischer Grundlage",
        text: "Gezielte Übungstherapie, die Bewegungsabläufe über das Nervensystem neu anbahnt und Koordination, Kraft und Gleichgewicht verbessert.",
        icon: "activity",
      },
      {
        titel: "Manuelle Therapie",
        text: "Sanfte Mobilisation von Gelenken und Wirbelsäule, um Blockaden zu lösen und die natürliche Beweglichkeit wiederherzustellen.",
        icon: "hand",
      },
      {
        titel: "Manuelle Lymphdrainage",
        text: "Sanfte Entstauungstherapie, die den Lymphfluss anregt – zum Beispiel bei Schwellungen oder nach Operationen.",
        icon: "droplets",
      },
      {
        titel: "Faszientherapie",
        text: "Behandlung des Bindegewebes, um Verklebungen zu lösen und Spannungen im ganzen Körper auszugleichen.",
        icon: "layers",
      },
    ],
  },
  {
    titel: "Ergänzende Therapien",
    intro: "Bewährte Anwendungen, die die Behandlung unterstützen und Beschwerden lindern.",
    leistungen: [
      {
        titel: "Klassische medizinische Massage",
        text: "Lockert verspannte Muskulatur, fördert die Durchblutung und sorgt für spürbare Entspannung.",
        icon: "heart-pulse",
      },
      {
        titel: "Schröpftherapie",
        text: "Traditionelles Verfahren, das die Durchblutung anregt und hartnäckige Verspannungen löst.",
        icon: "circle-dot",
      },
      {
        titel: "Wärme- und Kältetherapie",
        text: "Wärme entspannt und durchblutet, Kälte beruhigt Reizungen – gezielt eingesetzt je nach Beschwerdebild.",
        icon: "thermometer-sun",
      },
      {
        titel: "Kinesio-Taping",
        text: "Elastische Tapes unterstützen Muskeln und Gelenke im Alltag, ohne die Bewegung einzuschränken.",
        icon: "sticky-note",
      },
      {
        titel: "Elektrotherapie",
        text: "Sanfte Reizströme zur Schmerzlinderung und zur Aktivierung der Muskulatur.",
        icon: "zap",
      },
    ],
  },
  {
    titel: "Ganzheitlich & mental",
    intro: "Weil Heilung nicht nur im Körper stattfindet.",
    leistungen: [
      {
        titel: "Mentales GesundheitsCoaching",
        text: "Innere Blockaden erkennen und lösen, die Genesung und Heilung im Weg stehen – integriert in die Therapie oder als eigenes Angebot.",
        icon: "brain",
      },
      {
        titel: "Ernährung",
        text: "Impulse für eine Ernährung, die Ihren Körper im Heilungsprozess und im Alltag unterstützt.",
        icon: "apple",
      },
      {
        titel: "Ganzheitliches Gesundheitskonzept",
        text: "Therapie, Bewegung, mentale Stärke und Ernährung – abgestimmt zu einem Plan, der zu Ihrem Leben passt.",
        icon: "sparkles",
      },
    ],
  },
];

// Flache Liste (z. B. für Kurzübersichten)
export const leistungen = leistungsGruppen.flatMap((g) => g.leistungen.map((l) => l.titel));

// Häufige Beschwerden – angelehnt an start.md. PRÜFEN: Liste ergänzen/kürzen.
export const beschwerden = [
  "Rückenschmerzen",
  "Nacken- und Schulterverspannungen",
  "Wirbelblockaden",
  "Bandscheibenvorfälle",
  "Arthrose in Knie, Hüfte oder Schulter",
  "Gelenkbeschwerden",
  "Nachbehandlung von Knochenbrüchen",
  "Rehabilitation nach Operationen",
  "Schwellungen und Lymphödeme",
  "Muskelverspannungen",
  "Stress und innere Anspannung",
];

export const ansatz = [
  {
    titel: "Körper",
    text: "Manuelle Techniken und gezielte Übungen für Beweglichkeit, Kraft und weniger Schmerzen.",
    icon: "person-standing",
  },
  {
    titel: "Kopf",
    text: "Mentales GesundheitsCoaching, um innere Blockaden zu lösen und neue Kraft zu schöpfen.",
    icon: "brain",
  },
  {
    titel: "Ernährung",
    text: "Was Sie essen, beeinflusst Ihre Regeneration – kleine Veränderungen mit großer Wirkung.",
    icon: "leaf",
  },
  {
    titel: "Vorbeugung",
    text: "Übungen und Gewohnheiten für zu Hause, damit Beschwerden gar nicht erst wiederkommen.",
    icon: "shield-check",
  },
];

// PRÜFEN: Ablauf und Mitbringliste
export const ablauf = [
  {
    titel: "Termin vereinbaren",
    text: "Rufen Sie mich an oder schreiben Sie mir. Gemeinsam finden wir einen passenden Termin – auf Wunsch auch bei Ihnen zu Hause.",
  },
  {
    titel: "Befund & Gespräch",
    text: "Ich nehme mir Zeit für Ihre Geschichte, untersuche Sie gründlich und bespreche mit Ihnen die Ziele der Behandlung.",
  },
  {
    titel: "Individuelle Behandlung",
    text: "Aus meinem Therapieangebot stelle ich die Behandlung zusammen, die zu Ihren Beschwerden und Ihrem Alltag passt.",
  },
  {
    titel: "Selbst aktiv werden",
    text: "Sie erhalten Übungen und Tipps für zu Hause, damit der Erfolg der Therapie lange anhält.",
  },
];

export const mitbringen = [
  "Ärztliche Verordnung (Rezept), falls vorhanden",
  "Relevante Arztberichte oder Befunde",
  "Ein großes Handtuch",
  "Bequeme Kleidung",
];
