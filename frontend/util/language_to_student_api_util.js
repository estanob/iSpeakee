export const fetchLanguageToStudents = () => {
  return $.ajax({
    url: `/api/language_to_students`,
    method: 'GET',
  });
};

export const createLanguageToStudent = languageToStudent => {
  return $.ajax({
    url: `/api/language_to_students`,
    method: 'POST',
    data: languageToStudent,
    contentType: false,
    processData: false,
  });
};

export const deleteLanguageToStudent = languageToStudent => {
  return $.ajax({
    url: `/api/language_to_students`,
    method: 'DELETE',
    data: languageToStudent,
  });
};

export const fetchLanguageToStudent = id => {
  return $.ajax({
    url: `/api/language_to_students/${id}`,
    method: 'GET',
  });
};