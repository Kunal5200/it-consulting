import PageTitle from "@/components/Home/components/PageTitle";
import WhoWeAre from "@/components/Home/Who-we-are/Index";
import { Box, Container } from "@mui/material";
import React from "react";
// import bgImage from
const About = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ mb: 10 }}>
        <Box sx={{ mt: 4 }}>
          <PageTitle title="About" subTitle="Who We are and what we do" />
        </Box>
        <WhoWeAre />
      </Container>
    </Box>
  );
};

export default About;
