export function getTokenFromLocalStorage() {
  return localStorage.getItem("access_token");
}

export function setTokenToLocalStorage(token) {
  localStorage.setItem("access_token", token);
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem("access_token");
}

export function getLoginFromLocalStorage() {
  return localStorage.getItem("login");
}

export function setLoginToLocalStorage(login) {
  localStorage.setItem("login", login);
}

export function removeLoginFromLocalStorage() {
  localStorage.removeItem("login");
}
