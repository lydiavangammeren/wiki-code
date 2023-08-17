import Link from 'next/link';
import Grid from "@mui/material/Grid";
import LoginForm from "../app/components/LoginForm"
import Button from '../app/components/Button';
import Banner from "../app/components/Banner";
import ButtonGroup from "../app/components/ButtonGroup";

export const metadata = {
  title: "Wiki Code",
};

export default function App() {
  return (
    <>
 
      <Banner
        title="Wiki Code"
        caption="Write your own code reference book"
        content="Create and update useful code examples together with your colleagues"
      />
      <Grid container justifyContent="center">
        <Link href="/search">
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
        <Link href="/signup">
          <Grid container justifyContent="flex-end">
            <Button buttonText={"SIGN UP"} />
          </Grid>
        </Link>  
      </Grid> 
    </>
  );
}
