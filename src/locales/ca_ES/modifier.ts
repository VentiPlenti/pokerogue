import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const modifier: SimpleTranslationEntries = {
  "surviveDamageApply": "{{pokemonNameWithAffix}} s'ha sobreviure\nemprant {{typeName}}!",
  "turnHealApply": "{{pokemonNameWithAffix}} s'ha restaurar una mica d'HP\nutilitzant {{typeName}}!",
  "hitHealApply": "{{pokemonNameWithAffix}} s'ha restaurar una mica d'HP\nutilitzant {{typeName}}!",
  "pokemonInstantReviveApply": "{{pokemonNameWithAffix}} s'ha ressuscitat\nemprant {{typeName}}!",
  "pokemonResetNegativeStatStageApply": "Les estadístiques de {{pokemonNameWithAffix}} van ser restaurades\nustilitzant {{typeName}}!",
  "moneyInterestApply": "Has rebut interès de ₽{{moneyAmount}}\nde {{typeName}}!",
  "turnHeldItemTransferApply": "{{itemName}} de {{pokemonNameWithAffix}} s'ha absorbit\nper {{typeName}}!",
  "contactHeldItemTransferApply": "{{itemName}} de {{pokemonNameWithAffix}} s'ha robat\nper {{typeName}}!",
  "enemyTurnHealApply": "{{pokemonNameWithAffix}}\ns'ha restaurar alguns PS!",
  "bypassSpeedChanceApply": "{{pokemonName}} actua més ràpid del normal, a causa de {{itemName}}!",
} as const;
