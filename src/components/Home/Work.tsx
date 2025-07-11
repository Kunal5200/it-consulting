import { Box, Container, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "./components/Section-Title";
import WorkCard from "../common/WorkCard";
import { WORK_CARD_DATA } from "@/assets/WhoCard";
import { useRouter } from "next/router";

const WorkSection = () => {
  const router = useRouter();
  return (
    <Box sx={{ mt: 15 }}>
      <Container maxWidth="xl">
        <SectionTitle
          sectionTitle="work"
          hasButton={router.pathname === "/work" ? false : true}
          buttonName="All Projects"
        />
        <Grid mt={3} container spacing={4}>
          {WORK_CARD_DATA.map((val, i) => (
            <Grid size={6} key={i}>
              <WorkCard
                heading={val.heading}
                img={val.img}
                id={val.id}
                details={val.details}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkSection;
