export enum SupportedLanguages {
  CHT = 'cht',
  EN = 'EN',
}

export const SupportedLanguageNames: {[lang in SupportedLanguages]: string} = {
  [SupportedLanguages.CHT]: '繁體中文 - CHT',
  [SupportedLanguages.EN]: 'English - EN',
};

export const isSupportedLang = (lang: string): lang is SupportedLanguages => {
  return Object.values(SupportedLanguages).some((supported) => supported === lang);
};

export const DEFAULT_LANG = SupportedLanguages.CHT;

const langMap: {[lang in string]: SupportedLanguages} = {
  [SupportedLanguages.CHT]: SupportedLanguages.CHT,
  [SupportedLanguages.EN]: SupportedLanguages.EN,
  zh: SupportedLanguages.CHT,
  es: SupportedLanguages.EN,
};


export const mapToSupportedLang = (orgLang?: string | null): SupportedLanguages => {
  if (!orgLang) {
    return DEFAULT_LANG;
  }

  const langCode = orgLang.split('-', 1)[0];

  return langMap[langCode] || DEFAULT_LANG;
};
