import React, { useState } from "react";
import { Form, FormGroup } from "reactstrap";

import Axios from "axios";

function SignUp() {
  const [name, setPrenom] = useState("");
  const [lastname, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifPassword, setVerifPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:5000/auth/signup", {
        email,
        password,
        name,
        lastname,
      });
      console.log("utilisateur est bien crée");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>
        {name}
        <br />
        {lastname}
        <br />
        {email}
        <br />
        {password}
      </h1>
      <FormGroup>
        <input
          name="prenom"
          type="text"
          value={name}
          placeholder="Votre prénom"
          onChange={(e) => setPrenom(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <input
          name="nom"
          value={lastname}
          type="text"
          placeholder="Votre nom de famille"
          onChange={(e) => setNom(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <input
          type="email"
          name="email"
          placeholder="Votre e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <input
          name="password"
          value={password}
          placeholder="Votre mot de passe"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <input
          name="password"
          value={verifPassword}
          placeholder="Vérification mot de passe"
          type="password"
          onChange={(e) => setVerifPassword(e.target.value)}
        />
      </FormGroup>
      <input type="submit" value="Envoyer" />
    </Form>
  );
}

export default SignUp;
