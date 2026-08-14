/**
 * Redirect-uri 301 de pe site-ul vechi.
 *
 * Cum se folosește, în next.config.ts:
 *   import { redirecturi } from './redirecturi'
 *   const config: NextConfig = { …, async redirects() { return redirecturi } }
 *
 * ── LISTA E GOALĂ, ȘI E CORECT ────────────────────────────────────────────
 *
 * Casa Irlandeză N-ARE SITE VECHI. Singura ei prezență online e pagina de
 * proprietate de pe Booking.com, care rămâne acolo unde e: nu se migrează un
 * URL de pe booking.com pe domeniul clientului, iar Booking n-ar respecta
 * niciun redirect al nostru chiar dacă am scrie unul.
 *
 * Deci nu e nimic de redirecționat. Nu există URL-uri vechi care să piardă
 * poziții, ceea ce e și partea bună a situației: site-ul pornește curat, fără
 * moștenirea de rute stricate pe care o are orice WordPress de zece ani.
 *
 * ── CÂND SE COMPLETEAZĂ ───────────────────────────────────────────────────
 *
 * Dacă apare vreodată un site vechi de care nu știam — o pagină de Facebook cu
 * un domeniu în descriere, un microsite făcut de altcineva — se rulează
 * `npm run migrare` peste el și lista se generează, apoi SE DECIDE MANUAL ce
 * rămâne.
 *
 * REGULA CARE NU SE OCOLEȘTE: niciun redirect nu duce în bloc spre „/".
 * `scripts/migrare.ts:14` e explicit — un 301 în bloc spre prima pagină e
 * tratat de Google drept soft 404, adică un semnal mai prost decât un 404
 * curat. Paginile fără conținut nu primesc redirect; ies din index singure.
 *
 * Și nu se scriu aici căi care nu se schimbă („/" → „/", „/contact" →
 * „/contact"): un redirect de la o cale către ea însăși e o buclă infinită,
 * nu o migrare.
 */

// Forma acceptată de `redirects()` din next.config — tipată local, ca
// fișierul să nu depindă de căi interne din Next.
export interface Redirect301 {
  source: string
  destination: string
  permanent: true
}

export const redirecturi: Redirect301[] = []
