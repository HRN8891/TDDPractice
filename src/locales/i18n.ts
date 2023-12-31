import ReactNative from 'react-native';
import memoize from 'lodash.memoize';
import I18n, {Scope, TranslateOptions} from 'i18n-js';
// Import all locales
import en from './en.json';
// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;
// Define the supported translations
I18n.translations = {
  en,
};
const currentLocale = I18n.currentLocale();
// Is it a RTL language?
export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;
// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);
// The method we'll use instead of a regular string
export const strings = memoize((name: Scope, params?: TranslateOptions): string =>
  I18n.t(name, params),
);
export default I18n;
