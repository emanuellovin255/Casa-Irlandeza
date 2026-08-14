# Toate paginile site-ului

Douăsprezece feluri de pagini, în două limbi — **24 de adrese**, plus trei fișiere tehnice.
Lista e generată din `sitemap.xml`, deci e exact ce se publică: fiecare adresă de mai jos
răspunde cu 200, iar `canonical`-ul paginii coincide cu adresa din sitemap.

Româna nu are prefix. Engleza are `/en` **și slug-uri traduse** — `/en/rooms`, nu
`/en/camere`.

---

## Paginile de conținut

| Pagina | Română | Engleză | De unde vine |
|---|---|---|---|
| **Prima pagină** | `/` | `/en` | `03-pagina-principala.md` + secțiunile din `setari.md` |
| **Camere** | `/camere` | `/en/rooms` | `04-camere.md` |
| **O cameră** (×3) | `/camere/camera-dubla-deluxe` | `/en/rooms/deluxe-double-room` | `04-camere.md`, blocul camerei |
| | `/camere/camera-tripla-de-lux` | `/en/rooms/luxury-triple-room` | |
| | `/camere/camera-de-familie` | `/en/rooms/family-room` | |
| **Zona** | `/zona` | `/en/area` | `13-zona-si-atractii.md` |
| **Galerie** | `/galerie` | `/en/gallery` | toate pozele din `poze/` |
| **Contact** | `/contact` | `/en/contact` | `14-pagina-de-contact.md` + `02-…` |

> **Slug-urile de cameră diferă între limbi**, fiindcă vin din numele camerei: „Cameră
> Dublă Deluxe" → `camera-dubla-deluxe`, „Deluxe Double Room" → `deluxe-double-room`.
> Dacă redenumești o cameră, se schimbă și adresa ei — vechea adresă începe să dea 404.
> La o cameră deja indexată de Google, adaugă un redirect în `redirecturi.ts`.

---

## Paginile legale

| Pagina | Română | Engleză |
|---|---|---|
| Termeni și condiții | `/termeni` | `/en/terms` |
| Politica de confidențialitate | `/politica-confidentialitate` | `/en/privacy-policy` |
| Politica de cookies | `/politica-cookies` | `/en/cookie-policy` |
| Politica de anulare | `/politica-anulare` | `/en/cancellation-policy` |

Se generează automat, pe legislația RO, din `12-firma-si-documente-legale.md` și din ce e
pornit în `setari.md`. Nu se scriu de mână.

---

## Pagini care există în cod, dar sunt oprite

Nu se generează deloc — nici pagina, nici linkul din meniu, nici intrarea din sitemap.
Se aprind dintr-un singur cuvânt în `setari.md`.

| Pagina | Adresa ar fi | Se aprinde cu | De ce e oprită |
|---|---|---|---|
| **Oferte** | `/oferte` | `Oferte: da` | nu există niciun pachet cu preț — vezi `06-…` |
| **Meniu restaurant** | `/meniu` | `Meniu restaurant: da` | casa n-are restaurant — vezi `07-…` |
| **Evenimente** | `/evenimente` | `Spații de evenimente: da` | nu există informații despre capacități |

Pagina **Mulțumim** (`/multumim`, `/en/thank-you`) apare doar după trimiterea formularului
de contact, deci nu e în sitemap. Formularul însuși se afișează abia după completarea
e-mailului în `02-telefon-email-si-adresa.md`.

---

## Fișiere tehnice

| Adresa | Ce e |
|---|---|
| `/sitemap.xml` | cele 24 de adrese, generate din rutele reale |
| `/robots.txt` | ce are voie să indexeze un crawler |
| `/llms.txt` | rezumatul site-ului pentru asistenții AI |
| `/admin` | panoul de editare din browser — cere `ADMIN_PAROLA` și cheile de GitHub din `.env.example`; fără ele, pagina cere o parolă pe care n-o acceptă nimeni |

---

## Cum verifici că lista asta e încă adevărată

```bash
npm run dev
```

```bash
curl -s http://localhost:3000/sitemap.xml | grep -oE '<loc>[^<]*</loc>' | sed 's/<[^>]*>//g'
```

Fiecare adresă de acolo trebuie să răspundă cu 200. `npm run verifica` prinde oricum
linkurile moarte dintre pagini, dar nu și o adresă listată în sitemap care a rămas fără
pagină — de asta verificarea de mai sus merită făcută după orice redenumire de cameră.
