// Chargement Google Fonts Remotion · bloque le rendu tant que non chargé
import { loadFont as loadInstrument } from '@remotion/google-fonts/InstrumentSerif';
import { loadFont as loadGeist } from '@remotion/google-fonts/Geist';
import { loadFont as loadGeistMono } from '@remotion/google-fonts/GeistMono';

export const instrumentRegular = loadInstrument('normal', {
  weights: ['400'],
  subsets: ['latin'],
});

export const instrumentItalic = loadInstrument('italic', {
  weights: ['400'],
  subsets: ['latin'],
});

export const geist = loadGeist('normal', {
  weights: ['400', '500', '700'],
  subsets: ['latin'],
});

export const geistMono = loadGeistMono('normal', {
  weights: ['400', '500'],
  subsets: ['latin'],
});

export const fontFamily = {
  serif: instrumentRegular.fontFamily,
  serifItalic: instrumentItalic.fontFamily,
  sans: geist.fontFamily,
  mono: geistMono.fontFamily,
};
