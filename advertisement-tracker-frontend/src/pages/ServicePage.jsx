import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { servicePageData } from "../data/servicePageData";
import CardComponent from "../components/Cards/CardComponent";

const ServicePage = () => {
  return (
    <Stack sx={{ py: 10 ,mt:10}}>
      <Container>
        <Typography gutterBottom variant="h3" sx={{ fontWeight: 700,color:'secondary.main' }}>
          Complete Digital Growth Services
        </Typography>

        <Grid container sx={{ mt: 0 }} rowSpacing={3} columnSpacing={3}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ p: 1 }}>
            <Typography
              variant="body2"
              sx={{ fontSize: 18, color: "text.text" }}
            >
              Grow your brand and expand your digital reach with our complete
              one-month service package. We provide end-to-end solutions
              designed to enhance your online visibility and engagement.
            </Typography>
          </Grid>
          {servicePageData.map((item) => {
            return (
              <Grid key={item.id} size={{ xs: 12, sm: 12, md: 6 }}>
                <CardComponent
                  icon={item.icon}
                  label={item.label}
                  description={item.description}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Stack>
  );
};

export default ServicePage;
