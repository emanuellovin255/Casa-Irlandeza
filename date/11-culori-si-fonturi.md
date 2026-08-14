# Culori și fonturi

<!-- ────────────────────────────────────────────────────────────────────────

     CE E AICI:  culorile și fonturile întregului site.

     UNDE SE VEDE
       Peste tot. O culoare schimbată aici se schimbă pe toate paginile
       deodată — butoane, titluri, fundaluri, linii.

     CUM SE SCRIU CULORILE
       Ca un cod care începe cu # și are șase caractere: #14452F.
       Codul se ia din orice selector de culori (Google „color picker").
       Scris greșit sau lăsat gol, se folosește culoarea de rezervă.

     ATENȚIE LA CONTRAST
       „Text pe culoarea principală" trebuie să se citească peste
       „Culoare principală". Alb pe verde închis se citește; alb pe
       galben deschis, nu. E și o cerință de accesibilitate, nu doar o
       chestiune de gust.

     Fișierul ăsta NU se traduce: pe /en sunt aceleași culori.
     ──────────────────────────────────────────────────────────────────────── -->

<!--
  DE UNDE VINE PALETA

  Nu dintr-o siglă — Casa Irlandeză n-are una vectorială. Vine din trei lucruri care sunt deja
  pe clădire, fotografiate de ei:

    · harpa albastră pe fond alb și plăcuța „Consalacht na hÉireann" de lângă ușă
    · steagul irlandez de pe fronton și cel de la recepție
    · lemnul închis al bufetului, al balustradelor și al meselor lungi de pe terasă

  De aici: VERDE STICLĂ (nu verde trifoi), ALAMĂ (nu auriu) și HÂRTIE CREM (nu alb).
  E paleta unui pub vechi, nu a unei broșuri de 17 martie. Diferența dintre ele e singurul
  lucru care hotărăște dacă „stil irlandez" iese elegant sau iese kitsch.

  CONTRASTELE, măsurate pe fundalul paginii (#FAF7F0), nu estimate:

    text principal   15,8:1      text secundar     8,6:1
    text estompat     4,6:1      accent (ca text)  5,0:1
    alb pe verde     10,9:1      alb pe verde deschis 7,3:1
    atenționare       6,4:1      confirmare        4,7:1
    alamă deschisă pe verde   5,1:1

  Toate peste 4,5:1 (WCAG AA). `npm run verifica` le remăsoară la fiecare rulare — dacă cineva
  schimbă o culoare aici și scade sub prag, raportul o spune, cu rândul cu tot.
-->

## Culori

Culoare principală: #14452F
Culoare principală, variantă deschisă: #1E6244
Text pe culoarea principală: #FFFFFF

Culoare de accent: #92611F
Culoare de accent, variantă deschisă: #DCA845

Fundal pagină: #FAF7F0
Fundal carduri: #FFFFFF
Fundal secțiuni alternante: #F0EADD

Text principal: #1A1E1B
Text secundar: #414A44
Text estompat: #6A736C
Linii și margini: #DED4C2

Culoare de confirmare: #2E7D5B
Culoare de atenționare: #9C3A2B

<!--
  DE CE ACCENTUL E ALAMĂ ÎNCHISĂ (#92611F) ȘI NU AURIU

  Accentul trebuie să fie lizibil CA TEXT pe crem, nu doar frumos ca fundal de buton — îl
  folosesc etichetele de secțiune și prețurile. Un auriu adevărat (#C9A227) dă 2,4:1 pe crem,
  adică ilizibil. Alama închisă dă 5,0:1 și rămâne alamă.

  Varianta deschisă (#DCA845) e treapta pentru FUNDALURI ÎNCHISE — pe verdele de la subsol și
  din secțiunile închise, unde cea închisă s-ar stinge. Acolo dă 5,1:1.

  ATENȚIONAREA e oxblood (#9C3A2B), nu roșu de eroare. La o pensiune, culoarea asta marchează
  „au mai rămas 2 camere", nu o defecțiune de sistem. Roșul aprins pe un site de cazare arată
  ca un mesaj de eroare și sperie exact omul care era gata să rezerve.
-->

## Fonturi

Font pentru titluri: Anton
Font pentru text: Abhaya Libre
Rotunjire colțuri: 4px
Caracter: irlandez

<!--
  ANTON pentru titluri: un grotesc greu și îngust, folosit numai în MAJUSCULE și numai la corp
  mare. E silueta afișului de pub — și silueta titlurilor de pe zagazaga.ro, referința cerută.
  La corp mic e ilegibil, deci nu se folosește niciodată sub 24px: acolo intră fontul de text.

  ABHAYA LIBRE pentru text: un serif cu duct umanist, cu o talie ceva mai mare decât a
  serifurilor clasice, deci se citește bine și la 16px pe telefon. E chiar fontul de corp al
  lui zagazaga.ro.

  ROTUNJIRE 4px, aproape colț drept. Cardurile rotunjite la 14px (ca la Izora) fac un site
  „de aplicație". Aici totul e panou de lemn, plăcuță emailată și afiș lipit — colțul drept e
  parte din stil.

  CARACTER: irlandez. E o pereche nouă, adăugată în `scripts/lib/fonts.ts`. Motivul tehnic e
  scris acolo: Anton are doar greutatea 400, iar specificația construită automat ar fi cerut
  Google Fonts o greutate care nu există, cu 400 Bad Request și build căzut.

  ⚠ E O MODIFICARE DE MOTOR, notată în MOTOR-MODIFICAT.md. Un `npm run actualizeaza-motor`
  neatent o șterge, iar site-ul cade tăcut pe perechea „warm" (Newsreader + Work Sans).

  Fonturile se descarcă o singură dată, la primul `npm run dev`, și se comit în
  `public/fonts/`. Niciun request către Google la runtime (REGULI.md 9) — și nicio problemă
  de GDPR cu IP-ul vizitatorului plecat la Google înainte de acceptul de cookies.
-->
