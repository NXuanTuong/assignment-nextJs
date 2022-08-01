import { addCategory, readCategory, removeCategory, updateCategory, updateStatusCate } from "@/api/category";
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
  const readCate = async(id: any) => {
    const getCategory =  await readCategory(id);
    return getCategory
  }
  const updateCate = async(category: any) => {
    await updateCategory(category);
    mutate(data.map((item: any) => item.id === category.id ? category : item ));
    toast.success("Cập nhật danh mục thành công");
  }
  const updateStatus = async (id:any,newStatus:any)=>{
    await updateStatusCate(id,{
      status:newStatus
    });
    
    mutate(data.map((item: any) => (item.id === id ? item.status = newStatus :item.status)));
  }
  return {
    data,
    error,
    addCate,
    removeCate,
    readCate,
    updateStatus,
    updateCate
  };
};

export default useCategories;
