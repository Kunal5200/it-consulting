import banner from "@/homePage/home-banner.png";
import { COLORS } from "@/utils/enum";
import { Box, Container, Grid, Typography } from "@mui/material";
const Banner = ({}) => {
  return (
    <Box sx={{ backgroundColor: COLORS.BLACK }}>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          height: "90vh",
          backgroundPosition: "50%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          paadingTop: 100,
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            sx={{ paddingTop: 20 }}
            spacing={10}
            alignItems={"center"}
          >
            <Grid size={4}>
              <Typography
                sx={{
                  fontSize: 120,
                  color: COLORS.WHITE,
                  textTransform: "uppercase",
                  //   fontWeight: "900 !important",
                  fontFamily: "clash-bold",
                  lineHeight: "100px",
                  letterSpacing: 1.2,
                }}
              >
                AIM
              </Typography>
            </Grid>
            <Grid size={5}>
              <Typography
                sx={{
                  fontSize: 20,
                  color: COLORS.WHITE,
                  textTransform: "uppercase",
                  //   fontWeight: "900 !important",
                  fontFamily: "clash-display",
                  lineHeight: "26px",
                  //   letterSpacing: 1.2,
                }}
              >
                Everything we do , we do it better. chose your entail from web
                platforms, native apps, machine learning, immersive tech, and
                Web3. Code to cloud.
              </Typography>
            </Grid>
          </Grid>

          {/* <Grid container mt={2}>
            <Grid size={3.5} margin={"auto"} spacing={10}>
              <Button
                endIcon={<ArrowForward sx={{ color: COLORS.WHITE }} />}
                sx={{
                  mt: 4,
                }}
              >
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "clash-display",
                    fontSize: 20,
                    color: COLORS.WHITE,
                    borderBottom: `1px solid ${COLORS.WHITE}`,
                  }}
                >
                  Projects
                </Typography>
              </Button>
            </Grid>
          </Grid> */}
          <Grid container mt={5} spacing={10}>
            <Grid size={4}></Grid>
            <Grid size={5} sx={{ borderLeft: `5px solid ${COLORS.PRIMARY}` }}>
              <Box sx={{ paddingLeft: "30px" }}>
                <Typography
                  sx={{
                    fontSize: 30,
                    fontFamily: "clash-display",
                    textTransform: "uppercase",
                    color: COLORS.WHITE,
                  }}
                >
                  where innovation
                </Typography>
                <Typography
                  sx={{
                    fontSize: 30,
                    fontFamily: "clash-display",
                    textTransform: "uppercase",
                    color: COLORS.WHITE,
                  }}
                >
                  Meets Design.
                </Typography>
              </Box>
            </Grid>
            <Grid size={3}>
              <Typography
                sx={{
                  fontSize: 120,
                  color: COLORS.WHITE,
                  textTransform: "uppercase",
                  //   fontWeight: "900 !important",
                  fontFamily: "clash-bold",
                  lineHeight: "100px",
                  letterSpacing: 1.2,
                }}
              >
                sky
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
