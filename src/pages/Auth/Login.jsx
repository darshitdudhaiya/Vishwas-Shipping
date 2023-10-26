import React, { useState } from "react";
import { Container, Grid, TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("token","dddddddddddddddddddddddddd");
    // Handle login logic
    navigate("/home/main");
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={8} md={4}>
          <Card className="p-2">
            <CardContent>
              <div className="logo-container mb-2">
                {/* <img src="your-logo.png" alt="Logo" className="logo" /> */}
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                  Vishvash Shipping
                </Typography>
              </div>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Username"
                      type="text"
                      name="username"
                      id="username"
                      variant={"standard"}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      name="password"
                      id="password"
                      variant={"standard"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth type="submit">
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;