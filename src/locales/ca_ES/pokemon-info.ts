import { PokemonInfoTranslationEntries } from "#app/interfaces/locales";

export const pokemonInfo: PokemonInfoTranslationEntries = {
  Stat: {
    "HP": "PS",
    "HPshortened": "PS",
    "ATK": "Atac",
    "ATKshortened": "Ata",
    "DEF": "Defensa",
    "DEFshortened": "Def",
    "SPATK": "At. Esp.",
    "SPATKshortened": "AtEsp",
    "SPDEF": "Def. Esp.",
    "SPDEFshortened": "DefEsp",
    "SPD": "Velocitat",
    "SPDshortened": "Veloc.",
    "ACC": "Precisió",
    "EVA": "Evació"
  },

  Type: {
    "UNKNOWN": "???",
    "NORMAL": "Normal",
    "FIGHTING": "Lluita",
    "FLYING": "Volador",
    "POISON": "Verí",
    "GROUND": "Terra",
    "ROCK": "Roca",
    "BUG": "Bestiola",
    "GHOST": "Fantasma",
    "STEEL": "Acer",
    "FIRE": "Foc",
    "WATER": "Aigua",
    "GRASS": "Planta",
    "ELECTRIC": "Elèctric",
    "PSYCHIC": "Psíquic",
    "ICE": "Gel",
    "DRAGON": "Drac",
    "DARK": "Sinistre",
    "FAIRY": "Fada",
    "STELLAR": "Astral",
  },
} as const;
