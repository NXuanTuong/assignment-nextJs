import { add, read, remove, update } from "@/api/product";
import React from "react";
import useSWR from "swr";

const useCategories = () => {
  const { data, error, mutate } = useSWR("/category");
  return {
    data,
    error,
    
  };
};

export default useCategories;
