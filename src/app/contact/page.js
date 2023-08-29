"use client"
import React from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Paper, Container, FormHelperText } from "@mui/material";
import { Textarea } from "@mui/joy";
import Banner from "../components/Banner";
import Form from "../components/Form";
import ButtonGroup from "../components/ButtonGroup";
import {fetchWrapper} from "../helpers/fetch-wrapper";

export default function Contact() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [nameValid, setNameValid] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [phoneValid, setPhoneValid] = React.useState(false);
  const [messageValid, setMessageValid] = React.useState(false);
  const [allValid, setAllValid] = React.useState(false);

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
        handleClick={(e) => {}}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={email}
          // onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={password}
          // onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Organization"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={address}
          // onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <Textarea
          id="outlined-basic"
          label="Message"
          placeholder="Type anything…"
          minRows={3}
          variant="outlined"
          fullWidth
          margin="normal"
          // value={address}
          // onChange={(e) => setAddress(e.target.value)}
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
