# Modificări de motor — Casa Irlandeză

Motorul (`app/`, `components/`, `lib/`, `styles/`, `scripts/`, `content/`) e cod comun,
propagat între site-uri cu `npm run actualizeaza-motor`. Ce e scris mai jos **iese din
tiparul ăla**: sunt locuri în care codul comun a fost atins pentru site-ul ăsta.

> **ATENȚIE — un `npm run actualizeaza-motor` neatent le șterge pe toate.** Nu cade nimic zgomotos:
> site-ul se rebuildează, dar cade tăcut pe șablonul 2, cu alte fonturi și altă paletă.
> Înainte de orice actualizare de motor, se citește fișierul ăsta și se reaplică punctele
> **1–4**. Punctul 5 e o notă despre ceva ce NU s-a atins, iar punctele 6 și 7 sunt corecții
> care ar trebui duse în motor, nu reaplicate aici la fiecare client.

---

## 1 · Șablonul 6 „Irlandez" — folder nou

**`sabloane/06-irlandez/`** — cinci fișiere, complet noi:

| Fișier | Ce e |
|---|---|
| `Sablon.tsx` | layout-ul primei pagini |
| `skin.css` | tot skin-ul, încapsulat sub `.skin-irlandez` |
| `HeroIrlandez.tsx` | hero full-bleed, titlu în trepte, marginea ruptă de hârtie |
| `MarchizaCamere.tsx` | banda cu numele camerelor, în mișcare lentă |
| `CifreCrescatoare.tsx` | numărătoarea din banda de încredere (singurul JS) |

**De ce există**, când motorul avea deja cinci șabloane: cerința clientului a fost „stil
irlandez, în stilul lui zagazaga.ro". Cele cinci existente sunt aranjamente de pensiune
românească — titluri la corp mediu, carduri rotunjite, fundal alb. Niciunul nu dă limbajul
cerut: titluri de afiș în majuscule, hârtie cu textură, margini rupte, grilă de cercuri.

Folderul e izolat: nu-l atinge nimic din motor și nu atinge nimic din motor.

---

## 2 · Dispecerul de șabloane

**`app/[limba]/page.tsx`** — două linii:

```ts
import { SablonIrlandez } from '@sabloane/06-irlandez/Sablon'

const SABLOANE: Record<1 | 2 | 3 | 4 | 5 | 6, …> = { …, 6: SablonIrlandez }
```

**`app/[limba]/layout.tsx`** — o linie, importul skin-ului:

```ts
import '../../sabloane/06-irlandez/skin.css'
```

---

## 3 · Tipul șablonului

**`lib/continut/setari.ts`** — două locuri:

```ts
sablon: 1 | 2 | 3 | 4 | 5 | 6          // era …| 5
…
sablonBrut === 6                        // adăugat în validare
```

Fără al doilea, `Șablon: 6` din `setari.md` e respins tăcut și se cade pe implicitul 2.

---

## 4 · Perechea de fonturi „irlandez"

**`content/types.ts`**:

```ts
character: 'classic' | 'contemporary' | 'warm' | 'coastal' | 'irlandez'
```

**`scripts/lib/fonts.ts`** — o intrare nouă în `PAIRINGS`: **Anton** (display) + **Abhaya
Libre** (text).

**De ce nu s-a putut doar scrie numele fonturilor în `date/11-culori-si-fonturi.md`**, cum
permite motorul: pentru un font care nu e al niciunei perechi, `tipografie()` construiește
specificația cu `spec(display, '400;700')`. Anton **are doar greutatea 400**, iar Google
Fonts răspunde `400 Bad Request` la o greutate care nu există — `installFonts` aruncă și
build-ul cade. Perechea scrisă explicit fixează `Anton:wght@400`.

Ambele fonturi expun `latin-ext`, deci Ș ș Ț ț cu virgulă dedesubt se randează. Verificat pe
răspunsul Google, nu presupus. Cele șase fișiere `.woff2` (68 KB) sunt commise în
`public/fonts/`, deci un clone curat se buildează fără rețea.

---

## 5 · Ce NU s-a atins, deși ar fi meritat

**`styles/base.css`, regula `.hero-inner`** are:

```css
.hero-inner { width: 100%; padding: 120px 0 40px; }
```

Scurtătura `padding` **anulează `padding-inline: var(--container-pad)` de pe `.wrap`**, cu
care elementul e mereu combinat (`class="wrap hero-inner …"`). Rezultatul: titlul și
subtitlul din prima secțiune ating marginile ecranului, fără spațiu — cel mai vizibil pe
telefon, unde măsurat dădea `left: 0` la 375px lățime.

