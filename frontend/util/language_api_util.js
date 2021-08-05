export const fetchLanguages = () => {
  return $.ajax({
    url: '/api/languages',
    method: 'GET',
  });
};

export const fetchLanguage = languageId => {
  return $.ajax({
    url: `/api/languages/${languageId}`,
    method: 'GET',
  });
};

export const createLanguage = language => {
  return $.ajax({
    url: `/api/languages`,
    method: 'POST',
  });
};