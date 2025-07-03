import { Box, Container, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "./components/Section-Title";
import WorkCard from "../common/WorkCard";
import { WORK_CARD_DATA } from "@/assets/WhoCard";

const Work = () => {
  return (
    <Box sx={{ mt: 15 }}>
      <Container maxWidth="xl">
        <SectionTitle sectionTitle="work" hasButton={true} />
        <Grid mt={3} container spacing={4}>
          {WORK_CARD_DATA.map((val, i) => (
            <Grid size={4} key={i}>
              <WorkCard heading={val.heading} img={val.img} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;
