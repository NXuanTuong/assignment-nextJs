import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import style from "./Home.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className={style.mainHeader}>
        <div className={style.containerfluid}>
          <div className={style.flexcontainerfluid}>
            <div className={style.headerwraplogo}>
              <div
                className={style.wraplogo}
                itemScope
                itemType="http://schema.org/Organization"
              >
                <h1>
                  <a itemProp="url">
                    SkyBook
                  </a>
                </h1>
              </div>
            </div>
            <div className={style.headerwrapmenu}>
              <nav className={style.navbarmainmenu}>
                <ul className={style.menuListprimary}>
                  <li>
                    <Link href="/" title="Trang chủ">
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" title="Sản phẩm">
                      Sản phẩm
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs/news" title="Blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/about-us" title="Giới thiệu">
                      Giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://skybook.myharavan.com/pages/lien-he"
                      title="Liên hệ"
                    >
                      Liên hệ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={style.headerwrapaction}>
              <div className="form">
                <div className={style.cssform}>
                  <FaUserAlt />
                  <ul>
                    <li>
                      <Link href="/auth/login">Đăng nhập</Link>
                    </li>
                    |
                    <li>
                      <Link href="/auth/register">Đăng ký</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={style.cart}>
                <Link href="cart">
                  <FaShoppingCart />
                </Link>
                <span className="length-cart">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
