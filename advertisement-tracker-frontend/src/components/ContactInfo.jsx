import React from "react";
import { contactInfoData } from "../data/contactInfoData";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const ContactInfo = () => {
  return (
    <Container>
      <Grid container rowSpacing={2} columnSpacing={4}>
        {contactInfoData.map((item) => (
          <Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{ position: "relative" }}>
            <Card
              sx={{
                width: "100%",
                height: 180,
                bgcolor: "#fff",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: -40,
                  left: 20,
                  zIndex: 99999,
                  border: "1px solid #ccc",
                  bgcolor: "#fff",
                  "&:hover": { bgcolor: "secondary.dark" },
                }}
              >
                {item.icon}
              </IconButton>
              <CardContent sx={{ mt: 5 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 800, color: "secondary.dark" }}
                >
                  {item.title}
                </Typography>
                <Typography>{item.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ContactInfo;
