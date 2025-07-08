import PageTitle from "@/components/Home/components/PageTitle";
import { COLORS } from "@/utils/enum";
import { ArrowForward } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

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
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <PageTitle title="Contact" subTitle="Get in touch" />

      <Grid container mt={10} mb={10}>
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
            We're dedicated to empowering individuals and businesses alike.
            Let's explore opportunities together.
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
          <Grid container>
            <Grid size={6}>
              <TextField
                sx={{
                  "& fieldset": {
                    border: "1px solid #292929",
                  },
                }}
              />
            </Grid>
            <Grid size={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
