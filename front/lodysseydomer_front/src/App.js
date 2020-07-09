import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { MuiThemeProvider, Grid, Paper } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Grid
          container
          alignItems="center"
          style={{
            height: "100vh",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Grid item xs={5}>
            <Paper
              elevation={20}
              style={{
                borderRadius: 20,
                padding: 30,
                backgroundColor: "#F7F7F6",
              }}
            >
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} alignContent="center">
                  <SignUp />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
