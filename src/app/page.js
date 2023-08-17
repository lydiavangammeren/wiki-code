import Grid from "@mui/material/Grid";
import Link from 'next/link';
import Button from '../app/components/Button';
import Banner from "../app/components/Banner";

export const metadata = {
  title: "Wiki Code",
};

export default function App() {
  return (
    <>
    <h1 className="title">
  Read <Link href="/about">this page!</Link>
</h1>
      <Banner
        title="Wiki Code"
        caption="Write your own code reference book"
        content="Create and update useful code examples together with your colleagues"
      />
      <Grid container justifyContent="center">
        <Link href="/about">
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
        {/* <ButtonGroup buttonText1={"ABOUT"} link1={"/about"} buttonText2={"CONTACT"} link2={"/contact"}/>
        <LoginForm />
        <Link to="/signup">
          <Grid container justifyContent="flex-end">
            <Button buttonText={"SIGN UP"} />
          </Grid>
        </Link> */}
      </Grid> 
    </>
  );
}
