import React from "react";
import Header from "../Header";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <h1 className="text-indigo-500 font-bold text-5xl text-center">
        Xin chào mọi người !
      </h1>
    </div>
  );
};

export default Layout;
