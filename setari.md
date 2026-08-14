# Setări — ce secțiuni apar pe site și în ce ordine

<!-- ────────────────────────────────────────────────────────────────────────

     CE E AICI:  comutatoarele site-ului. Aici nu se scrie text de pe
                 site — aici se hotărăște CE secțiuni se afișează, în
                 CE ORDINE, și ce pagini întregi există.

     TEXTELE sunt în folderul date/. Vezi date/README.md.

     CUM SE CITEȘTE UN RÂND
       Ceva: da     secțiunea sau pagina se afișează
       Ceva: nu     nu se afișează nicăieri — nici secțiunea, nici
                    linkul din meniul de sus

     TREI GRUPURI, mai jos:

       ## Șablon      felul în care e aranjată prima pagină

       ## Module      pagini și funcții întregi: galeria, pagina
                      „Zona", engleza, meniul restaurantului, plățile

       ## Secțiuni pe prima pagină   ORDINEA RÂNDURILOR DE ACOLO E
                      ORDINEA DE PE SITE. Muți un rând mai sus,
                      secțiunea urcă pe pagină. Ștergi rândul,
                      secțiunea dispare, iar textele ei rămân
                      neatinse în date/
     ──────────────────────────────────────────────────────────────────────── -->

---

## Șablon

Șablon: 6

<!--
  1 = Hero Video              resorturi mari, hoteluri 4-5*, spa. Doar cu filmări bune
  2 = Poveste alternantă      pensiuni, boutique, locații cu o poveste
  3 = Galerie editorială      cabane, chalet-uri, locații spectaculoase
  4 = Carusel editorial       locații cu mai multe lucruri de vândut deodată
  5 = Termal                  un singur cadru de dronă, ținut în mișcare lentă
  6 = Irlandez                scris pentru locul ăsta: afiș de pub, hârtie, grilă de cercuri

  DE CE 6. Cerința clientului a fost „stil irlandez, în stilul lui zagazaga.ro". Niciunul
  dintre cele cinci șabloane existente nu dă asta: toate sunt aranjamente de pensiune
  românească, cu titluri la corp mediu și carduri rotunjite.

  Șablonul 6 are patru lucruri care nu există în celelalte:
    · titluri uriașe, în majuscule, la un font de afiș (Anton)
    · fundal de hârtie, cu o textură fină, și margini rupte între secțiuni
    · GRILA DE CERCURI pentru facilități — semnătura vizuală a referinței
    · o bandă cu numele camerelor, în mișcare lentă

  UNDE STĂ: `sabloane/06-irlandez/`. Efectele sunt scrise în `skin.css`, tot ce mișcă se
  oprește sub `prefers-reduced-motion`, iar singurul JavaScript e numărătoarea din banda de
  încredere — cifrele sunt în HTML de la server, deci fără JS pagina rămâne întreagă.

  ⚠ Șablonul 6 e o MODIFICARE DE MOTOR, documentată în MOTOR-MODIFICAT.md. Un
  `npm run actualizeaza-motor` neatent îl șterge, iar site-ul cade tăcut pe șablonul 2.
-->

---

## Module

Meniu restaurant: nu
Spații de evenimente: nu
Galerie extinsă: da
Pagina „Zona" (atracții și distanțe): da
Engleză: da
Plăți online: nu

<!--
  Un modul pe „nu" nu se afișează deloc — nici secțiunea, nici linkul din meniu, nici ruta.
  Nu e ascuns cu CSS: pur și simplu nu se generează.

  Meniu restaurant  → NU. Casa n-are restaurant. Are bar, sală de mese și terasă cu grătar,
                      dar alea sunt spații, nu un local care vinde mâncare. Vezi
                      date/07-meniu-restaurant.md.

  Galerie extinsă   → PORNIT. Pagina /galerie, construită din cele 65 de fotografii din poze/,
                      alese din cele 285 pe care le au pe Booking. E cel mai bogat lucru pe
                      care îl are locul: ciubăr, saună, terasă cu cuptor, curte cu trambulină,
                      trei tipuri de cameră, băi, spații comune. Mozaicul de pe prima pagină
                      trimite către ea.

  Pagina „Zona"     → PORNIT. Cea mai valoroasă pagină de SEO de pe site: prinde căutările
                      „ce vizitezi în Băile Felix" și „aquapark Oradea", care vin ÎNAINTEA
                      căutării „unde dorm" și pe care o pensiune le poate câștiga, spre
                      deosebire de „hotel Băile Felix". Conținutul e în
                      date/13-zona-si-atractii.md.

  Engleză           → PORNIT, și e singurul site din folderul ăsta unde decizia e evidentă:
                      unul dintre gazde e irlandez. Booking listează cinci limbi vorbite —
                      română, engleză, germană, franceză, italiană. Nu aducem cereri la care
                      n-are cine să răspundă: chiar el răspunde.
                      Băile Felix primesc constant turiști maghiari, austrieci și israelieni.

  Spații evenimente → NU. Există terasa cu mese lungi și sala de mese, dar nu există nicio
                      informație despre capacități, tarife sau organizare de evenimente.
                      ⚠ MERITĂ ÎNTREBAT: primesc grupuri organizate, nunți mici, botezuri?
                      Fotografiile arată mese puse pentru douăzeci de oameni și un cort
                      gonflabil pentru copii — pare că da, dar „pare" nu se publică.

  Plăți online      → NU se pornește fără configurare separată. Cere bază de date și contract
                      cu un procesator (regula 15). Rezervarea merge pe Booking, unde plata
                      există deja; la fața locului se plătește numerar sau cu tichete de
                      vacanță. Vezi date/10-rezervari-si-plati.md.
