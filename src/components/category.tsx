import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = any;

const Category = ({ categories }: Props) => {
  const router = useRouter();
  const handleCategory = async (id: any) => {
    router.replace(`?id=${id}`);
  };
  return (
    <div>
      <ul>
        {categories.map((item: any, index: any) => (
          <li
            key={index}
            onClick={() => handleCategory(item._id)}
            className="mb-2 border-b py-2"
          >
            <p
              className="text-base cursor-pointer hover:text-red-500 font-semibold leading-4"
            >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
