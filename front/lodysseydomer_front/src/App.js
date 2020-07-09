import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import router from "./router";
// import SignIn from "./components/SignIn";
// import Profile from "./components/Profile";

import { MuiThemeProvider, Grid, Paper } from "@material-ui/core";
import Router from "./router";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Router />
        {/* <SignIn /> */}
        {/* <Profile /> */}
      </MuiThemeProvider>
    </div>
  );
}

export default App;
