import { COLORS } from "@/utils/enum";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import service from "@/homePage/services/web-development.jpg";
import { SERVICE_DETAILS } from "@/utils/types";
const ServicesCard = ({ index, serviceTitle, img }: SERVICE_DETAILS) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{ pb: 5, pt: 5 }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={4}
          sx={{ width: 600 }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              border: !hovered
                ? "1px solid #292929"
                : `1px solid ${COLORS.PRIMARY}`,
              backgroundColor: hovered ? COLORS.PRIMARY : "#191919",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.5s ease all",
            }}
          >
            <Typography
              sx={{
                color: COLORS.WHITE,
                fontSize: 20,
                fontFamily: "clash-display",
              }}
            >
              {index}
            </Typography>
          </Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "clash-display",
              fontSize: 40,
              lineHeight: "50px",
              fontWeight: 200,
              color: COLORS.WHITE,
            }}
          >
            {serviceTitle}
          </Typography>
        </Stack>
        <Box
          sx={{
            width: 600,
            height: 200,
            borderRadius: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src={img}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              transform: hovered ? "scale(1.2)" : "none",
              transition: "0.5s ease all",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default ServicesCard;
