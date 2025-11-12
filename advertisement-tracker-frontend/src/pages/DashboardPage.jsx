
import {  Grid, Stack } from "@mui/material";
import DashboardCard from "../components/Cards/DashboardCard";
import { cards } from "../data/dashboardData";
import { useSelector } from "react-redux";

const DashboardPage = () => {

  const userData = useSelector((state) => state.auth);
  console.log("userform store", userData);

  return (
    <Stack>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {cards.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 12, md: 3 }}>
            <DashboardCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default DashboardPage;
