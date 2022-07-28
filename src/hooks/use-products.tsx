import { add } from "@/api/product";
import React from "react";
import useSWR from "swr";

const useProducts = () => {
  const { data, error, mutate } = useSWR("/products");

  const addProduct = async (product: any) => {
    const newProduct = await add(product);
    mutate([...data, newProduct]);
  };
  return {
    data,
    error,
    addProduct,
  };
};

export default useProducts;
