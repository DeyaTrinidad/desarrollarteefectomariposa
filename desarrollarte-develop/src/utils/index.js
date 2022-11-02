export const unique = (value, index, item) => {
  return item.indexOf(value) === index;
};
export const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const auth = {
  isAuthenticated: () => {
    return localStorage.getItem("@session") ? true : false;
  },
  logout: () => {
    localStorage.removeItem("@session");
  },
};
