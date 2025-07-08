import { LAYOUT_PROPS } from "@/utils/types";
import React from "react";
import Header from "./Header";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { COLORS } from "@/utils/enum";

const Layout = ({ children }: LAYOUT_PROPS) => {
  return (
    <Box sx={{ backgroundColor: COLORS.BLACK }}>
      <Header />
      <CustomCursor />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
