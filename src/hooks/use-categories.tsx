import { removeCategory } from "@/api/category";
import { add, read, remove, update } from "@/api/product";
import React from "react";
import useSWR from "swr";
import { toast } from "react-toastify";


const useCategories = () => {
  const { data, error, mutate } = useSWR("/category");
  const removeCate = async (id: any) => {
    const confirm = window.confirm("Bạn muốn xóa không!");
    if (confirm) {
        await removeCategory(id);
        const newList =  data.filter((item: any) => item.id !== id);
        toast.success("Xóa danh mục thành công")
        mutate(newList)
    }
  }
  return {
    data,
    error,
    removeCate
  };
};

export default useCategories;
