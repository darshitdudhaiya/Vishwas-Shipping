import React from "react";
import { makeStyles } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const SimpleCard = ({Color,Key}) => {
  return (
    <Card sx={{backgroundColor:Color,color:"white"}}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Card {Key}
        </Typography>
        <Typography>Sub Title</Typography>
        <Typography variant="body2" className="mt-3" component="p">
          {'Defination goes here'}
          <br />
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:"white"}}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
