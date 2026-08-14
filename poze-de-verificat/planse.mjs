/**
 * Planșe de contact pentru trierea fotografiilor descărcate de pe Booking.
 *
 * Nu face parte din site. Rulează o singură dată, la construirea lui:
 *   node poze-de-verificat/planse.mjs
 *
 * Produce `planse/plansa-NN.jpg`, fiecare cu 30 de cadre numerotate, ca
 * fotografiile să se poată tria dintr-o privire în loc să fie deschise una
 * câte una. Numărul de sub fiecare cadru e indexul din `brut/`, ordonat
 * alfabetic — același index îl folosește `alege.mjs` la selecție.
 */
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

// `fileURLToPath`, nu `new URL(...).pathname`: calea are spații, iar
// `pathname` le lasă codate `%20` și `readdirSync` nu găsește folderul.
const AICI = path.dirname(fileURLToPath(import.meta.url))
const BRUT = path.join(AICI, 'brut')
const PLANSE = path.join(AICI, 'planse')

const COL = 6
const RND = 5
const PE_PLANSA = COL * RND
const L = 300 // lățimea unui cadru
const H = 225 // înălțimea unui cadru
const ETICHETA = 26 // banda cu numărul, sub cadru

const fisiere = readdirSync(BRUT).filter((f) => f.endsWith('.jpg')).sort()
mkdirSync(PLANSE, { recursive: true })

// Indexul e stabil între rulări: îl scriem pe disc ca să poată fi citit și
// de scriptul de selecție, nu doar dedus din ordinea alfabetică.
writeFileSync(
  path.join(AICI, 'index.txt'),
  fisiere.map((f, i) => `${String(i + 1).padStart(3, '0')} ${f}`).join('\n') + '\n',
)

const latimePlansa = COL * L
const inaltimePlansa = RND * (H + ETICHETA)

for (let p = 0; p * PE_PLANSA < fisiere.length; p++) {
  const lot = fisiere.slice(p * PE_PLANSA, (p + 1) * PE_PLANSA)

  const straturi = []
  for (let i = 0; i < lot.length; i++) {
    const col = i % COL
    const rnd = Math.floor(i / COL)
    const x = col * L
    const y = rnd * (H + ETICHETA)
    const numar = p * PE_PLANSA + i + 1

    straturi.push({
      input: await sharp(path.join(BRUT, lot[i]))
        .resize(L, H, { fit: 'cover' })
        .toBuffer(),
      left: x,
      top: y,
    })

    // Numărul, ca SVG — sharp nu are desen de text propriu.
    straturi.push({
      input: Buffer.from(
        `<svg width="${L}" height="${ETICHETA}">
           <rect width="${L}" height="${ETICHETA}" fill="#111"/>
           <text x="${L / 2}" y="${ETICHETA - 7}" font-family="monospace" font-size="17"
                 fill="#fff" text-anchor="middle">${numar}</text>
         </svg>`,
      ),
      left: x,
      top: y + H,
    })
  }

  const nume = `plansa-${String(p + 1).padStart(2, '0')}.jpg`
  await sharp({
    create: {
      width: latimePlansa,
      height: inaltimePlansa,
      channels: 3,
      background: { r: 17, g: 17, b: 17 },
    },
  })
    .composite(straturi)
    .jpeg({ quality: 78 })
    .toFile(path.join(PLANSE, nume))

  console.log(nume, '·', lot.length, 'cadre')
}

console.log('\nTotal:', fisiere.length, 'fotografii →', PLANSE)
