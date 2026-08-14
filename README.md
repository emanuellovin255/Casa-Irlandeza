# Site-ul Casei Irlandeze — ghid de modificare

Aici stă tot ce se vede pe site: texte, prețuri, poze, program, date de contact.

**Nu trebuie să știi programare ca să schimbi ceva.** Textele se scriu în fișiere
obișnuite, în română, iar site-ul se actualizează singur după ce salvezi.

---

## Înainte de publicare — patru lucruri de la gazde

Site-ul e complet, dar **nu se publică așa**. Îi lipsesc patru informații pe care numai
Florina și Eoghain le pot da. `npm run verifica` le semnalează la fiecare rulare.

| Ce lipsește | Unde se scrie | Ce nu merge fără el |
|---|---|---|
| **Telefon și WhatsApp** | `date/02-telefon-email-si-adresa.md` | butonul verde de WhatsApp, bara de jos de pe telefon, calea „sună" din fereastra de rezervare |
| **E-mail** | `date/02-telefon-email-si-adresa.md` | formularul de pe pagina de contact nu se afișează deloc |
| **Datele firmei** (denumire, CUI, nr. reg. com., sediu) | `date/12-firma-si-documente-legale.md` | obligatorii legal în subsol — lipsa lor e motiv de amendă ANPC |
| **Confirmare pe două puncte** | vezi mai jos | conținut care acum lipsește intenționat |

Cele două de confirmat:

1. **Se servește mic dejun?** Trei recenzii îl pomenesc și există fotografia unui bufet
   întins, dar Booking nu-l listează ca serviciu. Până la confirmare nu apare nicăieri.
   Dacă da: e inclus în tarif sau se plătește separat? între ce ore?
