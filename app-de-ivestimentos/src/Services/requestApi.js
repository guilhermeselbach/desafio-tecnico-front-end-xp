export const requestActivesFromApi = async () => {
  const API_URL = "https://api-cotacao-b3.labdo.it/api/carteira";
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const fetchActives = async () => {
  const resultApi = await requestActivesFromApi();
  return resultApi;
};

export const requestActiveValueFromApi = async (active) => {
  const position = 0;
  const API_URL_VALUE = `https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${active}/1`;
  const response = await fetch(API_URL_VALUE);
  const data = await response.json();
  return data[position].vl_medio;
};

export const fetchActiveValue = async (active) => {
  const resultApi = await requestActiveValueFromApi(active);
  return resultApi;
};
