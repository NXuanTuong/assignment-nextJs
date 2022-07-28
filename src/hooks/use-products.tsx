import { add, remove } from "@/api/product";
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
  return {
    data,
    error,
    addProduct,
    removeProduct,
  };
};

export default useProducts;