2. **Cele 3 stele au certificat de clasificare?** Steaua vine de pe brelocul cheii
   (scrie „Irish Residence", cu trei stele), nu de pe un certificat văzut de cineva. Dacă nu există
   certificat, se golește rândul `Stele:` din `date/01-…`.

Plus, la publicare: domeniul în `NEXT_PUBLIC_SITE_URL`, iar pentru formular
`DESTINATAR` și `RESEND_API_KEY` (vezi `.env.example`).

---

## Cel mai scurt drum: „vreau să schimb…"

| Vreau să schimb | Deschid fișierul |
|---|---|
| Numele, sloganul, descrierea din Google | [`date/01-nume-logo-si-descriere.md`](date/01-nume-logo-si-descriere.md) |
| Telefonul, WhatsApp-ul, e-mailul, adresa, orele de check-in | [`date/02-telefon-email-si-adresa.md`](date/02-telefon-email-si-adresa.md) |
| Titlul mare de pe prima pagină, poza de sus, „Povestea noastră" | [`date/03-pagina-principala.md`](date/03-pagina-principala.md) |
| Camerele: nume, preț, poze, dotări | [`date/04-camere.md`](date/04-camere.md) |
| **Cercurile cu facilități** (ciubăr, saună, bar, grădină…) | [`date/05-facilitati.md`](date/05-facilitati.md) |
| Pachete și oferte | [`date/06-oferte-si-excursii.md`](date/06-oferte-si-excursii.md) |
| Recenziile și nota medie | [`date/08-recenzii.md`](date/08-recenzii.md) |
| Întrebările frecvente | [`date/09-intrebari-frecvente.md`](date/09-intrebari-frecvente.md) |
| Linkul de Booking și textele butoanelor | [`date/10-rezervari-si-plati.md`](date/10-rezervari-si-plati.md) |
| Culorile și fonturile | [`date/11-culori-si-fonturi.md`](date/11-culori-si-fonturi.md) |
| Datele firmei, CUI, documentele legale | [`date/12-firma-si-documente-legale.md`](date/12-firma-si-documente-legale.md) |
| Atracțiile din zonă (Apollo, Nymphaea, Oradea…) | [`date/13-zona-si-atractii.md`](date/13-zona-si-atractii.md) |
| Textele de pe pagina de contact | [`date/14-pagina-de-contact.md`](date/14-pagina-de-contact.md) |
| **Pozele** | folderul [`poze/`](poze/) → [ghidul de acolo](poze/README.md) |
| **Textele în engleză** | folderul [`en/`](en/) → [ghidul de acolo](en/README.md) |
| Ce secțiuni apar pe prima pagină, în ce ordine | [`setari.md`](setari.md) |

> Fiecare fișier are, chiar în capul lui, o explicație a ceea ce controlează.
> Deschide-l și citește primele rânduri înainte să schimbi ceva.

---

## Regulile de scriere (aceleași în toate fișierele)

Sunt patru, atât:

**1. `##` deschide un element nou.** O cameră, o facilitate, o recenzie, o întrebare.
Ce scrii după `##` devine titlul lui pe site.

**2. `Ceva: valoare` e un câmp.** Numele câmpului dinaintea celor două puncte se lasă
neatins; valoarea de după se schimbă.

```
Preț de la: 275
─────────── ▲
 asta rămâne  asta schimbi
```

**3. Textul liber de sub câmpuri e descrierea.** Un rând gol înseamnă paragraf nou.

**4. Ce e între `<!--` și `-->` sunt explicații pentru tine.** Nu apar niciodată pe site.

**Un câmp lăsat gol dispare de pe site.** Nu apare „gol" sau „—", pur și simplu nu se
afișează nimic. E mai bine să lași gol decât să scrii ceva nesigur.

---

## Cum arată prima pagină, de sus în jos

Ordinea vine din [`setari.md`](setari.md); mutând un rând acolo, secțiunea urcă sau coboară.

| # | Secțiunea | De unde vine |
|---|---|---|
| 1 | Poza mare, titlul, cele două butoane | `03-pagina-principala.md` → `## Prima secțiune` |
| 2 | Bara Sosire / Plecare / Oaspeți | `10-rezervari-si-plati.md` |
| 3 | Banda cu numele camerelor, în mișcare | `04-camere.md` |
| 4 | „Povestea noastră" | `03-pagina-principala.md` |
| 5 | Cifrele (9,6 · 235 · 9,6 · 10 minute) | `03-pagina-principala.md` → `## Bandă de încredere` |
| 6 | Cele trei camere | `04-camere.md` |
| 7 | **Cercurile cu facilități** | `05-facilitati.md` |
| 8 | Mozaicul foto | se strânge singur din pozele deja folosite |
| 9 | Cele trei blocuri poză + text | `03-pagina-principala.md` → `## Feature-uri alternante` |
| 10 | Banda de semnătură | `03-pagina-principala.md` |
| 11 | Băile Felix și ștrandurile Apollo | `13-zona-si-atractii.md` |
| 12 | Recenziile | `08-recenzii.md` |
| 13 | Întrebările frecvente | `09-intrebari-frecvente.md` |
| 14 | Harta | coordonatele din `02-telefon-email-si-adresa.md` |
| 15 | Ultimul îndemn | `03-pagina-principala.md` → `## Secțiunea de închidere` |

Site-ul are **12 feluri de pagini**, în română și engleză — lista completă, cu adrese:
**[PAGINI.md](PAGINI.md)**.

---

## Cum se rezervă

Butoanele „Verifică disponibilitatea" deschid o fereastră cu drumurile către rezervare.
Cel principal duce pe **pagina de Booking a casei, cu perioada aleasă deja completată**:

```
https://www.booking.com/hotel/ro/irish-house-baile-felix.ro.html
  ?checkin=2026-09-06&checkout=2026-09-08&group_adults=2&group_children=0&no_rooms=1
```

Perioada și numărul de oaspeți le adaugă site-ul singur, din bara de sub prima secțiune.
Linkul din `date/10-rezervari-si-plati.md` se scrie **curat**, fără nimic după semnul `?`.

WhatsApp și telefonul apar alături, în aceeași fereastră, imediat ce numerele sunt scrise
în `date/02-telefon-email-si-adresa.md`.

---

## Ce NU se atinge

Folderele astea sunt „motorul" site-ului — codul care ia textele tale și construiește
paginile. Se schimbă doar de către cine se ocupă de partea tehnică.

| Folder | Ce e |
|---|---|
| `app/` | paginile propriu-zise: ce adresă are fiecare pagină |
| `components/` | bucățile refolosibile: antetul, subsolul, cardul de cameră, galeria |
| `lib/` | logica: citirea fișierelor, traducerile, SEO-ul, linkul de Booking |
| `styles/` | stilurile vizuale (culorile concrete vin din `11-culori-si-fonturi.md`) |
| `sabloane/` | felul în care e aranjată prima pagină — vezi mai jos |
| `scripts/` | comenzile de verificare și publicare |
| `public/`, `content/` | fișiere generate automat |

**[`MOTOR-MODIFICAT.md`](MOTOR-MODIFICAT.md) — de citit înainte de orice
`npm run actualizeaza-motor`.** Site-ul ăsta folosește un șablon scris pentru el
(`sabloane/06-irlandez/`) și încă cinci modificări în cod. O actualizare neatentă le
șterge tăcut, iar site-ul cade pe alt aranjament, cu alte fonturi.

---

## Pentru partea tehnică

```bash
npm install
```

```bash
npm run dev
```

Site-ul pornește pe `http://localhost:3000`.

Înainte de fiecare publicare:

```bash
npm run verifica
```

Verifică texte lipsă, poze inexistente, linkuri moarte, contrastul culorilor, obligațiile
legale și bugetul de performanță. Raportul spune fișierul, rândul și ce e de făcut.

**Acum trebuie să iasă cu 2 erori și 2 avertismente** — telefonul și datele firmei, adică
exact cele patru lucruri din tabelul de sus. Orice altceva înseamnă că s-a stricat ceva.
