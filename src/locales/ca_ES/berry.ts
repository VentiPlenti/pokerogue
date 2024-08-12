import { BerryTranslationEntries } from "#app/interfaces/locales";

export const berry: BerryTranslationEntries = {
  "SITRUS": {
    name: "Baia Sitra",
    effect: "Restores 25% HP if HP is below 50%",
  },
  "LUM": {
    name: "Baia Luma",
    effect: "Cures any non-volatile status condition and confusion",
  },
  "ENIGMA": {
    name: "Baia Enigma",
    effect: "Restores 25% HP if hit by a super effective move",
  },
  "LIECHI": {
    name: "Baia Litxi",
    effect: "Raises Attack if HP is below 25%",
  },
  "GANLON": {
    name: "Baia Llonga",
    effect: "Raises Defense if HP is below 25%",
  },
  "PETAYA": {
    name: "Baia Petanya",
    effect: "Raises Sp. Atk if HP is below 25%",
  },
  "APICOT": {
    name: "Baia Alberc",
    effect: "Raises Sp. Def if HP is below 25%",
  },
  "SALAC": {
    name: "Baia Salac",
    effect: "Raises Speed if HP is below 25%",
  },
  "LANSAT": {
    name: "Baia Langsa",
    effect: "Raises critical hit ratio if HP is below 25%",
  },
  "STARF": {
    name: "Baia Araboll",
    effect: "Sharply raises a random stat if HP is below 25%",
  },
  "LEPPA": {
    name: "Baia Pomí",
    effect: "Restores 10 PP to a move if its PP reaches 0",
  },
} as const;
