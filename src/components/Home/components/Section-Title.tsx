import { COLORS } from "@/utils/enum";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({
  sectionTitle,
  hasButton,
  onClick,
  buttonName,
}: {
  sectionTitle: string;
  hasButton?: boolean;
  onClick?: () => void;
  buttonName?: string;
}) => {
  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
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
        {hasButton && (
          <Button
            sx={{
              fontFamily: "clash-display",
              color: COLORS.WHITE,
              fontSize: 18,
            }}
            onClick={onClick}
          >
            {buttonName}
          </Button>
        )}
      </Stack>
      <Divider sx={{ borderColor: COLORS.PRIMARY, mt: 1 }} />
    </Box>
  );
};

export default SectionTitle;
