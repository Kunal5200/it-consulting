import { COLORS } from "@/utils/enum";
import { ArrowDownward, ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  const social = [
    {
      label: "Facebook",
    },
    {
      label: "LinkedIn",
    },
    {
      label: "Twitter",
    },
  ];
  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            background: "linear-gradient(135deg, #1a1a1afc 0%, #1111118a 100%)",
            border: "1px solid #292929",
            borderRadius: "10px",
            padding: "60px 40px",
            boxShadow: "0 0 40px rgba(220, 95, 0, 0.1)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Grid container>
            <Grid size={{lg:8,xs:12}} margin={"auto"}>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    textAlign: "center",
                    color: COLORS.WHITE,
                    fontFamily: "clash-display",
                    fontSize: 26,
                    margin: "auto",
                    ":hover": {
                      color: COLORS.PRIMARY,
                    },
                  }}
                  endIcon={<ArrowForward className="arrow" />}
                >
                  Get In Touch
                </Button>
              </Box>
              {/* <Divider
                sx={{
                  backgroundColor: COLORS.WHITE,
                  width: "30%",
                  margin: "auto",
                }}
              /> */}

              <Box sx={{ mt: 4 }}>
                <Stack
                  direction={{lg:"row",xs:"column"}}
                  alignItems={"center"}
                  justifyContent={"center"}
                  spacing={3}
                >
                  {social.map((val, i) => (
                    <Button
                      sx={{
                        border: "1px solid #333",
                        backgroundColor: "#1c1c1c",
                        padding: "10px 16px",
                        color: "#aaa",
                        transition: "all 0.3s ease",
                        boxShadow: "inset 0 0 0 transparent",
                        ".arrow": {
                          width: "20px",
                          filter: "brightness(0) invert(1)",
                          opacity: 0,
                          transform: "translateX(-100px)",
                        },
                        ":hover": {
                          ".arrow": {
                            opacity: 1,
                            transform: "translateX(0)",
                          },
                          color: COLORS.WHITE,
                          backgroundColor: COLORS.PRIMARY,
                          transform: "translateY(-2px) scale(1.05)",
                          boxShadow: `0 0 10px ${COLORS.PRIMARY}`,
                          border: `1px solid ${COLORS.PRIMARY}`,
                        },
                        fontFamily: "clash-display",
                      }}
                      endIcon={<ArrowDownward className="arrow" />}
                    >
                      {val.label}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
