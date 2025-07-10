import { COLORS } from "@/utils/enum";
import { PAGE_TITLE_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";

const PageTitle = ({ title, subTitle }: PAGE_TITLE_PROPS) => {
  return (
    <Box
      sx={{
        border: "1px solid #292929",
        borderRadius: "5px",
        padding: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        sx={{
          fontFamily: "clash-display",
          fontSize: 38,
          fontWeight: 300,
          color: COLORS.WHITE,
        }}
      >
        {title}
      </Typography>
      {subTitle && (
        <Box
          sx={{
            border: "1px solid #292929",
            backgroundColor: "#000000b3",
            borderRadius: "5px",
            marginLeft: "20px",
            padding: "7px 9px",
            color: COLORS.WHITE,
          }}
        >
          {subTitle}
        </Box>
      )}
    </Box>
  );
};

export default PageTitle;
