"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TextField, Paper, Container, FormHelperText } from "@mui/material";
import { Textarea } from "@mui/joy";
import Banner from "../components/Banner";
import Form from "../components/Form";
import ButtonGroup from "../components/ButtonGroup";
import { fetchWrapper } from "../helpers/fetch-wrapper";
import { validations } from "../helpers/validations";

export default function Contact() {
  const router = useRouter();
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [messageContent, setMessageContent] = React.useState("");
  const [nameValid, setNameValid] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [phoneNumberValid, setPhoneNumberValid] = React.useState(false);
  const [messageValid, setMessageValid] = React.useState(false);
  const [isMessageSent, setIsMessageSent] = React.useState(false);
  const allValid = nameValid && emailValid && phoneNumberValid && messageValid;

  useEffect(() => {
    if (isMessageSent) {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [router, isMessageSent]);

  if (isMessageSent) {
    return (
      <Form toolBarText={"You succesfully sent a message to Wiki Code"}></Form>
    );
  } else {
    return (
      <>
        <Banner
          title={"Contact Us"}
          caption={
            "We love questions and feedback – and we're always happy to help! Here are some ways to contact us."
          }
        />
        <Form
          buttonDisabled={!allValid}
          toolBarText={"Send us a message and we'll respond within 24 hours."}
          handleClick={(e) => {
            e.preventDefault;
            if (allValid) {
              const contactMessage = { fullName, email, phoneNumber, organization, messageContent };
              fetchWrapper
                .post("http://localhost:8080/message/add", contactMessage)
                .then(() => {
                  console.log("new message added");                 
                });
              setIsMessageSent(true);
            } else {              
              document.getElementById("forminvalid").innerHTML =
                "Form info not valid";
            }
          }}
        >
          <TextField
            required={true}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!nameValid}
            value={fullName}
            onChange={(e) => validations.handleFormValidation(e, setFullName, setNameValid, "name")}
          />
          <TextField
            required={true}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!emailValid}
            value={email}
            onChange={(e) => validations.handleFormValidation(e, setEmail, setEmailValid, "email")}
          />
          <TextField
            required={true}
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!phoneNumberValid}
            value={phoneNumber}
            onChange={(e) => validations.handleFormValidation(e, setPhoneNumber, setPhoneNumberValid, "phone")}
          />
          <TextField
            id="outlined-basic"
            label="Organization"
            variant="outlined"
            fullWidth
            margin="normal"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
          <br />
          <Textarea
            required={true}
            id="outlined-basic"
            label="Message"
            placeholder="Type anything…"
            minRows={3}
            variant="outlined"
            fullWidth
            margin="normal"
            error={!messageValid}
            value={messageContent}
            onChange={(e) => validations.handleFormValidation(e, setMessageContent, setMessageValid, "message")}
          />
        </Form>
        <Container sx={{ justifyContent: "center", alignContent: "center" }}>
          <Paper elevation={2} sx={{ m: 2, p: 4 }}>
            <h2>Contact information</h2>
            <p>contact-us@wikicode.com</p> {/*TO DO: email icon */}
            <p>06 12345678</p> {/* TO DO: phone icon */}
          </Paper>
        </Container>
        <ButtonGroup
          buttonText1={"HOME"}
          link1={"/"}
          buttonText2={"ABOUT"}
          link2={"/about"}
        />
      </>
    );
  }
}
