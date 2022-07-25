export const addUserToStorage = (email) => {
  if (!JSON.parse(localStorage.getItem("user"))) {
    localStorage.setItem("user", JSON.stringify({}));
  }
  const users = JSON.parse(localStorage.getItem("user"));

  localStorage.setItem("user", JSON.stringify({ ...users, email }));
};

export const getUserFromStorage = () => JSON.parse(localStorage.getItem("user"));