"use client";
import React from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, FormHelperText } from "@mui/material";
import Banner from "../components/Banner";
import Form from "../components/Form";
import ButtonGroup from "../components/ButtonGroup";
import {fetchWrapper} from "../helpers/fetch-wrapper";
import {validations} from "../helpers/validations";

export default function SignUpForm() {
  const [authorName, setAuthorname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nameValid, setNameValid] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(false);
  const [isSignedUp, setSignedUp] = React.useState(false);
  const allValid = nameValid && emailValid && passwordValid; 

const router = useRouter();
useEffect(() => {
  if (isSignedUp) {    
    setTimeout(() => {
      router.push('/');
    }, 3000);
    
}
}, [isSignedUp, router]);
  if (isSignedUp) {return <Form toolBarText={"You succesfully signed up for Wiki Code"}></Form>} else {
    return (
      <>
        <Banner
          title={"Sign Up"}
          caption={
            "Sign up for Wiki Code and start contributing to this amazing code reference site! "
          }
        />
        <Form
        buttonDisabled={!allValid}
          toolBarText={"Enter your information"}
          handleClick={(e) => {
            e.preventDefault;
            if (allValid) {
              const author = { authorName, email, password };
              fetchWrapper.post("http://localhost:8080/author/add", author
                ).then(() => {
                console.log("new author added");
              });              
              setSignedUp(true);
            }
            else {              
              document.getElementById("forminvalid").innerHTML = "Form info not valid";
            }
          } 
  
            }
        >
          <TextField
            required={true}
            id="authorName"
            label="User Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!nameValid}
            value={authorName}
            onChange={(e) => validations.handleFormValidation(e, setAuthorname, setNameValid, "name")}
          />
          {!nameValid && (
            <FormHelperText>Username can only contain letters</FormHelperText>
          )}
          <TextField
            required={true}
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!emailValid}
            value={email}
            onChange={(e) => validations.handleFormValidation(e, setEmail, setEmailValid, "email")}
          />
          {!emailValid && (
            <FormHelperText>Please enter a valid email address</FormHelperText>
          )}
          <TextField
            required={true}
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!passwordValid}
            value={password}
            onChange={(e) => validations.handleFormValidation(e, setPassword, setPasswordValid, "password")}
          />
          {!passwordValid && (
            <FormHelperText>Password should be at least 8 characters and contain a lowerCase, an upperCase, a digit and a special character</FormHelperText>
          )}
          <FormHelperText id="forminvalid"></FormHelperText>
        </Form>
        <ButtonGroup
          buttonText1={"HOME"}
          link1={"/"}
          buttonText2={"CONTACT"}
          link2={"/contact"}
        />
      </>
    );}
  }
  

