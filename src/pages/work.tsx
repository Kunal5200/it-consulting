import PageTitle from "@/components/Home/components/PageTitle";
import WorkSection from "@/components/Home/Work";
import { Container } from "@mui/material";
import React from "react";

const Work = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{mt:5}}>
        <PageTitle title="Works" subTitle="Our Works" />
        <WorkSection />
      </Container>
    </div>
  );
};

export default Work;
