const API_GET_ITEMS = "http://192.168.15.8:8080/api/item";
const API_GET_ESTAB = "http://192.168.15.8:8080/api/estabelecimento";
export const getItems = async () => {
  try {
    const response = await fetch(API_GET_ITEMS);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
export const getEtab = async () => {
  try {
    const response = await fetch(API_GET_ESTAB);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
