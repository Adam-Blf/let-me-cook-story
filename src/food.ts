// Mapping recette → photo Pexels (téléchargées dans public/food/)
// Licence Pexels : utilisation commerciale libre, attribution non requise.
import { staticFile } from 'remotion';

export const foodPhotos = {
  carbonara: staticFile('food/carbonara.jpg'),
  mangoSticky: staticFile('food/mango-sticky.jpg'),
  shakshuka: staticFile('food/shakshuka.jpg'),
  cookies: staticFile('food/cookies.jpg'),
  ramen: staticFile('food/ramen.jpg'),
  salad: staticFile('food/salad.jpg'),
  tacos: staticFile('food/tacos.jpg'),
  galette: staticFile('food/galette.jpg'),
} as const;
