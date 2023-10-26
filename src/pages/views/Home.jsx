import React, { useEffect } from "react";
import Card from "../../common/Card";
import { Grid } from "@mui/material";

const Home = ({handleCurrentWindow}) => {
  useEffect(()=>{
    handleCurrentWindow("Home");
  }, [])

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} sm={6} md={3}>
        <Card Color={"#321fdb"} Key={1}/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card Color={"#3399fe"} Key={2}/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card Color={"#fab116"} Key={3}/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card Color={"#e55353"} Key={4}/>
      </Grid>
    </Grid>
  );
};

export default Home;
