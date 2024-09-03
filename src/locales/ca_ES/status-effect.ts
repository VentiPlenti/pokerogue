import { StatusEffectTranslationEntries } from "#app/interfaces/locales.js";

export const statusEffect: StatusEffectTranslationEntries = {
  none: {
    name: "None",
    description: "",
    obtain: "",
    obtainSource: "",
    activation: "",
    overlap: "",
    heal: ""
  },
  poison: {
    name: "Enverinament",
    description: "enverinament",
    obtain: "{{pokemonNameWithAffix}}\nha estat enverinat!",
    obtainSource: "{{pokemonNameWithAffix}}\nha estat enverinat per {{sourceText}}!",
    activation: "{{pokemonNameWithAffix}} pren mal per\nl'enverinament!",
    overlap: "{{pokemonNameWithAffix}} ja\nestà enverinat!",
    heal: "{{pokemonNameWithAffix}} ha\nguarit el seu enverinament!"
  },
  toxic: {
    name: "Enverinament greu",
    description: "enverinament greu",
    obtain: "{{pokemonNameWithAffix}}\nha estat enverinat greument!",
    obtainSource: "{{pokemonNameWithAffix}}\nha estat enverinat greument per {{sourceText}}!",
    activation: "{{pokemonNameWithAffix}} pren mal per\nl'enverinament!",
    overlap: "{{pokemonNameWithAffix}} ja\nestà enverinat!",
    heal: "{{pokemonNameWithAffix}} ha\nguarit el seu enverinament!"
  },
  paralysis: {
    name: "Paràlisi",
    description: "paràlisi",
    obtain: "{{pokemonNameWithAffix}} ha estat paralitzat,\npotser no es podrà moure!",
    obtainSource: "{{pokemonNameWithAffix}} ha estat paralitzat per {{sourceText}}!\npotser no es podrà moure!",
    activation: "{{pokemonNameWithAffix}} està paralitzat!\nNo es pot moure!",
    overlap: "{{pokemonNameWithAffix}} ja\nestà paralitzat!",
    heal: "{{pokemonNameWithAffix}} ha\nguarit la seva paràlisi!"
  },
  sleep: {
    name: "Dormir",
    description: "dormir",
    obtain: "{{pokemonNameWithAffix}}\ns'ha adormit!",
    obtainSource: "{{pokemonNameWithAffix}}\ns'ha adormit per {{sourceText}}!",
    activation: "{{pokemonNameWithAffix}} dorm com un tronc.",
    overlap: "{{pokemonNameWithAffix}} ja\nestà adormit!",
    heal: "{{pokemonNameWithAffix}} s'ha despertat!"
  },
  freeze: {
    name: "Congelat",
    description: "congelat",
    obtain: "{{pokemonNameWithAffix}}\ns'ha cogelat!",
    obtainSource: "{{pokemonNameWithAffix}}\ns'ha congelat per {{sourceText}}!",
    activation: "{{pokemonNameWithAffix}} està\ncongelat!",
    overlap: "{{pokemonNameWithAffix}} ja\nestà congelat!",
    heal: "{{pokemonNameWithAffix}} s'ha\ndescongelat!"
  },
  burn: {
    name: "Cremat",
    description: "cremat",
    obtain: "{{pokemonNameWithAffix}}\ns'ha cremat!",
    obtainSource: "{{pokemonNameWithAffix}}\ns'ha cremat per {{sourceText}}!",
    activation: "{{pokemonNameWithAffix}} pren mal\nper la cremada!",
    overlap: "{{pokemonNameWithAffix}} ja\nestà cremat!",
    heal: "{{pokemonNameWithAffix}} ha\nguarit la seva cremadura!"
  },
} as const;
