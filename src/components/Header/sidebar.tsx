/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="">
      <div className="flex flex-col justify-between h-screen bg-white border-r-[3px]">
        <div className="px-4 py-6">
          <span className="block font-bold h-10 rounded-lg text-center text-xl"><Link href={"/"}>SKYBOOK</Link></span>

          <nav className="flex flex-col mt-6 space-y-1">
            <div
              
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ml-3 text-sm font-medium">
              <Link href="/admin" > DashBoard </Link>
              </span>
             
            </div>

            <div
              
              className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>

              <span className="ml-3 text-sm font-medium"><Link href="/admin/products">Products</Link>  </span>
            </div>

            <div
              
              className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>

              <span className="ml-3 text-sm font-medium"><Link href="/admin/categories">Category</Link>  </span>
            </div>

            <details className="group">
              <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>

                <span className="ml-3 text-sm font-medium"><Link href={"/admin/users"}>Account </Link>  </span>

                
              </summary>
              
              
            </details>
            <div
              
              className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              
              <FaArrowLeft/>

              <span className="ml-3 text-sm font-medium"><Link href="/">Back to shop</Link>  </span>
            </div>
          </nav>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <div
            className="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0"
          >
            <div className="ml-1.5">
              <p className="text-xs">
                <strong className="block font-medium">Simon Lewis</strong>

                <span> simonlewis@fakemail.com </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
