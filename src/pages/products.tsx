/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { search } from "@/api/product";
import ListProduct from "@/components/list-product";
import Search from "@/components/search";
import useCategories from "@/hooks/use-categories";
import useProducts from "@/hooks/use-products";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
type Props = {};

const Product = (props: Props) => {
  const [searchTerm, setsearchTerm] = useState<any>("");
  const [newProduct, setnewProduct] = useState([]);
  const { data: categories, error } = useCategories();
  const { searchProduct } = useProducts();
  const router = useRouter();
  let q = router.query.q;
  console.log(q);

  useEffect(() => {
    const getProduct = async () => {
      const dataproduct = await (
        await fetch("http://localhost:8000/api/products")
      ).json();
      if (!q) return setnewProduct(dataproduct);
      const dataList: any = await searchProduct(q);
      setnewProduct(dataList);
    };
    getProduct();
  }, [q]);
  if (!categories) return <div>Loading...</div>;
  if (error) return <div>Falied</div>;
  return (
    <div>
      <div className="flex justify-between px-[123px] bg-[#eff5f8] items-center">
        <div className="block">
          <ul className="text-center p-5">
            <li className="inline-block">
              <Link
                className="px-1 py-3 text-lg font-medium text-[#8d979d]"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="inline-block">
              <span className="px-1 text-lg font-medium text-[#8d979d] py-3">
                &gt;
              </span>
            </li>
            <li className="inline-block">
              <a
                className="px-1 text-lg font-medium text-black py-3"
                href="/product"
              >
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div>
            <p>Hiển thị một kết quả duy nhất</p>
          </div>
          <div className="mx-5">
            <select className="px-3 py-2 shadow-md">
              <option value="Thứ tự mặc định">Đơn hàng mặc định</option>
              <option value="Thứ tự mặc định">
                Thứ tự theo mức độ phổ biến
              </option>
              <option value="Thứ tự mặc định">Thứ tự theo điểm xếp hạng</option>
              <option value="Thứ tự mặc định">Cũ nhất</option>
              <option value="Thứ tự mặc định">
                Thứ tự theo giá: thấp đến cao
              </option>
              <option value="Thứ tự mặc định">
                Thứ tự theo giá: cao đến thấp
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full p-6 m-auto mt-16">
        <div
          style={{ gridTemplateColumns: "1fr 3fr" }}
          className="grid grid-cols-2 gap-16"
        >
          <div>
            <div className="mb-16">
              <h3 className="uppercase text-lg font-medium mb-5">
                DANH MỤC SẢN PHẨM
              </h3>
              <ul>
                <Search search={searchTerm} onchange={setsearchTerm} />
                <h2 className="text-2xl border-b-[1px] mx-[-16px] px-4 py-4 font-bold text-gray-900">
                  Tìm kiếm: {q}
                </h2>
              </ul>
              <div className="border p-5 bg-[#fbf9ff] shadow-md">
                <ul>
                  {categories.map((item: any, index: any) => (
                    <li key={index} className="mb-2 border-b py-2">
                      <Link
                        href=""
                        className="text-base cursor-pointer hover:text-red-500 font-semibold leading-4"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mb-16">
              <div>
                <h3 className="uppercase text-lg font-medium mb-5">
                  Lọc theo giá
                </h3>
                <input type="range" className="w-full mb-4" />
                <div className="grid grid-cols-2 gap-16">
                  <div>
                    <button className="border px-4 text-lg font-semibold py-1 rounded-full bg-red-400 hover:bg-red-500 text-white">
                      Lọc
                    </button>
                  </div>
                  <div>
                    <div className="flex">
                      <h4>Giá:</h4>
                      <p className="mx-1 font-semibold">
                        154750 <span>đ</span>
                      </p>
                    </div>
                    <div className="flex">
                      <span className="mx-3">
                        <i className="fas fa-arrows-alt-h" />
                      </span>
                      <p className="font-semibold">
                        200000 <span>đ</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-16">
              <div>
                <h3 className="uppercase text-lg font-medium mb-5">
                  Quan tâm nhất
                </h3>
              </div>
              <div className="border p-5 bg-[#fbf9ff] shadow-md">
                <div
                  style={{ gridTemplateColumns: "1fr 2fr" }}
                  className="grid grid-cols-2 gap-3 mb-4 border-b py-4"
                >
                  <div>
                    <img
                      src="https://res.cloudinary.com/assjavascript/image/upload/v1658484278/assignment-nextjs/sale-3_uruoxu.webp"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-500 uppercase">
                      Những tù nhân của địa lý
                    </p>
                    <del className="block">
                      <span className="text-red-300 text-sm">130000</span>
                      <span className="text-red-300">đ</span>
                    </del>
                    <span className="font-semibold">100000</span>
                    <span>đ</span>
                  </div>
                </div>
                <div
                  style={{ gridTemplateColumns: "1fr 2fr" }}
                  className="grid grid-cols-2 gap-3 mb-4 border-b py-4"
                >
                  <div>
                    <img
                      src="https://res.cloudinary.com/assjavascript/image/upload/v1658484278/assignment-nextjs/sale-3_uruoxu.webp"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-500 uppercase">
                      Những tù nhân của địa lý
                    </p>
                    <del className="block">
                      <span className="text-red-300 text-sm">130000</span>
                      <span className="text-red-300">đ</span>
                    </del>
                    <span className="font-semibold">100000</span>
                    <span>đ</span>
                  </div>
                </div>
                <div
                  style={{ gridTemplateColumns: "1fr 2fr" }}
                  className="grid grid-cols-2 gap-3 mb-4 border-b py-4"
                >
                  <div>
                    <img
                      src="https://res.cloudinary.com/assjavascript/image/upload/v1658484278/assignment-nextjs/sale-3_uruoxu.webp"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-500 uppercase">
                      Những tù nhân của địa lý
                    </p>
                    <del className="block">
                      <span className="text-red-300 text-sm">130000</span>
                      <span className="text-red-300">đ</span>
                    </del>
                    <span className="font-semibold">100000</span>
                    <span>đ</span>
                  </div>
                </div>
                <div
                  style={{ gridTemplateColumns: "1fr 2fr" }}
                  className="grid grid-cols-2 gap-3 mb-4 border-b py-4"
                >
                  <div>
                    <img
                      src="https://res.cloudinary.com/assjavascript/image/upload/v1658484278/assignment-nextjs/sale-3_uruoxu.webp"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-500 uppercase">
                      Những tù nhân của địa lý
                    </p>
                    <del className="block">
                      <span className="text-red-300 text-sm">130000</span>
                      <span className="text-red-300">đ</span>
                    </del>
                    <span className="font-semibold">100000</span>
                    <span>đ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-16">
              <h3 className="uppercase text-lg font-medium mb-5">
                BỘ SƯU TẬP ẢNH SẢN PHẨM
              </h3>
              <div className="border p-5 bg-[#fbf9ff] shadow-md">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <img
                      src="https://res.cloudinary.com/assjavascript/image/upload/v1658484278/assignment-nextjs/sale-4_opuiac.webp"
                      className="mb-4 w-full"
                    />
                    <img
                      src="https://res.cloudinary.com/assjavascript/image/upload/v1658484278/assignment-nextjs/lichsu_cqiqca.jpg"
                      className="mb-4 w-full"
                    />
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/assjavascript/image/upload/v1658484278/assignment-nextjs/sale-1_cdtoib.webp"
                      className="mb-4 w-full"
                    />
                    <img
                      src="https://res.cloudinary.com/assjavascript/image/upload/v1658484278/assignment-nextjs/sale-3_uruoxu.webp"
                      className="mb-4 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* The End Grid-1 */}
          {/* Start Grid-2 */}
          <ListProduct newProduct={newProduct} />
        </div>
      </div>
    </div>
  );
};

export default Product;
