import axios from "axios";
const service = "https://fakestoreapi.com/carts";

async function getCart() {
  try {
    const r = await axios.get(`${service}`);
    return r.data;
  } catch (e) {
    return Promise.reject(e);
  }
}

async function getCartById(id) {
  try {
      const r = await axios.get(`${service}/${id}`);
      return r.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async function changeCartById(id, payload) {
    try {
      await axios.put(
        `${service}/${id}`,
        payload
      );
    } catch (e) {
      return Promise.reject(e);
    }
  }
export default { getCart, getCartById, changeCartById};
