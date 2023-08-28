"use client";
import React from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, FormHelperText } from "@mui/material";
import Banner from "../components/Banner";
import Form from "../components/Form";
import ButtonGroup from "../components/ButtonGroup";

export default function SignUpForm() {
  const [authorName, setAuthorname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nameValid, setNameValid] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(false);
  const [isSignedUp, setSignedUp] = React.useState(false);

  const handleNameValidation = (e) => {
    //set value to user input
    setAuthorname(e.target.value);
    
    //define regex     
    const reg = new RegExp("[a-z]");
    
    //test whether input is valid
    setNameValid(reg.test(e.target.value));
};

const handleEmailValidation = (e) => {
  //set value to user input
  setEmail(e.target.value);
  
  //define regex     
  const reg =  new RegExp(/^[^\s@]+@[^@\s\.]+\.[^\s@]{2,}$/, "i")
  
  //test whether input is valid
  setEmailValid(reg.test(e.target.value));
};

const handlePasswordValidation = (e) => {
  //set value to user input
  setPassword(e.target.value);
  
  //define regex     
  const reg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm);
  
  //test whether input is valid
  setPasswordValid(reg.test(e.target.value));
};

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
          toolBarText={"Enter your information"}
          handleClick={(e) => {
            e.preventDefault;
            if (nameValid && emailValid && passwordValid) {
              const author = { authorName, email, password };
              fetch("http://localhost:8080/author/add", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(author),
              }).then(() => {
                console.log("new author added");
              });
              console.log(author);
              setSignedUp(true);
            }
            else {
              console.log("Form info not valid");
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
            onChange={(e) => handleNameValidation(e)}
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
            onChange={(e) => handleEmailValidation(e)}
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
            onChange={(e) => handlePasswordValidation(e)}
          />
          {!passwordValid && (
            <FormHelperText>Password should be at least 8 characters and contain a lowerCase, an upperCase, a digit and a special character</FormHelperText>
          )}
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
  

