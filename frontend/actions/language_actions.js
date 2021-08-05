import * as LanguageAPIUtil from '../util/language_api_util';

export const RECEIVE_ALL_LANGUAGES = 'RECEIVE_ALL_LANGUAGES';
export const RECEIVE_LANGUAGE = 'RECEIVE_LANGUAGE';

export const receiveLanguages = languages => {
  return {
    type: RECEIVE_ALL_LANGUAGES,
    languages
  };
};

export const receiveLanguage = language => {
  return {
    type: RECEIVE_LANGUAGE,
    language
  };
};

export const fetchLanguages = () => dispatch => {
  return LanguageAPIUtil.fetchLanguages()
    .then(
      languages => {
        dispatch(receiveLanguages(languages))
      }
    );
};

export const fetchLanguage = languageId => dispatch => {
  return LanguageAPIUtil.fetchLanguage(languageId)
    .then(
      newLanguage => {
        dispatch(receiveLanguage(newLanguage))
      }
    );
};

export const createLanguage = language => dispatch => {
  return LanguageAPIUtil.createLanguage(language)
    .then(
      newLanguage => {
        dispatch(receiveLanguage(newLanguage))
      }
    );
};