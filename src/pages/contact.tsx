import PageTitle from "@/components/Home/components/PageTitle";
import { COLORS } from "@/utils/enum";
import { loginTextField } from "@/utils/styles";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import bgImage from "@/homePage/home-banner.png";

const Contact = () => {
  const social = [
    {
      label: "Facebook",
    },
    {
      label: "Linked In",
    },
    {
      label: "Twitter",
    },
  ];
  return (
    <Box sx={{ backgroundImage: `url(${bgImage.src})`,height:"100vh" }}>
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <PageTitle title="Contact" subTitle="Get in touch" />

        <Grid container mt={10} mb={10} alignItems={"center"} spacing={4}>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: "40px",
                paddingBottom: "30px",
                borderBottom: `1px solid ${COLORS.WHITE}`,
                color: COLORS.WHITE,
                fontFamily: "clash-display",
              }}
            >
              Quality tech for every business. From startups to corporations,
              local to global - we build what you need, where you need it.
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={4} mt={2}>
              {social.map((val, i) => (
                <Button
                  sx={{
                    color: COLORS.WHITE,
                    fontSize: 17,
                    fontFamily: "clash-display",
                    svg: {
                      transform: "rotate(45deg)",
                    },
                    textDecoration: "underline",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                  endIcon={<ArrowForward />}
                  key={i}
                >
                  {val.label}
                </Button>
              ))}
            </Stack>
          </Grid>
          <Grid size={6}>
            <Typography
              sx={{
                textTransform: "capitalize",
                fontSize: 30,
                fontFamily: "clash-display",
                color: COLORS.WHITE,
              }}
            >
              drop us a line
            </Typography>
            <Grid container sx={{ mt: 3 }} spacing={2}>
              <Grid size={6}>
                <TextField
                  sx={{ ...loginTextField }}
                  label="First Name*"
                  fullWidth
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  sx={{ ...loginTextField }}
                  label="Last  Name*"
                  fullWidth
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  sx={{ ...loginTextField }}
                  label="Email*"
                  fullWidth
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  sx={{ ...loginTextField }}
                  label="Phone Number*"
                  fullWidth
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  sx={{
                    ...loginTextField,
                    "& fieldset": {
                      height: "100px",
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "100px !important",
                      color: COLORS.WHITE,
                      fontFamily: "clash-display",
                    },
                  }}
                  label="Message*"
                  fullWidth
                  multiline
                />
              </Grid>
              <Button
                sx={{
                  fontSize: 17,
                  fontFamily: "clash-display",
                  color: COLORS.WHITE,
                  backgroundColor: COLORS.PRIMARY,
                  width: 150,
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
