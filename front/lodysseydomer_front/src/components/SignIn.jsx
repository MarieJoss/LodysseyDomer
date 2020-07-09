import React, { useState } from "react";
import { Form } from "reactstrap";

import styles from "./sign.module.css";
import Button from "@material-ui/core/Button";

import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:5000/auth/signin", {
        email,
        password,
      });
      console.log("utilisateur est bien crée");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
                <h1>Connection</h1>
                <Form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <TextField
                        type="email"
                        name="email"
                        placeholder="Votre e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        name="password"
                        value={password}
                        placeholder="Votre mot de passe"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Link to="/profile">
                    <Button
                      variant="contained"
                      size="medium"
                      type="submit"
                      className={styles.button}
                    >
                      SE CONNECTER
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      variant="contained"
                      size="medium"
                      type="submit"
                      className={styles.lien}
                    >
                      Je n'ai pas de compte
                    </Button>
                  </Link>
                </Form>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default SignIn;
