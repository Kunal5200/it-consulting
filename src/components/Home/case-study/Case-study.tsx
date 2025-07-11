import { CASE_STUDY_DATA } from "@/assets/Casestudy";
import CaseStudyCard from "@/components/common/Case-study-card";
import { Box, Container, Grid } from "@mui/material";
import SectionTitle from "../components/Section-Title";
import { useRouter } from "next/router";

const CaseStudy = () => {
  const router = useRouter();

  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="xl">
        <SectionTitle
          sectionTitle="Case Study"
          hasButton={router.pathname === "/" ? true : false}
          buttonName="View More"
          onClick={() => router.push("/blog")}
        />
        {router.pathname === "/" ? (
          <Grid container sx={{ mt: 10 }} spacing={3}>
            {CASE_STUDY_DATA.slice(0, 3).map((val, i) => (
              <Grid size={{ lg: 4, xs: 12 }}>
                <CaseStudyCard
                  img={val.img}
                  heading={val.heading}
                  id={val.id}
                  details={val.details}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container sx={{ mt: 10 }} spacing={3}>
            {CASE_STUDY_DATA.map((val, i) => (
              <Grid size={{ lg: 4, xs: 12 }}>
                <CaseStudyCard
                  img={val.img}
                  heading={val.heading}
                  id={val.id}
                  details={val.details}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default CaseStudy;
