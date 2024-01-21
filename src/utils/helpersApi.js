export default function fetchRequest({ url, method, json, isAuthRequired }) {
  const options = {
    method,
    headers: {},
  };
  if (isAuthRequired) {
    options.headers["Authorization"] = `Bearer ${getToken().replaceAll('"', '')}`;
  }
  if (json) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(json);
  }
  return fetch(url, options).then(checkForErrors);
}

function checkForErrors(response) {
  return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}

function getToken() {
  return localStorage.getItem("token");
}

