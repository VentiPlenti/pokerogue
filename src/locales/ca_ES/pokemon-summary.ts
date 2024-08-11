import { TranslationEntries } from "#app/interfaces/locales";

export const pokemonSummary: TranslationEntries = {
  "pokemonInfo": "Info. Pokémon",
  "status": "Estat",
  "powerAccuracyCategory": "Potència\nPrecisió\nCategoria",
  "type": "Tipus",
  "unknownTrainer": "Desconegut",
  "ot": "EO",
  "nature": "Naturalesa",
  "expPoints": "Punts Exp.",
  "nextLv": "Nv. següent",
  "cancel": "Sortir",

  "memoString": "Naturalesa {{natureFragment}},\n{{metFragment}}",
  "metFragment": {
    "normal": "Trobat al NV.{{level}},\n{{biome}}.",
    "apparently": "Aparentment trobat al NV.{{level}},\n{{biome}}.",
  },
} as const;
