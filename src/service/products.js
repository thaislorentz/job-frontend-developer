import axios from "axios";
const service = "https://fakestoreapi.com/products";

async function getCategories() {
  try {
    const r = await axios.get(`${service}/categories`);
    return r.data;
  } catch (e) {
    return Promise.reject(e);
  }
}

async function getProducts() {
  try {
    const r = await axios.get(`${service}`);
    return r.data;
  } catch (e) {
    return Promise.reject(e);
  }
}

async function getProductById(id) {
  try {
    const r = await axios.get(`${service}/${id}`);
    return r.data;
  } catch (e) {
    return Promise.reject(e);
  }
}

async function getProductsCategory(category) {
  try {
    const r = await axios.get(`${service}/category/${category}`);
    return r.data;
  } catch (e) {
    return Promise.reject(e);
  }
}

export default { getCategories, getProducts, getProductById, getProductsCategory };
