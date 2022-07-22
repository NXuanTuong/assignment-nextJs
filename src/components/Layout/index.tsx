import { LayoutProps } from "@/models/layout";
import React, { Children } from "react";
import Footer from "../Footer";
import Header from "../Header";

type Props = {};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
