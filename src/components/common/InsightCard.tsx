import { COLORS } from "@/utils/enum";
import { Shortcut } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import insightImage from "@/homePage/insights/post1.jpg";
import { INSIGHTS_PROPS } from "@/utils/types";
const InsightCard = ({ category, title, img }: INSIGHTS_PROPS) => {
  return (
    <Box
      sx={{
        border: "1px solid #292929",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ":after": {
          content: "''",
          position: "absolute",
          top: "-100%",
          left: "-100%",
          width: "200%",
          height: "200%",
          background:
            "linear-gradient(120deg, transparent, rgb(127 127 127 / 20%), transparent)",
          transform: "rotate(25deg)",
          transition: " 0.5s ease all ",
          zIndex: 0,
          pointerEvents: "none",
        },
        ":hover": {
          ":after": {
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.08), transparent)",
            transform: "rotate(-25deg)",
            transition: "left 0.5s ease",
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "200%",
            height: "200%",
          },
          ".blog_img": {
            transform: "scale(1.05)",
          },
          boxShadow: `{0 0 5px ${COLORS.PRIMARY}}`,
          border:`1px solid ${COLORS.PRIMARY}`
          //   transform: "scale(1.03) translateY(-4px)",
        },
        mt: 5,
      }}
    >
      <Box>
        <Box
          sx={{
            border: `1px solid ${COLORS.PRIMARY}`,
            color: COLORS.WHITE,
            borderRadius: "10px",
            padding: "7px 16px",
            opacity: "0.7",
            transform: "translateY(15px)",
            transition: "all 0.5s ease",
            width: 100,
          }}
        >
          {category}
        </Box>
        <Typography
          sx={{
            color: COLORS.WHITE,
            width: "90%",
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: "44px",
            mt: "35px",
            fontFamily: "clash-display",
          }}
        >
          {title}
        </Typography>
        <Divider sx={{ width: "20%", backgroundColor: "rgb(41,41,41)" }} />
        <IconButton
          sx={{
            backgroundColor: "#333333",
            borderRadius: "50%",
            justifyContent: "center",
            width: 55,
            height: 55,
            display: "flex",
            alignItems: "center",
            mt: 2,
            ":hover": {
              ".icon": {
                color: COLORS.PRIMARY,
              },
              backgroundColor: "#333333",
            },
          }}
        >
          <Shortcut sx={{ color: COLORS.WHITE }} className="icon" />
        </IconButton>
      </Box>
      <Box
        sx={{
          borderRadius: "5px",
          width: "420px",
          height: 280,
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={img}
          alt=""
          style={{
            verticalAlign: "middle",
            display: "inline-block",
            borderRadius: "5px",
            width: "100%",
            height: "100%",
            transition: "0.5s ease all",
          }}
          className="blog_img"
        />
      </Box>
    </Box>
  );
};

export default InsightCard;
