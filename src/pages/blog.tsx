import CaseStudy from "@/components/Home/case-study/Case-study";
import Insights from "@/components/Home/Insights";
import { Box } from "@mui/material";
import React from "react";

const Blog = () => {
  return (
    <Box sx={{ mb: 10 }}>
      {/* <Insights /> */}
      <CaseStudy />
    </Box>
  );
};

export default Blog;
