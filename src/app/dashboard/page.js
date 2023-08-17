"use client";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Button from "../components/Button";
import LoginForm from "../components/LoginForm";
import Banner from "../components/Banner";
import ButtonGroup from "../components/ButtonGroup";

export default function Home() {
  return (
    <>
      <Banner
        title="Wiki Code"
        caption="Write your own code reference book"
        content="Create and update useful code examples together with your colleagues"
      />
      {/* <Grid container justifyContent="center">
        <Link to="/search">
          <Button
            sx={{
              m: 2,
              color: "white",
              backgroundColor: "#169db3",
              borderColor: "green",
            }}
            buttonText={"SEARCH BY TAG OR AUTHOR"}
            bgColor="#169db3"
          />
        </Link>
        <ButtonGroup buttonText1={"ABOUT"} link1={"/about"} buttonText2={"CONTACT"} link2={"/contact"}/>
        <LoginForm />
        <Link to="/signup">
          <Grid container justifyContent="flex-end">
            <Button buttonText={"SIGN UP"} />
          </Grid>
        </Link>
      </Grid> */}
    </>
  );
}