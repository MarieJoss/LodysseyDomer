import React, { useState } from "react";
import { Form, FormGroup } from "reactstrap";

function SignUp() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifPassword, setVerifPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(prenom, nom, email, password);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>
        {prenom}
        <br />
        {nom}
        <br />
        {email}
        <br />
        {password}
      </h1>
      <FormGroup>
        <input
          name="prenom"
          type="text"
          value={prenom}
          placeholder="Votre prénom"
          onChange={(e) => setPrenom(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <input
          name="nom"
          value={nom}
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