**Bug-ul e al motorului și afectează toate cele șase șabloane.** Nu l-am reparat în
`base.css`, fiindcă e cod comun tuturor clienților și o schimbare acolo trebuie reverificată
pe fiecare site livrat. L-am reparat **scoped**, în `sabloane/06-irlandez/skin.css`, cu
`padding-block` + `padding-inline` în loc de scurtătură.

**De făcut la o revizie de motor**: aceeași corecție în `base.css`, apoi scoasă din skin.

---

## 6 · Corecție în verificator (nu e o adaptare, e o eroare reparată)

**`scripts/verifica.ts`, funcția `continutDate`** — a primit parametrul `setari` și iese
devreme când modulul de galerie e pornit:

```ts
if (setari.module.galerieExtinsa) return
```

**Ce repară**: verificarea „poze nefolosite" număra doar sigla, hero-ul, camerele, ofertele,
feature-urile și clipul. Nu știa nici de pagina de galerie, nici de banda de semnătură, nici
de pozele atracțiilor din `13-zona-si-atractii.md`.

Dar `app/[limba]/galerie/page.tsx` construiește galeria din **toate** pozele din `poze/` —
e chiar rostul ei, scris în comentariul de acolo: „pozele bune care n-au încăput în nicio
secțiune". Cu `Galerie extinsă: da`, nicio poză nu e nefolosită.

La Casa Irlandeză, cu 65 de poze, raporta **41 de fișiere** drept „greutate inutilă". Toate
41 erau, de fapt, pagina `/galerie`.

Un verificator care dă 41 de note false e mai rău decât unul care tace: se învață să fie
ignorat, și odată cu el se ignoră și nota adevărată de data viitoare.

**Asta ar trebui dusă în motor**, nu reaplicată aici — e o eroare care afectează orice
client cu galeria pornită.

---

## 7 · Corecție în sitemap (tot o eroare reparată, nu o adaptare)

**`lib/seo/rute.ts` (`ruteCuLimbi`) și `app/sitemap.ts`.**

Varianta veche construia rutele **o singură dată, din datele românești**, apoi prefixa
totul cu `/en`. Asta rata două lucruri:

1. **segmentul** se traduce — `/camere` devine `/en/rooms`, nu `/en/camere`;
2. **slug-ul** vine din numele elementului, care e tradus — camera „Cameră Dublă Deluxe"
   e `camera-dubla-deluxe`, dar „Deluxe Double Room" e `deluxe-double-room`.

Măsurat pe site-ul ăsta, înainte de reparație, sitemap-ul conținea:

```
/en/camere/camera-dubla-deluxe      → 404
/en/camere/camera-tripla-de-lux     → 404
/en/camere/camera-de-familie        → 404
```

Trei adrese trimise crawler-ului direct în 404. Restul rutelor englezești existau, dar
`/en/camere` canonicaliza spre `/en/rooms` — deci sitemap-ul contrazicea canonical-ul
paginii, ceea ce Google tratează ca semnal confuz.

`ruteCuLimbi` primește acum o funcție care întoarce datele **încărcate în limba cerută**,
iar calea trece prin `traduSegment`. Paginile legale primesc o excepție: ele vin din date
deja ca adrese publice, cu prefixul pus, și se dublau în `/en/en/terms`.

**Verificare, după orice atingere a rutelor** — fiecare adresă din sitemap trebuie să dea
200:

```bash
curl -s localhost:3000/sitemap.xml | grep -oE '<loc>[^<]*</loc>' | sed 's/<[^>]*>//g' \
  | sed 's|http://localhost:3000||' \
  | while read u; do echo "$(curl -s -o /dev/null -w '%{http_code}' localhost:3000$u) $u"; done
```

**Rămas nereparat, minor**: paginile legale (`/termeni`, `/en/terms` etc.) nu emit deloc
`<link rel="canonical">`. Nu e o contradicție — Google se auto-canonicalizează — dar e o
inconsecvență față de restul site-ului, care îl are peste tot.

---

## Cum se verifică că totul e la locul lui, după o actualizare de motor

```bash
npm run verifica
```

Trebuie să iasă cu **2 erori și 2 avertismente** — telefonul și datele firmei, care se
așteaptă de la client (vezi `date/02-…` și `date/12-…`). Orice altceva înseamnă că s-a
pierdut ceva de mai sus.

Semnele că șablonul 6 a fost șters: prima pagină n-are titlu în majuscule, fundalul e alb în
loc de crem, facilitățile apar ca niște carduri în loc de cercuri.
