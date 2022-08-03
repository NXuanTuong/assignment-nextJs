import { signup } from "@/api/auth";
import { AppDispatch } from "@/app/store";
import { registerAuth } from "@/features/auth/auth.slice";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Vui lòng nhập địa chỉ email")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không đúng định dạng"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(6, "Mật khẩu tối thiểu từ 6 ký tự"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(
      /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/,
      "Số điện thoại không đúng định dạng"
    ),
  name: yup.string().required("Vui lòng nhập họ và tên"),
  address: yup.string().required("Vui lòng nhập địa chỉ"),
});
type FormInput = {
  email: string;
  password: string | number;
  name: string;
  address: string;
  phone: string;
};
const RegisterPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      await signup(data);
      dispatch(registerAuth(data));
      toast.success("Đăng ký thành công");
      router.replace("/auth/login");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="w-[550px] mx-auto shadow-xl rounded-lg bg-white p-8 mt-5 mb-8">
      <h1 className="text-center font-medium text-3xl">Đăng Ký Tài Khoản</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-6"
        action="#"
        id="form-signin"
        method="POST"
      >
        <div className="rounded">
          <div className="my-4 py-2">
            <label className=" font-medium text-[#d3b87d] hover:text-[#d3b87d]">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              name="email"
              className="appearance-none  relative block w-full px-4 py-2 border border-[#f7f7f7]   bg-[#f7f7f7]  placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-[#f4e6c3] focus:border-[#f4e6c3] focus:border-4 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            <p className="text-sm text-red-500 ">{errors.email?.message}</p>
          </div>
          <div className="my-4 py-2">
            <label className=" font-medium text-[#d3b87d] hover:text-[#d3b87d] ">
              Mật Khẩu
            </label>
            <input
              type="password"
              {...register("password")}
              name="password"
              autoComplete="current-password"
              className="appearance-none bg-[#f7f7f7]  relative block w-full px-4 py-2 border border-[#f7f7f7]   placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus: ring-[#f4e6c3] focus:border-4 focus:border-[#f4e6c3] focus:z-10 sm:text-sm"
              placeholder="Mật Khẩu"
            />
            <p className="text-sm text-red-500 ">{errors.password?.message}</p>
          </div>
          <div className="my-4 py-2">
            <label className=" font-medium text-[#d3b87d] hover:text-[#d3b87d]">
              Họ Và Tên
            </label>
            <input
              type="text"
              {...register("name")}
              name="name"
              className="appearance-none  relative block w-full px-4 py-2 border border-[#f7f7f7]   bg-[#f7f7f7]  placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-[#f4e6c3] focus:border-[#f4e6c3] focus:border-4 focus:z-10 sm:text-sm"
              placeholder="Họ Và Tên"
            />
            <p className="text-sm text-red-500 ">{errors.name?.message}</p>
          </div>
          <div className="my-4 py-2">
            <label className=" font-medium text-[#d3b87d] hover:text-[#d3b87d]">
              Địa Chỉ
            </label>
            <input
              type="text"
              {...register("address")}
              name="address"
              className="appearance-none  relative block w-full px-4 py-2 border border-[#f7f7f7]   bg-[#f7f7f7]  placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-[#f4e6c3] focus:border-[#f4e6c3] focus:border-4 focus:z-10 sm:text-sm"
              placeholder="Địa Chỉ"
            />
            <p className="text-sm text-red-500 ">{errors.address?.message}</p>
          </div>
          <div className="my-4 py-2">
            <label className=" font-medium text-[#d3b87d] hover:text-[#d3b87d]">
              Số Điện Thoại
            </label>
            <input
              type="text"
              {...register("phone")}
              name="phone"
              className="appearance-none  relative block w-full px-4 py-2 border border-[#f7f7f7]   bg-[#f7f7f7]  placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-[#f4e6c3] focus:border-[#f4e6c3] focus:border-4 focus:z-10 sm:text-sm"
              placeholder="Số Điện Thoại"
            />
            <p className="text-sm text-red-500 ">{errors.phone?.message}</p>
          </div>
        </div>
        <div>
          <div className="text-sm">
            <p>
              Bạn đã có tài khoản?
              <Link href="/auth/login">
                <p className="font-medium text-indigo-600 hover:text-indigo-500">
                  Đăng nhập
                </p>
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="group relative mt-3 w-full flex justify-center py-2 px-4 border border-transparent text-lg font-bold rounded-full text-white bg-[#b78a28]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b78a28]"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
