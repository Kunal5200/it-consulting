import { NUMBER_CARD } from "@/assets/numbercard";
import Banner from "@/components/Home/Banner";
import NumberCard from "@/components/Home/components/NumberCard";
import Insights from "@/components/Home/Insights";
import Services from "@/components/Home/services/Index";
import WhoWeAre from "@/components/Home/Who-we-are/Index";
import Work from "@/components/Home/Work";
import { COLORS } from "@/utils/enum";
import { Box, Container, Grid } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>TechXGrow</title>
        <meta name="description" content="TechXGrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ backgroundColor: COLORS.BLACK, pb: 30 }}>
        <Banner />
        <Container maxWidth="xl" sx={{ mt: 5 }}>
          <Grid container spacing={3}>
            {NUMBER_CARD.map((val, i) => (
              <Grid size={3}>
                <NumberCard
                  title={val.title}
                  bgColor={val.bgColor}
                  circleBgColor={val.circleBgColor}
                  numbers={val.numbers}
                  textColor={val.textColor}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Services />
        <WhoWeAre />
        <Work />
        <Insights />
      </Box>
    </>
  );
}
