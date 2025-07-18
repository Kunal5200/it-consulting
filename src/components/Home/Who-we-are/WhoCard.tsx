import { COLORS } from "@/utils/enum";
import { WHO_CARD_PROPS } from "@/utils/types";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
const WhoCard = ({ reverse, description, img }: WHO_CARD_PROPS) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        width: { lg: "600px", xs: "350px" },
        height: { lg: "350px", xs: "800px" },
        border: "1px solid #292929",
        ":after": {
          content: "''",
          position: "absolute",
          top: "-100%",
          left: "-100%",
          width: "200%",
          height: "200%",
          background:
            "linear-gradient(120deg, transparent,#F96C0A20 , transparent)",
          transform: "rotate(25deg)",
          transition: "all 0.5s ease",
          zIndex: 1,
          pointerEvents: "none",
        },
        ":hover": {
          ":after": {
            top: 0,
            left: 0,
          },
        },
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Grid
        container
        flexDirection={reverse ? "row-reverse" : "row"}
        spacing={2}
      >
        <Grid size={{ lg: 7, xs: 12 }}>
          <Stack flexDirection={reverse ? "column-reverse" : "column"}>
            <Typography
              sx={{
                color: COLORS.WHITE,
                fontSize: 22,
                fontFamily: "clash-display",
                marginBottom: reverse ? 0 : { lg: "100px", xs: "50px" },
                lineHeight: "28px",
              }}
            >
              {description}
            </Typography>
            <Box
              sx={{
                backgroundColor: reverse ? COLORS.TRANSPARENT : COLORS.PRIMARY,
                width: 30,
                height: 30,
                borderRadius: "5px",
                alignSelf: "flex-start",
                border: `1px solid ${COLORS.PRIMARY}`,
                marginBottom: reverse ? "100px" : 0,
              }}
            ></Box>
          </Stack>
        </Grid>
        <Grid size={{ lg: 5, xs: 12 }}>
          <Image
            src={img}
            alt="who we are"
            width={phone ? 350 : 240}
            style={{ borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoCard;
