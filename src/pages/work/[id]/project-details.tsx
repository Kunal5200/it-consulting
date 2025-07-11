import { WORK_CARD_DATA } from "@/assets/WhoCard";
import PageTitle from "@/components/Home/components/PageTitle";
import { COLORS } from "@/utils/enum";
import { WORK_CARD_PROPS } from "@/utils/types";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProjectDetails = () => {
  const router = useRouter();
  const [data, setData] = useState<WORK_CARD_PROPS | null>(null);

  const { id } = router.query;
  //   console.log("idf", id);

  useEffect(() => {
    if (id) {
      const newWorkData = WORK_CARD_DATA.find((val) => val.id === id);
      console.log("new ", newWorkData);
      setData(newWorkData ?? null);
    }
  }, [id]);
  if (!data)
    return (
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Typography
          sx={{
            fontSize: 15,
            fontFamily: "calsh-display",
            color: COLORS.WHITE,
          }}
        >
          No Data Found
        </Typography>
      </Container>
    );
  return (
    <Box>
      <Container maxWidth="xl">
        <Box sx={{ mt: 7, mb: 7 }}>
          <PageTitle
            title={data.heading}
            subTitle="Who We are and what we do"
          />
        </Box>
        <Grid container alignItems={"center"} sx={{ mb: 7 }}>
          <Grid size={6}>
            <Typography sx={{ fontSize: 40, fontFamily: "clash-display" }}>
              {data.details.heading}
            </Typography>
            <Typography
              sx={{ mt: 2, fontSize: 18, fontFamily: "clash-display" }}
            >
              {data.details.description}
            </Typography>
          </Grid>
          <Grid size={6} sx={{ textAlign: "center" }}>
            <Image
              src={data.img}
              alt=""
              width={500}
              style={{ borderRadius: 5 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
