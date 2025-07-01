import { COLORS } from "@/utils/enum";
import { Add } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface WhoTitleProps {
  title: string;
  subTitle: string;
  reverse?: boolean;
}
const WhoTitle = ({ title, subTitle, reverse }: WhoTitleProps) => {
  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        sx={{ flexDirection: reverse ? "row-reverse" : "row" }}
      >
        <Add sx={{ color: COLORS.PRIMARY, fontSize: 120, fontWeight: 200 }} />
        <Box>
          <Typography
            sx={{
              fontFamily: "clash-display",
              fontSize: 40,
              color: COLORS.WHITE,
              fontWeight: 200,
              textTransform: "uppercase",
              lineHeight: "40px",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "clash-display",
              fontSize: 40,
              color: COLORS.WHITE,
              fontWeight: 200,
              textTransform: "uppercase",
              lineHeight: "40px",
            }}
          >
            {subTitle}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default WhoTitle;
