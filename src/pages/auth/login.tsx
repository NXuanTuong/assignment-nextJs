import Link from "next/link";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div>
      <div>
        <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <section>
            <h3 className="font-bold text-2xl">Welcome to SKYBOOK</h3>
          </section>
          <section className="mt-10">
            <form className="flex flex-col" method="POST" action="#">
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                />
              </div>
              <div className="flex justify-between mb-3">
                <div className=" ">
                  <Link
                    href="/auth/register"
                    
                  >
                    <p className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">
                    Đăng Ký
                    </p>
                  </Link>
                </div>
                <div className=" ">
                  <Link
                    href="#"
                    
                  >
                    <p className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">
                    Bạn quên mật khẩu ?
                    </p>
                  </Link>
                </div>
              </div>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Đăng Nhập
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
