import { addCategory, removeCategory } from "@/api/category";
import { add, read, remove, update } from "@/api/product";
import React from "react";
import useSWR from "swr";
import { toast } from "react-toastify";


const useCategories = () => {
  const { data, error, mutate } = useSWR("/category");
  const addCate = async (category: any) => {
    const newCategory = await addCategory(category);
    mutate([...data,newCategory]);
  }
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
    addCate,
    removeCate
  };
};

export default useCategories;
