/**
 * Selecția finală de fotografii, din cele 285 descărcate de pe Booking.
 *
 * Nu face parte din site. Rulează o singură dată, după triere:
 *   node poze-de-verificat/alege.mjs
 *
 * Ce face: ia indexul din planșele de contact (`planse.mjs`), redimensionează
 * la lățimea potrivită și scrie în `poze/` cu nume descriptive, în română,
 * cu cratime și fără diacritice — regula din `poze/README.md`. Numele ajunge
 * în adresa imaginii pe internet și în Google Images, deci `889844889.jpg`
 * n-are ce căuta acolo.
 *
 * Din 285 rămân 63. Restul sunt cadre de telefon în portret, decor de sezon
 * fotografiat de aproape (Crăciun, Paște), poze de grup și duplicate ale
 * aceleiași fațade. Le păstrăm în `brut/`, nu se șterg: dacă se caută mai
 * târziu un cadru anume, e acolo.
 */
import { readFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const AICI = path.dirname(fileURLToPath(import.meta.url))
const BRUT = path.join(AICI, 'brut')
const POZE = path.join(AICI, '..', 'poze')

/**
 * index din planșă → numele final.
 *
 * `2000` e lățimea pentru cadrele care ajung mari pe ecran (prima secțiune,
 * galeria, feature-urile alternante); `1400` ajunge pentru carduri și
 * detalii. Originalele de pe Booking sunt 1024 px, deci nu se mărește
 * nimic — `withoutEnlargement` ține lățimea reală când e mai mică.
 */
const ALES = {
  // ---- Clădirea și împrejurimile ----
  1:   ['exterior-pensiune-in-lumina-de-seara', 2000],
  53:  ['fatada-pensiunii-vazuta-din-strada', 2000],
  79:  ['pensiunea-luminata-noaptea', 2000],
  131: ['cladirea-vazuta-din-gradina', 2000],
  133: ['gradina-cu-papadii-si-cladirea', 2000],
  137: ['curtea-din-spate-cu-gazon', 2000],
  167: ['balcoanele-pensiunii-vara', 2000],
  189: ['pensiunea-cu-cele-patru-niveluri', 2000],
  52:  ['intrarea-principala-sub-copertina-de-lemn', 1400],
  231: ['intrarea-cu-emblema-irlandeza', 1400],
  134: ['firma-casa-irlandeza-cu-steag', 1400],
  64:  ['placuta-de-strada-aurel-vlaicu', 1400],
  89:  ['vedere-de-pe-balcon-spre-baile-felix', 2000],

  // ---- Ciubăr, saună, wellness ----
  280: ['terasa-cu-ciubar-si-sezlonguri', 2000],
  282: ['ciubar-cu-hidromasaj-in-aer-liber', 2000],
  277: ['ciubarul-pe-terasa-de-lemn', 2000],
  274: ['ciubar-si-masa-pe-terasa', 1400],
  284: ['sauna-din-lemn', 1400],

  // ---- Terasa acoperită, cuptorul, mesele lungi ----
  281: ['terasa-acoperita-cu-mese-lungi', 2000],
  283: ['terasa-cu-cuptor-cu-lemne', 2000],
  263: ['foisorul-cu-muscate', 2000],
  262: ['foisorul-vazut-din-gradina', 1400],

  // ---- Grădina și locul de joacă ----
  132: ['gazon-ingrijit-in-curtea-interioara', 2000],
  224: ['gradina-cu-trambulina-si-casuta-de-joaca', 2000],
  269: ['locul-de-joaca-din-gradina', 1400],
  241: ['hamac-intre-copaci', 1400],
  239: ['tobogan-gonflabil-pentru-copii', 1400],
  19:  ['colt-de-gradina-cu-felinar', 1400],
  30:  ['gradina-cu-pomi-fructiferi', 1400],

  // ---- Cameră dublă deluxe (25 m²) ----
  92:  ['camera-dubla-deluxe-cu-iesire-pe-balcon', 2000],
  95:  ['camera-dubla-deluxe-in-lumina-diminetii', 2000],
  9:   ['camera-dubla-cu-pat-matrimonial', 2000],
  103: ['camera-dubla-deluxe-cu-pat-mare', 1400],
  106: ['camera-dubla-cu-coltul-de-lucru', 1400],
  96:  ['camera-dubla-cu-masa-si-doua-scaune', 1400],
  101: ['balcon-cu-masa-de-mozaic-si-vedere', 1400],

  // ---- Cameră triplă de lux (35 m²) ----
  3:   ['camera-tripla-de-lux-cu-trei-paturi', 2000],
  11:  ['camera-tripla-cu-paturi-separate', 1400],
  90:  ['camera-tripla-luminoasa', 1400],
  125: ['camera-tripla-cu-doua-paturi', 1400],
  129: ['camera-cu-pat-dublu-si-noptiere', 1400],

  // ---- Cameră de familie (46 m², pe două niveluri) ----
  107: ['camera-de-familie-pe-doua-niveluri', 2000],
  111: ['camera-de-familie-cu-scara-interioara', 2000],
  112: ['camera-de-familie-vazuta-de-la-mansarda', 1400],
  113: ['camera-de-familie-patul-de-la-mansarda', 1400],
  105: ['camera-de-familie-living-si-scara', 1400],
  122: ['camera-de-familie-etajul-de-sus', 1400],

  // ---- Băi ----
  100: ['baie-cu-dus-si-uscator-de-par', 1400],
  108: ['baie-cu-cabina-de-dus-rotunda', 1400],
  86:  ['baie-cu-oglinda-si-prosoape', 1400],
  87:  ['baie-cu-dus-si-lavoar', 1400],

  // ---- Sala de mese, micul dejun, spațiile comune ----
  75:  ['sala-de-mese-cu-mese-de-lemn', 2000],
  205: ['sala-de-mese-pregatita-pentru-oaspeti', 2000],
  72:  ['mic-dejun-in-bufet', 2000],
  152: ['oaspeti-la-masa-in-sala-de-mese', 1400],
  223: ['holul-de-primire', 1400],
  227: ['receptia-cu-mobilier-de-lemn', 1400],
  45:  ['lounge-cu-coltul-de-cafea', 1400],
  47:  ['salonul-comun-de-la-parter', 1400],
  23:  ['scara-cu-balustrada-de-fier-forjat', 1400],
  126: ['holul-de-la-etaj', 1400],

  // ---- Detalii irlandeze ----
  255: ['firma-de-pub-welcome-to-irish-house', 1400],
  28:  ['steagul-irlandez-de-la-receptie', 1400],
  16:  ['decor-irlandez-pe-bufetul-de-lemn', 1400],
  97:  ['cheia-camerei-irish-residence', 1400],
}

const index = new Map(
  readFileSync(path.join(AICI, 'index.txt'), 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((r) => {
      const [n, fisier] = r.split(' ')
      return [Number(n), fisier]
    }),
)

mkdirSync(POZE, { recursive: true })

let scrise = 0
for (const [n, [nume, latime]] of Object.entries(ALES)) {
  const sursa = index.get(Number(n))
  if (!sursa) {
    console.error(`! indexul ${n} nu există în index.txt`)
    continue
  }
  const tinta = path.join(POZE, `${nume}.webp`)
  await sharp(path.join(BRUT, sursa))
    .resize({ width: latime, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(tinta)
  scrise++
}

console.log(`${scrise} fotografii scrise în poze/`)
