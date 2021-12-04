import {TranslationStruct} from './translations/definition';


export type InterpolateParams = {[key in string]: string | number};

export type GetTranslationFunction<T = string> = (translation: TranslationStruct) => T;

export type TFunction<T = string> = (
  getTransFn: GetTranslationFunction<T>,
  replacements?: InterpolateParams,
) => T;
