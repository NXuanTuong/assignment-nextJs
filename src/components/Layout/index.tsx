import { LayoutProps } from "@/models/layout";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

type Props = {};

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
