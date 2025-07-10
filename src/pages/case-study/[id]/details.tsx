import {
  appointmentHub,
  Ecommerce,
  ethnicWear,
  migrateBusiness,
  upgradeServer,
} from "@/assets/case-study/Ecommerce";
import { CASE_STUDY_DATA } from "@/assets/Casestudy";
import CaseStudyCard from "@/components/common/Case-study-card";
import InsightCard from "@/components/common/InsightCard";
import PageTitle from "@/components/Home/components/PageTitle";
import { COLORS } from "@/utils/enum";
import { loginTextField } from "@/utils/styles";
import { CASE_STUDY_DETAILS } from "@/utils/types";
import { AcUnit, Search } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

const CaseStudyDetails = () => {
  const router = useRouter();

  const { id } = router.query;
  const [data, setData] = useState<CASE_STUDY_DETAILS | null | undefined>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const newData = CASE_STUDY_DATA.find((val) => val.id === id);
      setData(newData?.details);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [id]);

  if (!data) return <div>No data found.</div>;

  return (
    <Box>
      <Backdrop open={loading} sx={{zIndex:999,backdropFilter:"blur(10px)"}}>
        <CircularProgress sx={{ color: COLORS.WHITE }} />
      </Backdrop>
      <Container maxWidth="xl">
        <Box sx={{ mt: 10 }}>
          <PageTitle title={data.heading ?? ""} />
        </Box>
        <Grid container mb={6} spacing={4}>
          <Grid size={8}>
            <Box
              sx={{
                mt: 6,
                border: `1px solid ${COLORS.BORDER_COLOR}`,
                padding: "30px",
                backgroundColor: "#f96c0a20",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: 500,
                  fontFamily: "clash-display",
                }}
              >
                {data.heading}
              </Typography>
            </Box>
            <Image
              src={data.img ?? ""}
              alt={data.heading ?? ""}
              style={{ width: "100%", height: 600 }}
            />
            <Typography sx={{ fontFamily: "clash-display", mt: 2 }}>
              {data.aboutDescription}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontSize: 38,
                  fontFamily: "clash-display",
                }}
              >
                {data.solution.heading}
              </Typography>
              <List>
                {data.solution.list.map((val, i) => (
                  <ListItem>
                    <ListItemAvatar>
                      <AcUnit />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontFamily: "clash-display" }}>
                          {val.label}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontSize: 38,
                  fontFamily: "clash-display",
                }}
              >
                {data.businessProblem.heading}
              </Typography>
              <List>
                {data.businessProblem.list.map((val, i) => (
                  <ListItem>
                    <ListItemAvatar>
                      <AcUnit />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontFamily: "clash-display" }}>
                          {val.label}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontSize: 38,
                  fontFamily: "clash-display",
                }}
              >
                {data.keyBenefits.heading}
              </Typography>
              <List>
                {data.keyBenefits.list.map((val, i) => (
                  <ListItem>
                    <ListItemAvatar>
                      <AcUnit />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontFamily: "clash-display" }}>
                          {val.label}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontSize: 38,
                  fontFamily: "clash-display",
                }}
              >
                Technology :
              </Typography>
              <Typography>{data.techStack.join(" , ")}</Typography>
            </Box>
          </Grid>
          <Grid size={4} position={"sticky"} top={100}>
            <Box
              sx={{
                border: `1px solid ${COLORS.BORDER_COLOR}`,
                borderRadius: "5px",
                backgroundColor: "rgba(41, 41, 41, 0.5)",
                backdropFilter: "blur(5px)",
                padding: "20px",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                mt: 6,
              }}
            >
              <TextField
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end" sx={{ p: 0 }}>
                        <IconButton
                          sx={{
                            backgroundColor: COLORS.PRIMARY,
                            borderRadius: 0,
                            width: 40,
                            height: 40,
                            ":hover": {
                              backgroundColor: COLORS.PRIMARY,
                            },
                          }}
                        >
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{ ...loginTextField }}
                fullWidth
              />
              <Stack spacing={3}>
                {CASE_STUDY_DATA.map((val, i) => (
                  <CaseStudyCard
                    img={val.img}
                    heading={val.heading}
                    id={val.id}
                    details={val.details}
                  />
                  // <InsightCard
                  //   img={val.details.img ?? ""}
                  //   title={val.heading}
                  //   category=""
                  // />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CaseStudyDetails;
