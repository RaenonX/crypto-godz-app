import {CookiesKeys} from '../utils/cookies/keys';
import {getCookies, setCookies} from '../utils/cookies/utils';
import {DEFAULT_LANG, SupportedLanguages} from './langCode';
import {translations} from './translations/main';
import {TFunction} from './types';
import {getTFunction} from './utils';


type UseI18nReturn = {
  t: TFunction,
  lang: SupportedLanguages,
};

export const useCookiesLang = (): SupportedLanguages | null => {
  return getCookies<SupportedLanguages>(CookiesKeys.LANG);
};

export const useI18n = (): UseI18nReturn => {
  const cookiesLang = useCookiesLang();
  let actualLang;

  // Choose the actual lang to use
  if (!cookiesLang) {
    actualLang = DEFAULT_LANG;
    // Set language cookies if was not set
    setCookies(CookiesKeys.LANG, actualLang);
  } else {
    actualLang = cookiesLang;
  }

  return {
    t: getTFunction(translations[actualLang]),
    lang: actualLang,
  };
};
