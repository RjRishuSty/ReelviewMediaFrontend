import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const AboutServiceCard = ({ item }) => {
  return (
    <Card sx={{ width: "100%",height:'100%', borderRadius: 3, boxShadow: 3,cursor:'pointer' }}>
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        sx={{
          width: "100%",
          height: 150,
          objectFit: "cover",
          objectPosition: "center",
          filter:"brightness(90%)",
          transition:'all 0.5s ease-in-out',
          "&:hover":{
            transform:'scale(1.1)',
            filter:"brightness(110%)"
          }
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ fontWeight: 600 }}
          component="div"
        >
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description.length > 80 ? (
            <>
              {item.description.slice(0, 80)}{" "}
              <Link
                component={Link}
                to="/contact"
                sx={{ ml: 0.5, fontWeight: 500, cursor: "pointer" }}
              >
                Learn More....
              </Link>
            </>
          ) : (
            item.description
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutServiceCard;
