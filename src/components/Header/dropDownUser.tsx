import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import style from "./Dropdown.module.css";
import { toast } from "react-toastify";

type Props = {};

const DropDownUser = (props: Props) => {
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem('user');
    toast.success("Bạn đăng xuất thành công!")
    setTimeout(() => {
      router.replace('/auth/login')
    },1000)
  }
  return (
    <div>
      <div className={style.dropdown}>
        <button className={style.dropbtn}>
            <FaUserAlt/>
        </button>
        <div className={style['dropdown-content']}>
          <Link href="/user/detail">Thông tin</Link>
          <Link href="/user/edit">Cập nhật</Link>
          <p onClick={() => logOut()}> <Link href="">Đăng xuất</Link></p>
          
        </div>
      </div>
    </div>
  );
};

export default DropDownUser;