-->

---

## Secțiuni pe prima pagină

Ordinea de aici e ordinea din site. Șterge un rând ca să scoți secțiunea.

Bloc de rezervare: da
Povestea noastră: da
Bandă de încredere: da
Camere: da
Facilități: da
Mozaic foto: da
Serviciile noastre: da
Feature-uri alternante: da
Bandă de semnătură: da
Locație: da
Recenzii: da
Întrebări frecvente: da
Hartă: da
Secțiune de închidere: da

<!--
  Bloc de rezervare  → NU e o secțiune ca celelalte: e bara de disponibilitate de imediat sub
  prima secțiune, iar poziția ei e fixă, deci rândul nu se poate muta.
  Aici chiar duce undeva: sosire, plecare, oaspeți, iar butonul deschide pagina de Booking cu
  perioada aleasă deja selectată. Vezi date/10-rezervari-si-plati.md.

  ORDINEA DE MAI SUS, ȘI DE CE E AȘA:

  1. POVESTEA — prima, imediat sub hero. La locul ăsta povestea NU e un ornament: din 235 de
     recenzii, majoritatea vorbesc despre gazde, iar „Personal 9,6" e cea mai mare notă pe
     categorii. E singurul argument pe care Booking nu-l poate arăta, deci merge sus.

  2. BANDA DE ÎNCREDERE — cifrele imediat după poveste. Povestea convinge emoțional, cifrele
     confirmă. În ordinea inversă, cifrele ar fi fost doar niște numere.

  3. CAMERE înaintea FACILITĂȚILOR. Omul care a ajuns aici caută întâi unde doarme și cât
     costă. Ciubărul îl convinge, dar abia după ce a văzut că are unde încăpea cu familia.

  4. FACILITĂȚI — grila de cercuri, secțiunea-semnătură a șablonului. La celelalte site-uri din
     folder a fost SCOASĂ, fiindcă repeta serviciile. Aici e invers: casa chiar are ce arăta
     (ciubăr, saună, bar, cuptor, loc de joacă), iar pe Booking toate astea sunt două rânduri
     într-o listă de bifat.

  5. MOZAIC FOTO — cinci fotografii, puse în drum, exact în momentul în care omul tocmai a
     citit despre camere și facilități și se întreabă cum arată de fapt. Trimite spre /galerie.

  6. BANDA DE SEMNĂTURĂ — după feature-uri, ca respiro înainte de „Locație". O poză lată cu o
     singură propoziție.

  7. ÎNTREBĂRI FRECVENTE — pornită, spre deosebire de celelalte site-uri din folder. Aici are
     ce răspunde: unsprezece întrebări reale, toate din regulile publicate de ei (check-in,
     tichete de vacanță, animale, fumat, copii, paturi suplimentare, acte la sosire).
     Google le poate arăta direct în rezultate — dar numai fiindcă secțiunea chiar se vede în
     pagină. Schema de FAQ se generează exact pe condiția asta.

  8. HARTĂ — la final, înainte de închidere. Adresa e ultima informație de care are nevoie
     cineva care a citit deja camerele și facilitățile.

  Secțiuni care EXISTĂ, dar sunt oprite: oferte, excursii, clip de prezentare, meniu
  restaurant, spații de evenimente. Textele lor sunt neatinse în date/ — se readuc scriind
  rândul la loc, în ordinea dorită.
-->

---

## Altele

Buton WhatsApp: da
Analytics: nu

<!--
  BUTON WHATSAPP → PORNIT, cerut explicit de client.

  ⚠ DAR NU SE VEDE ÎNCĂ. Butonul verde plutitor se randează doar dacă există un număr în
  `date/02-telefon-email-si-adresa.md`, la „WhatsApp:". Acum rândul e gol — nu avem numărul,
  fiindcă Booking nu-l publică — deci butonul nu apare, iar rândul ăsta e pregătit pentru
  clipa în care numărul vine.

  Nu e o eroare și nu strică nimic: componenta întoarce null singură când n-are ce lega.
  Vezi nota lungă din date/02-telefon-email-si-adresa.md.

  Odată completat numărul, WhatsApp apare în patru locuri deodată: butonul plutitor, bara
  lipită de jos de pe telefon, dialogul de rezervare și pagina de contact. Mesajul e
  precompletat cu camera, perioada și numărul de oaspeți (`lib/whatsapp.ts`).

  ANALYTICS → oprit. Se pornește după ce se decide ce instrument se folosește; se încarcă
  oricum doar după acceptul de cookies.
-->
