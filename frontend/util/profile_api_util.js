export const fetchUser = userId => {
  return $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET',
  });
};

export const fetchAllUsers = () => {
  debugger
  return $.ajax({
    url: `/api/users`,
    method: 'GET',
  });
};
