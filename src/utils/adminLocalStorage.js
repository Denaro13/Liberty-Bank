export const addAdminToLocalStorage = (admin) => {
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const removeAdminFromLocalStorage = () => {
  localStorage.removeItem("admin");
};
export const getAdminFromLocalStorage = () => {
  const result = localStorage.getItem("admin");
  const admin = result ? JSON.parse(result) : null;
  return admin;
};
