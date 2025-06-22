import { COLORS } from "@/utils/enum";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ServicesCard from "./ServicesCard";
import { Service_data } from "@/assets/ServiceDetails";
import SectionTitle from "../components/Section-Title";

const Services = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.BLACK, pt: 20 }}>
      <Container maxWidth="xl">
        <SectionTitle sectionTitle="Services" />

        <Grid container mt={10}>
          {Service_data.map((val, i) => (
            <>
              <Grid size={12}>
                <ServicesCard
                  img={val.img}
                  index={`0${i + 1}`}
                  serviceTitle={val.serviceTitle}
                />
                <Divider sx={{ borderColor: "#292929" }} />
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
