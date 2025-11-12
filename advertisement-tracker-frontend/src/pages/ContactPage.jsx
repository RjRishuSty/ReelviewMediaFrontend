import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";
import InputForm from "../components/InputForm";
import {
  Box,
  Card,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { center, flexStart } from "../styles/flexStyles";
import { companyInfo } from "../data/companyInfoData";
import ContactInfo from "../components/ContactInfo";
import conImg from "../assets/contact.jpg";
import { motion } from "framer-motion";
import { commanAnimate } from "../animate/commanAnimate";
import ReelViewGoogleMap from "../components/ReelViewGoogleMap";

const MotionBox = motion(Box);

const ContactPage = () => {
  const laptop = useMediaQuery("(max-width:1228px)");
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <Stack component="section" sx={{position:'relative', mt: 11.5 }}>
      <Stack component="div" sx={{ pt: 20, pb: 10, bgcolor: "#f8f9fc" }}>
        <ContactInfo />
      </Stack>
      <Container sx={{ py: 10 }}>
        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 5 }}>
            <MotionBox
              {...commanAnimate.image}
              component="img"
              src={conImg}
              sx={{
                width: "100%",
                height: 650,
                borderRadius: 1,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 7 }}
            sx={{ order: { xs: 1, sm: 1, md: 2 } }}
          >
            <Typography
              gutterBottom
              variant="h2"
              sx={{ fontWeight: 900, color: "secondary.dark" }}
            >
              Contact Us
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ color: "primary.dark", mb: 3 }}
            >
              Have a project in mind? Get in touch with ReelView Media and let’s
              bring your digital vision to life.
            </Typography>
            <InputForm />
          </Grid>
        </Grid>
      </Container>
      <ReelViewGoogleMap/>
    </Stack>
  );
};

export default ContactPage;
