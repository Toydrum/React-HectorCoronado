import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardUser = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.url}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          </Typography>
          {data.title}
          <Typography variant="body2" color="text.secondary">
            {data.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardUser;