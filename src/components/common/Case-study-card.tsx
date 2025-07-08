import { Box, Button, Typography } from "@mui/material";
import React from "react";
import image from "@/homePage/case/case1.jpg";
import { COLORS } from "@/utils/enum";
import { ArrowForward } from "@mui/icons-material";
import { CASE_STUDY_PROPS } from "@/utils/types";
const CaseStudyCard = ({ img, heading }: CASE_STUDY_PROPS) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        ":hover": {
          ".img": {
            transform: "scale(1.05)",
          },
          ".button_read": {
            textDecoration: "underline",
          },
          ".overlay": {
            backgroundColor: "#00000080",
          },
        },
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          height: "70vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "10px",
          transition: "0.5s ease all",
        }}
        className="img"
      >
        <Box
          sx={{
            backgroundColor: "#00000050",
            height: "100%",
            transition: "0.5s ease all",
          }}
          className="overlay"
        ></Box>
      </Box>
      <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
        <Typography
          sx={{
            fontSize: 30,
            color: COLORS.WHITE,
            fontFamily: "clash-display",
          }}
        >
          {heading}
        </Typography>
        <Button
          sx={{
            fontFamily: "clash-display",
            color: COLORS.WHITE,
            fontSize: 18,
          }}
          endIcon={<ArrowForward />}
          className="button_read"
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default CaseStudyCard;
