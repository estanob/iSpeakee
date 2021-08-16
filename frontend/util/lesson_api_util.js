export const fetchLessons = () => {
  return $.ajax({
    url: `/api/lessons`,
    method: 'GET',
  });
};

export const createLesson = (lesson) => {
  return $.ajax({
    method: 'POST',
    url: `api/lessons/`,
    data: lesson,
    contentType: false,
    processData: false,
  });
};

export const deleteLesson = lesson => {
  return $.ajax({
    url: `api/lessons/`,
    method: 'DELETE',
    data: lesson,
  });
};

export const fetchLesson = id => {
  return $.ajax({
    method: 'GET',
    url: `api/lessons/${id}`,
  });
};
