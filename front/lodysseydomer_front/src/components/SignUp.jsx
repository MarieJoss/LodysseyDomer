import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{email}</h1>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default SignUp;
