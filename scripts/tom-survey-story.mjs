// Story Insta repartage · sondage sport business de Tom Marcopoulos · V3
// Photo gym réelle en background (Pexels) + overlay · visuel sport direct.
import { writeFileSync, readFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

const W = 1080;
const H = 1920;
const SAFE_TOP = 260;
const SAFE_BOTTOM = 340;

const ORANGE = '#FF6B00';
const WHITE = '#FAFAFA';
const MUTED = '#C8C2BC';

// Encode la photo en data URI pour l'embarquer dans le SVG
const bgImage = readFileSync('public/sport/gym-dark.jpg');
const bgDataUri = `data:image/jpeg;base64,${bgImage.toString('base64')}`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="overlay" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="rgba(0,0,0,0.55)"/>
      <stop offset="0.4" stop-color="rgba(0,0,0,0.35)"/>
      <stop offset="0.75" stop-color="rgba(0,0,0,0.75)"/>
      <stop offset="1" stop-color="rgba(0,0,0,0.95)"/>
    </linearGradient>
    <linearGradient id="orangeGlow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${ORANGE}" stop-opacity="0"/>
      <stop offset="0.5" stop-color="${ORANGE}" stop-opacity="0.85"/>
      <stop offset="1" stop-color="${ORANGE}" stop-opacity="0"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Photo de fond -->
  <image href="${bgDataUri}" x="0" y="0" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice"/>

  <!-- Overlay dégradé pour lisibilité -->
  <rect width="${W}" height="${H}" fill="url(#overlay)"/>

  <!-- Vignette orange subtile coin bas-droit -->
  <circle cx="1100" cy="1700" r="380" fill="${ORANGE}" opacity="0.15"/>
  <circle cx="-80" cy="420" r="280" fill="${ORANGE}" opacity="0.12"/>

  <!-- Bandeau eyebrow top -->
  <g transform="translate(540, ${SAFE_TOP + 30})" text-anchor="middle">
    <rect x="-220" y="-32" width="440" height="56" rx="28" fill="${ORANGE}"/>
    <text y="8" font-family="Helvetica, Arial, sans-serif" font-size="22" letter-spacing="7" fill="#000" font-weight="900">
      À PARTAGER · 1 MIN ⏱
    </text>
  </g>

  <!-- Double trait orange energy -->
  <rect x="90" y="${SAFE_TOP + 115}" width="240" height="4" rx="2" fill="url(#orangeGlow)"/>

  <!-- HERO title massive -->
  <g transform="translate(90, ${SAFE_TOP + 220})">
    <text font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="158" font-weight="900" fill="${WHITE}" letter-spacing="-6" style="text-transform:uppercase;">
      TON AVIS
    </text>
    <text y="170" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="158" font-weight="900" fill="${ORANGE}" letter-spacing="-6" filter="url(#glow)" style="text-transform:uppercase;">
      PÈSE LOURD.
    </text>
  </g>

  <!-- Pitch -->
  <g transform="translate(90, ${SAFE_TOP + 620})">
    <text font-family="Helvetica, Arial, sans-serif" font-size="34" fill="${WHITE}" font-weight="500">
      Tom étudie le <tspan fill="${ORANGE}" font-weight="900">sport business</tspan>.
    </text>
    <text y="50" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="${WHITE}" font-weight="500">
      Il a besoin de ton avis en 60 secondes.
    </text>
    <text y="108" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="${MUTED}" font-weight="400">
      Sportif régulier ou canapé · ta réponse pèse.
    </text>
  </g>

  <!-- ZONE LIEN · gros carré clairement marqué -->
  <g transform="translate(140, ${SAFE_TOP + 820})">
    <rect x="0" y="0" width="800" height="320" rx="36" fill="rgba(255,107,0,0.14)" stroke="${ORANGE}" stroke-width="5" stroke-dasharray="16 11"/>

    <!-- Arrow vers le centre -->
    <g transform="translate(400, 70)" stroke="${ORANGE}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M-22 -26 L0 -4 L22 -26"/>
      <line x1="0" y1="-4" x2="0" y2="-44"/>
    </g>

    <text x="400" y="150" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="22" letter-spacing="6" fill="${ORANGE}" font-weight="900">
      COLLE LE STICKER LIEN ICI
    </text>
    <text x="400" y="220" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="58" fill="${WHITE}" font-weight="400" letter-spacing="-1">
      « Lien »
    </text>
    <text x="400" y="270" text-anchor="middle" font-family="Courier New, monospace" font-size="18" letter-spacing="2" fill="${MUTED}">
      lnkd.in/esEVe7Wd
    </text>
  </g>

  <!-- Signature auteur bas -->
  <g transform="translate(540, ${H - SAFE_BOTTOM - 30})" text-anchor="middle">
    <line x1="-60" y1="-56" x2="60" y2="-56" stroke="${ORANGE}" stroke-width="3"/>
    <text y="-12" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="${WHITE}" font-weight="700" letter-spacing="2">
      TOM MARCOPOULOS
    </text>
    <text y="28" font-family="Helvetica, Arial, sans-serif" font-size="16" letter-spacing="6" fill="${ORANGE}" font-weight="700">
      SPORT BUSINESS · ÉTUDIANT
    </text>
  </g>
</svg>`;

const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
const outPath = 'C:\\Users\\adamb\\Desktop\\Story Tom Marcopoulos.png';
writeFileSync(outPath, png);
console.log(`wrote ${outPath} (${(png.length / 1024).toFixed(1)} KB)`);
