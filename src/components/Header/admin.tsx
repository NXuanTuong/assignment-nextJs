/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import React from "react";

type Props = {};

const AdminHeader = (props: Props) => {
  return (
    <header className="shadow-sm">
      <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-1 w-0 lg:hidden">
          <button
            className="p-2 text-gray-600 bg-gray-100 rounded-full"
            type="button"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </button>
        </div>

        

        <div className="flex justify-end flex-1 w-0 lg:hidden">
          <button
            className="p-2 text-gray-500 bg-gray-100 rounded-full"
            type="button"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <nav className="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0">
          <p className="text-gray-900" >
            <Link href={""}>DashBoard</Link>
          </p>
          <p className="text-gray-900" >
            <Link href={""}>Products</Link>
          </p>
          <p className="text-gray-900" >
            <Link href={""}>Category</Link>
          </p>
          <p className="text-gray-900" >
            <Link href={""}>Account</Link>
          </p>
        </nav>

        
      </div>

      
    </header>
  );
};

export default AdminHeader;
