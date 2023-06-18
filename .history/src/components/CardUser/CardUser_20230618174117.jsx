import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardUser = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={data.img} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {data.name}
          </Typography>
          <Typography style={{ margin: 13, fontSize: 20 }}>
            ${data.precio}
          </Typography>
          <button type="button" style={{ padding: 7 }}>
            <Typography color="text.secondary">Adoptar</Typography>
          </button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;
