import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const fightUiHandler: SimpleTranslationEntries = {
  "pp": "PP",
  "power": "Dotència",
  "accuracy": "Precisió",
  "abilityFlyInText": " {{passive}}{{pokemonName}}\n{{abilityName}}",
  "passive": "Passiva de ", // The space at the end is important
} as const;
