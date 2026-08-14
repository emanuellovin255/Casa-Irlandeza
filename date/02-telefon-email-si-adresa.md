# Contact — telefon, e-mail, adresă și program

<!-- ────────────────────────────────────────────────────────────────────────

     CE E AICI:  toate datele de contact, într-un singur loc.

     UNDE SE VEDE  — datele de aici apar automat în CINCI locuri:
       · în subsol, pe fiecare pagină
       · pe pagina /contact
       · în bara de jos de pe telefon (sună / WhatsApp / disponibilitate)
       · în butonul verde de WhatsApp
       · în datele structurate pe care le citește Google

     Le scrii o singură dată aici. Nu se mai scriu nicăieri altundeva.

     CUM SE SCRIU
       Telefon:          așa cum se formează:  0752 404 405
       Telefon afișat:   cum vrei să se vadă pe ecran
       WhatsApp:         cu prefix de țară, fără spații:  +40752404405
       Check-in:         doar ora, „16:00", fără „de la"

     Fișierul ăsta NU se traduce: aceleași valori se afișează și pe /en.
     ──────────────────────────────────────────────────────────────────────── -->

## Telefon
Telefon:
Telefon afișat:
WhatsApp:

<!--
  ⚠⚠ CELE TREI RÂNDURI SUNT GOALE ȘI SITE-UL NU SE PUBLICĂ AȘA. ⚠⚠

  Nu e o scăpare: numărul de telefon al Casei Irlandeze nu e publicat nicăieri de unde să fie
  luat. Booking nu afișează numărul proprietății până la confirmarea unei rezervări — asta e
  toată politica lor comercială — iar locația n-are site propriu de pe care să fie citit.
  Nu se inventează un număr (REGULI.md 3).

  CE NU SE VEDE PE SITE CÂT TIMP RÂNDURILE ASTEA SUNT GOALE:
    · butonul verde de WhatsApp                      (BaraWhatsApp se randează gol)
    · bara lipită de jos de pe telefon               (sună / WhatsApp)
    · calea „WhatsApp" și „Sună" din dialogul        (ModalRezervare rămâne cu Booking)
      de rezervare
    · rândul cu telefonul din subsol și de pe /contact

  Adică jumătate din căile de conversie. Butonul „Verifică disponibilitatea" continuă să
  funcționeze — duce pe Booking, cu perioada aleasă — deci site-ul NU e stricat, dar e ciuntit.

  DE COMPLETAT, în trei rânduri, așa:
    Telefon: 0740 000 000
    Telefon afișat: 0740 000 000
    WhatsApp: +40740000000

  „WhatsApp:" se completează DOAR dacă numărul chiar primește mesaje pe WhatsApp. Dacă nu,
  rândul rămâne gol și se pune „Buton WhatsApp: nu" în `setari.md` — un buton verde care
  deschide o conversație pe un număr care nu citește WhatsApp e mai rău decât niciun buton.
-->

## Email
Email:

<!--
  ⚠ GOL, din același motiv: Booking nu publică adresa de e-mail a proprietății.

  Cât timp rândul e gol, FORMULARUL DE CONTACT NU SE AFIȘEAZĂ pe /contact. Pagina rămâne
  întreagă (adresă, hartă, program), dar fără formular.

  DE FĂCUT ȘI LA PUBLICARE: aceeași adresă trebuie pusă în variabila de mediu `DESTINATAR`,
  plus o cheie `RESEND_API_KEY` (vezi `.env.example`). Fără ele, formularul se vede dar
  trimiterea eșuează — ceea ce e mai rău decât lipsa formularului.

  MERITĂ CERUT: o adresă pe domeniul propriu (rezervari@casairlandeza.ro) în loc de una de
  gmail. E o setare de zece minute la furnizorul de domeniu, iar gmail-ul poate rămâne în
  spate ca destinație reală a mesajelor.
-->

