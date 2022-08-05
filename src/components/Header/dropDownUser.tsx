import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import style from "./Dropdown.module.css";
import { toast } from "react-toastify";

type Props = {};

const DropDownUser = (props: Props) => {
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("user") as string);
  console.log(user);

  const logOut = () => {
    localStorage.removeItem("user");
    toast.success("Bạn đăng xuất thành công!");
    setTimeout(() => {
      router.replace("/auth/login");
    }, 1000);
  };
  return (
    <div>
      <div className={style.dropdown}>
        <button className={style.dropbtn}>
          <FaUserAlt />
        </button>
        {user && user.user.role === 1 ? (
          <div className={style["dropdown-content"]}>
            <Link href="/user/detail">Thông tin</Link>
            <Link href="/user/edit">Cập nhật</Link>
            <Link href="/admin">Admin</Link>
            <p onClick={() => logOut()}>
              {" "}
              <Link href="">Đăng xuất</Link>
            </p>
          </div>
        ) : (
          <div className={style["dropdown-content"]}>
            <Link href="/user/detail">Thông tin</Link>
            <Link href="/user/edit">Cập nhật</Link>
            <p onClick={() => logOut()}>
              {" "}
              <Link href="">Đăng xuất</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownUser;
