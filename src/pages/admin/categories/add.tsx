/* eslint-disable react-hooks/rules-of-hooks */
import AdminLayout from "@/components/Layout/admin";
import useCategories from "@/hooks/use-categories";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const addCategory = () => {
  const router = useRouter();
  const { data, error, addCate } = useCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = async (data) => {
    await addCate(data);
    toast.success("Thêm danh mục thành công");
    router.push("/admin/categories");
  };
  return (
    <div>
      <form id="form-add-category" onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                Tên
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Tên Danh Mục"
                  {...register("name", { required: true, minLength: 5 })}
                />
              </div>
            </div>

           

            

            
          </div>
          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <button
              type="submit"
              className=" m-3 btn inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Thêm mới danh mục
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
addCategory.Layout = AdminLayout;
export default addCategory;
