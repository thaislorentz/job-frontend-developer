import axios from "axios";
const service = "https://fakestoreapi.com/products";

async function getCategories() {
  try {
    const r = await axios.get(`${service}/categories`, {timeout: 10000});
    return r.data;
  } catch (e) {
    return Promise.reject(e);
  }
}

async function getProducts() {
  try {
    const r = await axios.get(`${service}`, {timeout: 10000});
    return r.data;
  } catch (e) {
    return Promise.reject(e);
  }
}

export default { getCategories, getProducts };
