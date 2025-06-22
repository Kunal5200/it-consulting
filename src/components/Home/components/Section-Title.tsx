import { COLORS } from "@/utils/enum";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ sectionTitle }: { sectionTitle: string }) => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: "uppercase",
          marginTop: 0,
          fontSize: 80,
          fontWeight: 800,
          lineHeight: "50px",
          color: COLORS.WHITE,
        }}
      >
        {sectionTitle}
      </Typography>
      <Divider sx={{ borderColor: COLORS.PRIMARY, mt: 1 }} />
    </Box>
  );
};

export default SectionTitle;
