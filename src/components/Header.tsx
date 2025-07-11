import { COLORS } from "@/utils/enum";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import logo from "@/logo/logo.png";
import Image from "next/image";
import { HEADERLINKS } from "@/assets/headerLinks";
import { useRouter } from "next/router";
import logo1 from "@/logo/logo_techx.png";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
const Header = () => {
  const router = useRouter();
  const handleRouter = (url: string) => {
    router.push(url);
  };
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: COLORS.BLACK, paddingTop: "25px" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: COLORS.HEADER_BG,
          borderRadius: "5px",
          border: "1px solid #292929",
          padding: "25px",
          color: COLORS.WHITE,
          paddingLeft: "25px",
        }}
      >
        <Link href={"/"}>
          <Image
            src={logo1}
            alt="logo"
            width={phone ? 200 : 250}
            style={{ backgroundColor: COLORS.TRANSPARENT }}
          />
        </Link>
        {phone ? (
          <IconButton
            sx={{ borderRadius: 0, border: `1px solid ${COLORS.WHITE}` }}
          >
            <Menu />
          </IconButton>
        ) : (
          <Stack
            direction={"row"}
            spacing={5}
            sx={{ backgroundColor: COLORS.TRANSPARENT }}
          >
            {HEADERLINKS.map((val, i) => (
              <Typography
                fontFamily={"clash-display"}
                fontSize={17}
                fontWeight={300}
                sx={{
                  color:
                    val.url === router.pathname ? COLORS.PRIMARY : COLORS.WHITE,
                  borderBottom:
                    val.url === router.pathname
                      ? `2px solid ${COLORS.PRIMARY}`
                      : `2px solid ${COLORS.TRANSPARENT}`,
                  ":hover": {
                    color: COLORS.PRIMARY,
                  },
                  backgroundColor: COLORS.TRANSPARENT,
                  borderRight: "none",
                  borderTop: "none",
                  borderLeft: "none",
                }}
                onClick={() => handleRouter(val.url)}
                component={"button"}
              >
                {val.label}
              </Typography>
            ))}
          </Stack>
        )}
      </Box>

      {/* mobile header with drawer */}
      
    </Container>
  );
};

export default Header;
