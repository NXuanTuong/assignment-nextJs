/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ListProduct = ({newProduct}: any) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div className="grid grid-cols-3 mb-5 gap-10" id="product">
              {newProduct.length > 0 && 
                newProduct.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="px-3 py-7 shadow hover:shadow-lg product_item"
                  >
                    <div className="relative overflow-hidden">
                      <Link href={`/product-details/${item._id}?category=${item.category._id}`}>
                        <img
                          src={item.img}
                          className="object-cover w-full h-64 cursor-pointer"
                        />
                      </Link>
                      <span>
                        <p>
                          {item.status === "0" ? (
                            <div className="absolute top-[5%] bg-gray-300 px-5 rounded-2xl text-white py-1 border -left-[5%]">
                              Hết Hàng
                            </div>
                          ) : (
                            <div className="absolute top-[5%] bg-green-500 px-5 rounded-2xl text-white py-1 border -left-[5%]">
                              Còn Hàng
                            </div>
                          )}
                        </p>
                      </span>
                      <span className="text-black icon_heart cursor-pointer absolute text-2xl -top-[2%] right-[9px] hover:text-red-500">
                        <i className="bi bi-heart" />
                      </span>
                      <div className="absolute top-[47%] -left-[5%] mx-5 feedback_item_product">
                        <ul>
                          <li className="text-yellow-300 cursor-pointer">
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li className="text-yellow-300 cursor-pointer">
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li className="text-yellow-300 cursor-pointer">
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li className="text-yellow-300 cursor-pointer">
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li className="cursor-pointer">
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <div className="hover:bg-red-500 btn_add_cart cursor-pointer top-[80%] left-[25%] delay-150 duration-200 ease-in-out py-1 px-3 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
                        <button>
                          Add to Cart{" "}
                          <span>
                            <i className="fas fa-shopping-cart" />
                          </span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Link href={`/product-details/${item._id}`}>
                          <h3 className="text-base mb-2 font-semibold cursor-pointer text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden">
                            {item.name}
                          </h3>
                        </Link>
                        <div className="flex justify-center items-center">
                          <del className="text-red-300">
                            <span>{item.price_old}đ</span>
                          </del>
                          <p className="px-2 font-semibold text-lg">
                            <span>{item.price_new}đ</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="text-center">
            <ul className="block">
              <li className="inline-block px-4 py-2 border">
                <a className="text-[#777]" href="#">
                  <i className="fas fa-angle-left" />
                </a>
              </li>
              <li className="inline-block px-4 py-2 border">
                <button className="text-[#777]">1</button>
              </li>
              <li className="inline-block px-4 py-2 border">
                <button className="text-[#777]">2</button>
              </li>
              <li className="inline-block px-4 py-2 border">
                <a className="text-[#777]" href="#">
                  <i className="fas fa-angle-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
