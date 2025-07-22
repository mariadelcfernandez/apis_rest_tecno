import { getAllProducts, saveProduct } from "../models/products.models.js";

const getAllProduct = async () => {
  return await getAllProducts();
};
const createProduct = async (product) => {
  return await saveProduct(product);
};

export default { getAllProduct, createProduct };