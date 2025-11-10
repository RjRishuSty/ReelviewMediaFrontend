import React from "react";
import { Box, Skeleton, Stack, Container, Grid } from "@mui/material";
import { center } from "../../styles/flexStyles";

const SkeletonLoader = () => {
  return (
    <Box sx={{ bgcolor: "primary.light", minHeight: "100vh" }}>
      {/* Navbar */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          px: { xs: 2, md: 5 },
          // borderBottom: "1px solid #fff",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Skeleton
            variant="text"
            width={250}
            height={90}
            sx={{ bgcolor: "primary.text" }}
          />
        </Box>
        <Stack direction="row" spacing={4} alignItems="center">
          {Array(4)
            .fill()
            .map((_, i) => (
              <Skeleton
                key={i}
                variant="text"
                width={100}
                height={30}
                sx={{ bgcolor: "primary.text" }}
              />
            ))}
        </Stack>
        <Skeleton
          variant="rectangular"
          width={180}
          height={50}
          sx={{ borderRadius: 2, bgcolor: "primary.text", ml: 5 }}
        />
      </Stack>

      {/* Hero Section */}
      <Container sx={{ mt: 10 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <Stack sx={{ ...center }}>
              <Skeleton
                variant="text"
                width="70%"
                height={100}
                sx={{ bgcolor: "primary.text" }}
              />
              <Skeleton
                variant="text"
                width="90%"
                height={100}
                sx={{ bgcolor: "primary.text" }}
              />
              <Skeleton
                variant="text"
                width="80%"
                height={25}
                sx={{ bgcolor: "primary.text", mt: 5 }}
              />
              <Skeleton
                variant="text"
                width="90%"
                height={25}
                sx={{ bgcolor: "primary.text" }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Stack sx={{ mt: 10,px:2 }}>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 8 }}>
            <Stack spacing={2}>
              <Skeleton
                variant="text"
                width="80%"
                height={50}
                sx={{ bgcolor: "primary.text" }}
              />
              <Skeleton
                variant="text"
                width="80%"
                height={20}
                sx={{ bgcolor: "primary.text" }}
              />
              <Skeleton
                variant="text"
                width="70%"
                height={20}
                sx={{ bgcolor: "primary.text" }}
              />
            </Stack>
          </Grid>
          <Grid size={{xs:12,sm:12,md:4}}>
            <Skeleton
            variant="rectangular"
            width="100%"
            height={175}
            sx={{ borderRadius: 3, bgcolor: "primary.text" }}
          />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default SkeletonLoader;
