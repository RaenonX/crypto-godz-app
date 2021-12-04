import {throwError} from '../utils/error';
import {TranslationStruct} from './translations/definition';
import {GetTranslationFunction, InterpolateParams, TFunction} from './types';


export const getTFunction = (
  translation: TranslationStruct,
): TFunction => (
  getEntryFn: GetTranslationFunction,
  replacements: InterpolateParams = {},
): string => {
  const entry = getEntryFn(translation);

  const replacer = (original: string, key: string): string => {
    const newValue = replacements[key];

    if (!newValue) {
      const errorMessage = `Placeholder of key [${key}] does not exist in string: "${entry}"`;

      throwError(errorMessage);

      return original;
    }

    return newValue.toString();
  };

  return entry.replace(/{{(\w+)}}/g, replacer);
};
