import { Box, Container, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../components/Section-Title";
import WhoTitle from "./WhoTitle";
import WhoCard from "./WhoCard";
import { WHO_CARD_DATA } from "@/assets/WhoCard";

const WhoWeAre = () => {
  return (
    <Box sx={{ pt: 20 }}>
      <Container maxWidth="xl">
        <SectionTitle sectionTitle="Who we are" />

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={6}>
            {WHO_CARD_DATA.map((val, i) => (
              <Grid size={6}>
                <WhoTitle
                  title={val.title ?? ""}
                  subTitle={val.subTitle ?? ""}
                  reverse={val.reverse}
                />
                <WhoCard
                  img={val.img}
                  description={val.description}
                  reverse={val.reverse}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
