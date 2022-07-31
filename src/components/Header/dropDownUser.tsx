import { useRouter } from "next/router";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import style from "./Dropdown.module.css";

type Props = {};

const DropDownUser = (props: Props) => {
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem('user');
    router.push('/');
  }
  return (
    <div>
      <div className={style.dropdown}>
        <button className={style.dropbtn}>
            <FaUserAlt/>
        </button>
        <div className={style['dropdown-content']}>
          <a href="#">Thông tin</a>
          <a href="#">Cập nhật</a>
          <a href=""  onClick={() => logOut()}>Đăng xuất</a>
        </div>
      </div>
    </div>
  );
};

export default DropDownUser;
