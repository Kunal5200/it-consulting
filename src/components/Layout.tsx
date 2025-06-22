import { LAYOUT_PROPS } from "@/utils/types";
import React from "react";
import Header from "./Header";
import CustomCursor from "./CustomCursor";

const Layout = ({ children }: LAYOUT_PROPS) => {
  return (
    <div>
      <Header />
      <CustomCursor />
      {children}
    </div>
  );
};

export default Layout;
