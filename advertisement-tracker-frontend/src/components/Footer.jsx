import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import SocialMediaIcons from "./SocialMediaIcons ";
import { center, flexStart } from "../styles/flexStyles";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      sx={{
        pt: 5,
        bgcolor:'secondary.dark'
      }}
    >
      <Container>
        <Grid container rowSpacing={4} columnSpacing={5}>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Logo useIn="footer" />
            <Typography
              gutterBottom
              variant="body1"
              sx={{
                letterSpacing: 0.5,
                wordSpacing: 1,
                mt: 2,
                textAlign: "start",
                lineHeight: 1.7,
                color: "text.dark",
                fontWeight:400
              }}
            >
              We are a one-stop platform dedicated to connecting people with all
              types of essential services—quickly, reliably, and locally.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ p: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "700",
                color: "text.custom",
                textShadow:'2px 0px 2px #000',
                textAlign: { xs: "start", sm: "center", md: "start" },
              }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: { xs: "start", sm: "center", md: "start" },
                flexDirection: "column",
              }}
            >
              <MenuLinks useIn="footer" />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{}}></Grid>
        </Grid>
      </Container>
      <Divider color="#ccc" />
      <Container sx={{ p: 2 }}>
        <Grid container rowSpacing={4} columnSpacing={2} sx={{}}>
          <Grid
            size={{ xs: 12, sm: 6, md: 7 }}
            sx={{
              ...(isMobile ? center : flexStart),
            }}
          >
            <SocialMediaIcons />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 5 }} sx={{ ...center }}>
            <Typography variant="body1" sx={{ color: "text.dark" }}>
              © {new Date().getFullYear()} ReelView Media All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
