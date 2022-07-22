import Link from "next/link";
import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <div className="w-[550px] mx-auto shadow-xl rounded-lg bg-white p-8 mt-5 mb-8">
      <h1 className="text-center font-medium text-3xl">Đăng Ký Tài Khoản</h1>
      <form
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
              className="appearance-none  relative block w-full px-4 py-2 border border-[#f7f7f7]   bg-[#f7f7f7]  placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-[#f4e6c3] focus:border-[#f4e6c3] focus:border-4 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div className="my-4 py-2">
            <label className=" font-medium text-[#d3b87d] hover:text-[#d3b87d] ">
              Mật Khẩu
            </label>
            <input
              type="password"
              autoComplete="current-password"
              className="appearance-none bg-[#f7f7f7]  relative block w-full px-4 py-2 border border-[#f7f7f7]   placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus: ring-[#f4e6c3] focus:border-4 focus:border-[#f4e6c3] focus:z-10 sm:text-sm"
              placeholder="Mật Khẩu"
            />
          </div>
          <div className="my-4 py-2">
            <label className=" font-medium text-[#d3b87d] hover:text-[#d3b87d]">
              Họ Và Tên
            </label>
            <input
              type="text"
              className="appearance-none  relative block w-full px-4 py-2 border border-[#f7f7f7]   bg-[#f7f7f7]  placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-[#f4e6c3] focus:border-[#f4e6c3] focus:border-4 focus:z-10 sm:text-sm"
              placeholder="Họ Và Tên"
            />
          </div>
          <div className="my-4 py-2">
            <label className=" font-medium text-[#d3b87d] hover:text-[#d3b87d]">
              Địa Chỉ
            </label>
            <input
              type="text"
              className="appearance-none  relative block w-full px-4 py-2 border border-[#f7f7f7]   bg-[#f7f7f7]  placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-[#f4e6c3] focus:border-[#f4e6c3] focus:border-4 focus:z-10 sm:text-sm"
              placeholder="Địa Chỉ"
            />
          </div>
          <div className="my-4 py-2">
            <label className=" font-medium text-[#d3b87d] hover:text-[#d3b87d]">
              Số Điện Thoại
            </label>
            <input
              type="text"
              className="appearance-none  relative block w-full px-4 py-2 border border-[#f7f7f7]   bg-[#f7f7f7]  placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-[#f4e6c3] focus:border-[#f4e6c3] focus:border-4 focus:z-10 sm:text-sm"
              placeholder="Số Điện Thoại"
            />
          </div>
        </div>
        <div>
          <div className="text-sm">
            <p>
              Bạn đã có tài khoản?
              <Link
                href="/auth/login"
              >
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
