import { COLORS } from "@/utils/enum";
import { NUMBER_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";

const NumberCard = ({
  bgColor,
  numbers,
  title,
  circleBgColor,
  textColor,
}: NUMBER_CARD_PROPS) => {
  return (
    <Box
      sx={{
        minHeight: 320,
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        height: "auto",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: circleBgColor,
          borderRadius: "50%",
          width: 20,
          height: 20,
        }}
      ></Box>
      <Box sx={{ marginTop: "auto" }}>
        <Typography
          sx={{
            fontSize: 70,
            marginBottom: "15px",
            fontWeight: 500,
            fontFamily: "clash-display",
            lineHeight: "50px",
            color: textColor,
          }}
        >
          {numbers}
        </Typography>
        <Typography
          sx={{
            fontSize: 20,
            marginBottom: "15px",
            fontWeight: 500,
            fontFamily: "clash-display",
            lineHeight: "50px",
            color: COLORS.WHITE,
            textTransform: "capitalize",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default NumberCard;
