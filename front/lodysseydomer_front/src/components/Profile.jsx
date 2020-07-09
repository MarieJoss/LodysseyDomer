import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Link,
} from "@material-ui/core";

const Profile = () => {
  const [infosUser, SetInfosUser] = useState([]);

  return (
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
              <List>
                <ListItem>
                  <ListItemText primary="email" secondary="mon email" />
                  <ListItemText primary="name" secondary="mon nom" />
                  <ListItemText
                    primary="lastname"
                    secondary="mon nom de famille"
                  />
                </ListItem>
                <Link to="/signin">Déconnexion</Link>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Profile;
