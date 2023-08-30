"use client"
import React from "react";
import { TextField } from "@mui/material";
import Form from "../components/Form";

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailValid, setEmailValid] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(false);
  const allValid = emailValid && passwordValid;
  return (
    <>
      <Form 
      buttonDisabled={!allValid}
      toolBarText={"Login"}

       handleClick={(e) => {
        e.preventDefault;
        if (allValid) {
          const author = { email, password };
          fetchWrapper.post("http://localhost:8080/author/add", author
            ).then(() => {
            console.log("user logged in");
          });              
          setLoggedInUp(true);
        }
        else {              
          document.getElementById("forminvalid").innerHTML = "Form info not valid";
        }
      } 

        }
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={address}
          // onChange={(e) => setAddress(e.target.value)}
        />
      </Form>
    </>
  );
}
