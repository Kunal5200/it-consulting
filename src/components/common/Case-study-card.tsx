import { COLORS } from "@/utils/enum";
import { CASE_STUDY_PROPS } from "@/utils/types";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
const CaseStudyCard = ({ img, heading, id }: CASE_STUDY_PROPS) => {
  const router = useRouter();
  const handleDetailPage = (id: string) => {
    router.push(`/case-study/${id}/details`);
  };
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        ":hover": {
          ".img": {
            transform: "scale(1.05)",
          },
          ".button_read": {
            textDecoration: "underline",
          },
          ".overlay": {
            backgroundColor: "#00000095",
          },
        },
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          height: "70vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "10px",
          transition: "0.5s ease all",
        }}
        className="img"
      >
        <Box
          sx={{
            backgroundColor: "#00000050",
            height: "100%",
            transition: "0.5s ease all",
          }}
          className="overlay"
        ></Box>
      </Box>
      <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
        <Typography
          sx={{
            fontSize: 25,
            color: COLORS.WHITE,
            fontFamily: "clash-display",
          }}
        >
          {heading}
        </Typography>
        <Button
          sx={{
            fontFamily: "clash-display",
            color: COLORS.WHITE,
            fontSize: 18,
          }}
          endIcon={<ArrowForward />}
          className="button_read"
          onClick={() => handleDetailPage(id)}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default CaseStudyCard;
