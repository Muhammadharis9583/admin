import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import { TextField , Button } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled, createTheme, ThemeProvider} from "@mui/material/styles";
import Promos from "../compenents/Promos";
function PromoCode() {
  function createData(id, date, promoCode) {
    return { id, date, promoCode };
  }
  function getCurrentDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const monthName = months[monthIndex];
    const formattedDate = `${day} ${monthName}, ${year}`;

    return formattedDate;
  }
  const [promo, setPromo] = useState('');
  const handleTextChange = (event) => {
    setPromo(event.target.value);
  };
  const [rows,setRow] = useState([
  createData(
    0,
    "16 Mar, 2019",
    "NEW_YEAR"
  ),
  createData(
    1,
    "16 Mar, 2019",
    "EID_MUBARAK"
  ),
  createData(
    2,
    "16 Mar, 2019",
    "AZAADI"
  ),
  createData(
    3,
    "16 Mar, 2019",
    "WELCOME"
  ),
  createData(
    4,
    "15 Mar, 2019",
    "11_11"
  ),
])
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  const addRow = () =>{
    console.log(promo)
    setRow((prev) => [
      ...prev,
      createData((Math.random() * 100).toPrecision(4),getCurrentDate(),promo),
    ]);
  }
  const mdTheme = createTheme();
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={6}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Promos rows={rows}/>
            </Paper>
            <form
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "25px",
              }}
            >
              <TextField
                label="Enter Promo Code"
                variant="outlined"
                onChange={handleTextChange}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mx: 5 }}
                onClick={() => addRow()}
              >
                Add Promo
              </Button>
            </form>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}

export default PromoCode;