## Adresă
Stradă: Str. Aurel Vlaicu nr. 4A
Oraș: Băile Felix
Județ: Bihor
Cod poștal: 417495
Țară: RO

<!--
  Adresa e cea publicată de ei pe Booking: Aurel Vlaicu 4A, 417495 Băile Felix, România.
  Codul poștal vine tot de-acolo, deci nu e ghicit.

  Există și fotografia plăcuței de stradă, `poze/placuta-de-strada-aurel-vlaicu.webp` — se
  vede pe zidul casei. E o confirmare vizuală, nu doar un rând copiat dintr-o listă.

  Băile Felix ține administrativ de comuna Sânmartin, județul Bihor. Pe site apare „Băile
  Felix", fiindcă așa caută lumea și așa scrie pe indicator; comuna Sânmartin apare o dată,
  pe pagina de contact, pentru cine completează un formular oficial.

  Asta e adresa LOCAȚIEI, unde vin oaspeții. Sediul social al firmei e alt lucru și stă în
  12-firma-si-documente-legale.md.
-->

## Coordonate GPS
Latitudine: 47.0018452
Longitudine: 21.9779885
Link Google Maps: https://www.google.com/maps/search/?api=1&query=47.0018452,21.9779885

<!--
  Coordonatele sunt cele din harta de pe pagina lor de Booking și cad PE CLĂDIRE, nu în
  centrul stațiunii. Sunt deci bune de publicat ca atare.

  Harta de pe prima pagină și cea de pe /contact folosesc exact numerele astea.

  DACĂ TOTUȘI SE MUTĂ VREODATĂ PINUL: Google Maps → click dreapta pe clădire → primul rând
  din meniu e perechea de numere → se copiază aici și în linkul de mai sus, după „query=".
-->

## Program
Check-in: 16:00
Check-out: 11:00
Recepție:

<!--
  Orele sunt cele publicate de ei pe Booking: check-in între 16:00 și 22:00, check-out între
  08:00 și 11:00.

  Câmpurile motorului iau o singură oră fiecare, deci aici stă ora de la care se poate intra
  (16:00) și ora până la care se eliberează camera (11:00). Intervalele complete sunt scrise
  în 09-intrebari-frecvente.md, unde e loc pentru o propoziție întreagă — inclusiv faptul,
  publicat tot de ei, că ora sosirii trebuie anunțată în avans.

  „Recepție:" e GOL. Nu e o pensiune cu recepție permanentă: gazdele stau în casă și primesc
  oaspeții personal. Un „24/7" scris aici ar fi o promisiune de serviciu pe care nimeni n-a
  făcut-o. Recenziile spun altceva, mai adevărat și mai bun — că au fost primiți și mai
  devreme de ora de check-in, când s-a putut.

  ⚠ DE CONFIRMAT: dacă gazdele vor să scrie ceva aici („primim personal, la orice oră
  anunțată"), se scrie exact ce spun ele.
-->

## Rețele sociale
Facebook:
Instagram:

<!--
  Ambele goale: nu am găsit conturi confirmate ale locației. Un rând gol nu afișează nicio
  iconiță, deci nu strică nimic.

  ⚠ DE CERUT GAZDELOR: paginile de Facebook și Instagram, dacă există. La o casă cu grădină,
  ciubăr și decor care se schimbă la fiecare sărbătoare, Instagramul e cea mai ieftină sursă
  de cereri directe — și, judecând după fotografii, ei deja fac munca, doar că o încarcă pe
  Booking, unde nu le aduce nimic în afara platformei.
-->

## Limbi vorbite

Limbi: română, engleză, germană, franceză, italiană

<!--
  Cele cinci limbi sunt declarate de ei pe Booking. Engleza nu e o formalitate aici: unul
  dintre gazde e irlandez.

  E argumentul care justifică pornirea modulului de engleză din `setari.md`, iar în Băile
  Felix — stațiune cu turiști maghiari, austrieci și israelieni — e un avantaj real față de
  pensiunile vecine.
-->
