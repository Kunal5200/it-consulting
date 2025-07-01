import { Box, Container } from "@mui/material";
import React from "react";
import SectionTitle from "./components/Section-Title";

const Work = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="xl">
        <SectionTitle sectionTitle="work" hasButton={true} />
      </Container>
    </Box>
  );
};

export default Work;
