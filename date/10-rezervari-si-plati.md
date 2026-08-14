# Rezervări și plăți

<!-- ────────────────────────────────────────────────────────────────────────

     CE E AICI:  unde duce butonul de rezervare și ce scrie pe el.

     UNDE SE VEDE
       · bara „Sosire / Plecare / Oaspeți" de sub prima secțiune
       · butonul „Verifică disponibilitatea" din antet, din cardurile de
         cameră și din secțiunea de închidere
       · fereastra care se deschide la click

     ## Rezervări — configurarea
       Tip: formular       cererea vine pe e-mail, plus WhatsApp și telefon
       Tip: link           butonul duce la un site extern. Așa e acum
       Sistem:             care site (booking.com, previo, cloudbeds…)
       Adresă:             linkul complet către pagina locației

     ## Etichete — textele de pe butoane
       Se traduc. Varianta englezească e în en/10-rezervari-si-plati.md

     ## Plăți online — comutatorul
       Activ: nu — plata cu cardul direct pe site e oprită.
     ──────────────────────────────────────────────────────────────────────── -->

## Rezervări

Tip: link
Sistem: booking.com
Adresă: https://www.booking.com/hotel/ro/irish-house-baile-felix.ro.html

<!--
  ── DE CE „LINK" ȘI NU „FORMULAR" ──

  Fiindcă disponibilitatea reală există deja, într-un singur loc: pe Booking. Casa Irlandeză
  n-are motor propriu de rezervări, dar are o pagină de proprietate cu calendar viu, 235 de
  recenzii și anulare gratuită. Un formular de pe site ar fi trimis omul să AȘTEPTE un răspuns,
  când răspunsul e la un click distanță și e instant.

  Asta e și cererea clientului: „la «rezervă online» să ducă la Booking".

  ── CUM SE SCRIE ADRESA ──

  CURATĂ. Tot ce e ÎNAINTE de semnul „?", nimic după. Linkul de mai sus e exact atât.

  Perioada și numărul de oaspeți NU se scriu aici: le adaugă motorul singur, din bara de
  disponibilitate, prin `lib/rezervari/furnizori.ts`. Omul alege 6→8 septembrie și doi oaspeți
  la noi, apasă, și aterizează pe Booking cu perioada aia deja selectată.

  Un link copiat dintr-o sesiune de căutare (cu `?aid=…&checkin=2026-09-06&sid=…` lipite la
  coadă) ar fi trimis FIECARE vizitator pe 6 septembrie 2026, indiferent ce a ales el. Plus
  `sid`, care e identificatorul sesiunii cuiva.

  ── CE ADAUGĂ MOTORUL, ȘI DE CE TOCMAI ASTEA ──

    checkin · checkout · group_adults · group_children=0 · no_rooms=1

  Pe pagina unei proprietăți, Booking selectează perioada DOAR dacă primește setul complet.
  Fără `no_rooms` și `group_children`, cade pe ultima căutare din cookie-ul vizitatorului —
  adică pe alte date decât cele alese la noi, ceea ce e mai rău decât să nu trimiți nimic.

  ── CE RĂMÂNE PE SITE-UL CASEI ──

  Butonul din antet, cel din carduri și cel din închidere deschid întâi un DIALOG, nu direct
  Booking. Dialogul are trei căi: Booking (cu datele completate), WhatsApp (cu mesajul deja
  scris) și telefon. Cine vrea să vorbească cu gazda o face de pe site-ul gazdei, nu de pe
  Booking, unde numărul e ascuns până la confirmare.

  ⚠ Căile de WhatsApp și telefon apar doar după completarea `date/02-telefon-email-si-adresa.md`.
  Acum numerele lipsesc, deci dialogul rămâne cu Booking singur.
-->

## Etichete

Text buton: Verifică disponibilitatea
Sosire: Sosire
Plecare: Plecare
Persoane: Oaspeți
Opțiuni persoane: 1 oaspete, 2 oaspeți, 3 oaspeți, 4 oaspeți, 5+ oaspeți
Asigurări: Anulare gratuită, Fără plată în avans, Acceptăm tichete de vacanță

<!--
  „Asigurări:" sunt cele trei promisiuni scurte de sub bara de disponibilitate. Toate trei sunt
  FAPTE publicate de ei pe Booking, nu promisiuni de serviciu:

    · „Anulare gratuită"        — tariful standard e cu anulare gratuită până cu o zi înainte
    · „Fără plată în avans"     — „Nu plătiți nimic până pe …", pe fiecare tip de cameră
    · „Acceptăm tichete de vacanță" — scris explicit în informațiile lor: „proprietatea
      acceptă tichete de vacanță ca metodă de plată"

  TICHETELE DE VACANȚĂ MERITĂ LOCUL ĂSTA. Aproape nicio pensiune nu le scoate în față, deși
  jumătate dintre angajații din România au tichete pe card și caută activ unde le pot folosi.
  E un filtru de căutare, nu o dotare — omul care le are ajunge la tine tocmai fiindcă scrie.

  N-am pus nimic de tipul „confirmare imediată", „răspundem în aceeași zi" sau „cel mai bun
  preț garantat". Alea ar trebui confirmate cu gazda înainte de a fi scrise public, iar o
  promisiune de viteză nerespectată e prima linie dintr-o recenzie proastă.

  „Mic dejun inclus" ar fi fost a patra, evidentă — dar Booking NU listează micul dejun printre
  servicii, deși recenziile îl pomenesc de trei ori. Se adaugă când gazdele confirmă.
  Vezi nota din 04-camere.md.
-->

## Plăți online

Activ: nu

<!--
  Plata cu cardul direct pe site e OPRITĂ și nu se pornește fără configurare separată: cere
  bază de date, contract cu un procesator și termeni scriși (REGULI.md 15).

  Nici n-are rost aici. Plata se face la fața locului, în numerar sau cu tichete de vacanță,
  ori prin transfer bancar înainte de sosire — așa cum scrie chiar în informațiile lor de pe
  Booking. Cine vrea să plătească cu cardul online o poate face pe Booking, unde infrastructura
  există deja.
-->
