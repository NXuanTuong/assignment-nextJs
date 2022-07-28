import { add, read, remove, update } from "@/api/product";
import React from "react";
import useSWR from "swr";

const useProducts = () => {
  const { data, error, mutate } = useSWR("/products");

  const addProduct = async (product: any) => {
    const newProduct = await add(product);
    mutate([...data, newProduct]);
  };

  const removeProduct = async (id: any) => {
    await remove(id);
    const newList = data.filter((item: any) => item._id !== id);
    console.log(newList);
    mutate(newList);
  };

  const updateProduct = async (product: any) => {
    await update(product);
    mutate(data.map((item: any) => (item.id === data.id ? product : item)));
  };
   
  const readProduct = async (id: any) => {
    const getProduct = await read(id)
    return getProduct
  }
  return {
    data,
    error,
    addProduct,
    removeProduct,
    updateProduct,
    readProduct
  };
};

export default useProducts;
