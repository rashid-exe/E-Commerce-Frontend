import axios from 'axios';

export const getProducts = async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
};

export const getCategories = async () => {
  const res = await axios.get('https://fakestoreapi.com/products/categories');
  return res.data;
};

export const getProductById = async (id: number) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};