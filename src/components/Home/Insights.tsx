import { Container, Box, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "./components/Section-Title";
import InsightCard from "../common/InsightCard";
import { Insights_data } from "@/assets/Insights";

const Insights = () => {
  return (
    <Box sx={{ mt: 15 }}>
      <Container maxWidth="xl">
        <SectionTitle sectionTitle="Insights" />
        <Grid container spacing={1}>
          {Insights_data.map((val, i) => (
            <Grid size={12}>
              <InsightCard
                img={val.img}
                category={val.category}
                title={val.title}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Insights;
