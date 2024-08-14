import { TranslationEntries } from "#app/interfaces/locales.js";

export const challenges: TranslationEntries = {
  "title": "Paràmetres de Desafiaments",
  "illegalEvolution": "{{pokemon}} s'ha convertit en inelegible\nper a aquest repte!",
  "singleGeneration": {
    "name": "Monogeneració",
    "desc": "Només pots usar Pokémon de {{gen}} generació.",
    "desc_default": "Només pots fer servir Pokémon de la generació triada.",
    "gen_1": "primera",
    "gen_2": "sogona",
    "gen_3": "tercera",
    "gen_4": "quarta",
    "gen_5": "cinquena",
    "gen_6": "sisena",
    "gen_7": "setena",
    "gen_8": "vuitena",
    "gen_9": "novena",
  },
  "singleType": {
    "name": "Monotipus",
    "desc": "Només pots usar Pokémon de tipus {{type}}.",
    "desc_default": "Només pots fer servir Pokémon del tipus triada."
    //types in pokemon-info
  },
  "freshStart": {
    "name": "Nou Començament",
    "desc": "Només pots utilitzar els iniciadors originals, com si acabés de començar PokéRogue.",
    "value.0": "No",
    "value.1": "Sí",
  }
} as const;
