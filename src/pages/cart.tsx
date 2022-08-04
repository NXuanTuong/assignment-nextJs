/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import useCart from "@/hooks/use-cart";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaAngleLeft, FaAngleRight, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

type Props = {};

const Cart = (props: Props) => {
  const router = useRouter();
  const {data, error, increase, decrease} = useCart();
  let total_price = 0;
  const cart: any = JSON.parse(localStorage.getItem("cart") || "[]");
   console.log(cart);
   cart.forEach((element:any) => {
    console.log(element.total);
    total_price += element.total
   });
   
  

  const handleDeleteCart = (id: any) => {
    const confirm = window.confirm("Bạn có muốn xóa không!")
    if(confirm){
      let cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems = cartItems.filter((item: any) => item._id !== id);
    toast.success("Xóa sản phẩm thành công");
    setTimeout(() => {
      router.replace("/cart");
    }, 500);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    
  };
  const handleIncrease = (id: any) => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItem = cartItems.find((item:any) => item._id === id);
    cartItem.quantity++
    cartItem.total += cartItem.price_new
    localStorage.setItem('cart', JSON.stringify(cartItems))
    router.replace('/cart')
  }
  const handleDecrease = (id: any) => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItem = cartItems.find((item:any) => item._id === id);
    if(cartItem.quantity <= 1){
      const confirm = window.confirm("Bạn có muốn xóa không!");
      if(confirm){
        localStorage.setItem('cart', JSON.stringify(cartItems.filter((item: any) => item._id !== id)));
        toast.success("Xóa sản phẩm thành công");
        return router.replace("/cart")
      }
    }else{
      cartItem.quantity--
      cartItem.total -= cartItem.price_new
      localStorage.setItem('cart', JSON.stringify(cartItems))
      router.replace('/cart')
    }
    
  }
  return (
    <div>
      <div>
        <div className="bg-[#eff5f8] block">
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
              <Link
                className="px-1 text-lg font-medium text-black py-3"
                href="/cart"
              >
                Shopping Cart
              </Link>
            </li>
          </ul>
        </div>
        {cart.length == [] ? (
          <div className="relative">
            <img
              className="m-auto"
              src="https://img.pikbest.com/png-images/20191028/little-boy-pushing-a-shopping-cart-to-buy-things-gif_2515305.png!bw700"
            />
            <h2 className="absolute top-20 left-[550px] font-bold text-center mt-0 text-2xl text-indigo-500">
              Chưa có sản phẩm nào trong giỏ hàng
            </h2>
          </div>
        ) : (
          <div className="max-w-7xl w-full p-6 m-auto mt-20">
            <div className="content-cart">
              <div className="content-cart-columns">
                <div className="flex justify-around items-center mb-5">
                  <div>
                    <p className="text-lg font-bold uppercase">Shopping Cart</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold uppercase"> Items</p>
                  </div>
                </div>
                <div style={{ borderTop: "2px solid #dee2e6" }} />
                <div className="flex justify-around item-center mt-5">
                  <div>
                    <div
                      style={{
                        width: "776px",
                        height: 635,
                        overflow: "scroll",
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>Ảnh sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá sản phẩm</th>
                            <th>Tổng tiền</th>
                            <th>Hoạt động</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((item: any, index: any) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <img
                                    src={`${item.img}`}
                                    className="w-[150px] object-cover max-w-full h-40"
                                  />
                                </td>
                                <td className="text-sm w-[150px] text-center">
                                  {item.name}
                                </td>
                                <td className=" w-[120px] text-center">
                                  <button onClick={() => handleDecrease(item._id)} className="btn btn-decrease  text-lg font-semibold border bg-orange-500 text-white">
                                    <FaAngleLeft />
                                  </button>
                                  <input
                                    className="w-16 text-center px-5 border boder-gray-500 outline-none"
                                    type="text"
                                    value={`${item.quantity}`}
                                  />
                                  <button onClick={() => handleIncrease(item._id)} className="btn btn-increase text-lg font-semibold border bg-green-500 text-white">
                                    <FaAngleRight />
                                  </button>
                                </td>
                                <td className="text-center w-[120px]">
                                  {item.price_new}đ
                                </td>
                                <td className="text-center  w-[120px]">
                                  {item.total}đ
                                </td>
                                <td className="text-center">
                                  <button
                                    onClick={() => handleDeleteCart(item._id)}
                                    className="btn btn-remove"
                                  >
                                    <FaTrash />
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <button className="btn-continue">
                      <a>
                        <i className="fas fa-long-arrow-alt-left" /> Tiếp tục
                        xem sản phẩm
                      </a>
                    </button>
                  </div>
                  <div className="content-cart-pay h-[700px]">
                    <div className="mb-5">
                      <p className="text-lg font-semibold">Oder Summary</p>
                    </div>
                    <div
                      style={{ borderTop: "2px solid #ccc" }}
                      className="w-full"
                    />
                    <div className="mt-10 mb-10">
                      <p className="text-base font-semibold mb-2 uppercase">
                        Shipping
                      </p>
                      <select className="border boder-gray-300 px-2 py-3 w-72 outline-none">
                        <option value="Inner city - $ 3,00">
                          Inner city - $ 3,00
                        </option>
                        <option value="Suburban - $ 5,00">
                          Inner city - $ 5,00
                        </option>
                        <option value="Whole Country - $ 10,00">
                          Whole Country - $ 10,00
                        </option>
                      </select>
                    </div>
                    <div className="mt-10 mb-10">
                      <p className="text-base font-semibold mb-2 uppercase">
                        Promo Code
                      </p>
                      <input
                        className="px-2 py-3 w-72 rounded-lg border border-gray-300 outline-none"
                        type="text"
                        placeholder="Enter your code"
                      />
                      <button className="block mt-5 text-lg font-semibold border boder-gray-300 px-2 py-2 bg-red-500 w-28 text-white rounded">
                        Apply
                      </button>
                    </div>
                    <div
                      style={{ borderTop: "2px solid #ccc" }}
                      className="w-full"
                    />
                    <div className="flex justify-between items-center mt-10 mb-10">
                      <div>
                        <p className="text-lg font-semibold uppercase">
                          Total Cost
                        </p>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-lg font-semibold text-red-500 px-3">
                          $
                        </span>
                        <p
                          id="total_cart"
                          className="text-lg font-semibold text-red-500"
                        >
                          {total_price}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="text-center px-2 py-3 text-lg font-semibold rounded bg-green-600 text-white w-full">
                        <Link href="/#/checkout">Check Out</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
