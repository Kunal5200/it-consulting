import { Box, Button, Typography } from "@mui/material";
import React from "react";
import work1 from "@/homePage/work/img1.png";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { WORK_CARD_PROPS } from "@/utils/types";
const WorkCard = ({ img, heading }: WORK_CARD_PROPS) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        borderRadius: "10px",
        position: "relative",
        ":after": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.3))",
          mixBlendMode: "overlay",
          opacity: 0,
          transition: "opacity 0.5s ease",
          zIndex: 2,
        },
        ":hover": {
          ".button_heading": {
            translateY: 0,
            opacity: 1,
          },
          ".img": {
            scale: 1.1,
          },
          ".text": {
            opacity: 1,
          },
        },
        p: 2,
      }}
    >
      <Image
        src={img}
        alt=""
        style={{
          width: "100%",
          height: 350,
          borderRadius: "30px",
          transition: "0.5s ease all",
        }}
        className="img"
      />
      <Typography
        sx={{
          fontSize: 46,
          fontWeight: 500,
          lineHeight: "40px",
          marginTop: "22px",
          color: COLORS.WHITE,
          opacity: 0.3,
          fontFamily: "clash-display",
        }}
        className="text"
      >
        {heading}
      </Typography>
      <Button
        sx={{
          mt: 2,
          backgroundColor: COLORS.PRIMARY,
          borderRadius: "5px",
          padding: "8px 11px 8px 12px",
          color: COLORS.WHITE,
          fontFamily: "clash-display",
          translateY: "10px",
          opacity: 0,
          zIndex: 3,
          transition: "all 0.5s ease 0.2s",
        }}
        className="button_heading"
      >
        Branding
      </Button>
    </Box>
  );
};

export default WorkCard;
