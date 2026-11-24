// Baut interne Links so, dass die Seite auch in einem Unterordner funktioniert
// (z. B. für die nicht öffentliche Vorschau). Aufruf: url("/impressum/")
const basis = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(pfad: string): string {
  return `${basis}${pfad.startsWith("/") ? pfad : `/${pfad}`}`;
}

// true, wenn die Seite als Vorschau gebaut wird (VORSCHAU=1)
export const istVorschau = process.env.VORSCHAU === "1";
