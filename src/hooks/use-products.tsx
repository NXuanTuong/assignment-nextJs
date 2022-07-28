import React from "react";
import useSWR from "swr";

const useProducts = () => {
  const { data, error, mutate } = useSWR("/products");
  return {
    data,
    error,
  };
};

export default useProducts;
