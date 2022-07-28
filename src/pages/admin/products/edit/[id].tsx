/* eslint-disable react-hooks/rules-of-hooks */
import AdminLayout from "@/components/Layout/admin";
import useProducts from "@/hooks/use-products";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {};

const editProduct = (props: Props) => {
  const router = useRouter();
  const id = router.query.id;
  const { data, error, updateProduct, readProduct } = useProducts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  useEffect(() => {
    if (!id) return;
    readProduct(id).then((res) => reset(res));
  }, [id]);
  const onSubmit: SubmitHandler<any> = (product) => {
    updateProduct(product);
    setTimeout(() => {
      router.push("/admin/products");
    }, 800);
    toast.success("Sửa sản phẩm thành công");
  };
  return (
    <div>
      <form id="form-add-product" onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="Tên Sản Phẩm"
                  {...register("name", { required: true, minLength: 5 })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ảnh
              </label>
              <div className="space-y-1 text-center">
                <input
                  id="file-upload"
                  type="text"
                  placeholder="Ảnh Sản Phẩm"
                  className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  {...register("img", { required: true })}
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Loại Hàng
                </label>
                <select
                  className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  id=""
                  {...register("status")}
                  name="status"
                >
                  <option value="0">Hết Hàng</option>
                  <option value="1">Còn Hàng</option>
                </select>
              </div>
            </div>

            {/* <div>
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Loại Hàng
                </label>
                <select
                  className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  id=""
                  {...register("cateogry")}
                  name="status"
                >
                  <option value="0">Còn hàng</option>
                  <option value="1">Hết hàng</option>
                </select>
              </div>
            </div> */}

            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                Giá Mới
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Giá Sản Phẩm"
                  {...register("price_new", {
                    required: true,
                    valueAsNumber: true,
                    min: 0,
                  })}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                Giá Cũ
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Giá Sản Phẩm"
                  {...register("price_old", {
                    required: true,
                    valueAsNumber: true,
                    min: 0,
                  })}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                Nội dung
              </label>
              <div className="mt-1">
                <textarea
                  className=" p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  {...register("desc", { required: true, minLength: 5 })}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <button
              type="submit"
              className=" m-3 btn inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sửa sản phẩm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
editProduct.Layout = AdminLayout;
export default editProduct;
