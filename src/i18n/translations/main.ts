import {SupportedLanguages} from '../langCode';
import {translation as translationCHT} from './cht/translation';
import {TranslationStruct} from './definition';
import {translation as translationEN} from './en/translation';


export const translations: {[lang in SupportedLanguages]: TranslationStruct} = {
  [SupportedLanguages.CHT]: translationCHT,
  [SupportedLanguages.EN]: translationEN,
};
