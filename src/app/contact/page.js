import { TextField} from "@mui/material";
import { Textarea } from '@mui/joy';
import Banner from "../components/Banner";
import Form from "../components/Form";
import ButtonGroup from "../components/ButtonGroup";

export default function Contact() {
  return (
    <>
      <Banner
        title={"Contact Us"}
        caption={
          "We love questions and feedback – and we're always happy to help! Here are some ways to contact us."
        }
      />
      <h1>Send us a message</h1>
      <Form
        toolBarText={"Send us a message and we'll respond within 24 hours."}
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
        <br/>
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
      <h2>Contact information</h2>
      <p>contact-us@wikicode.com</p> {/*TO DO: email icon */}
      <p>06 12345678</p> {/* TO DO: phone icon */}
      <ButtonGroup
        buttonText1={"HOME"}
        link1={"/"}
        buttonText2={"ABOUT"}
        link2={"/about"}
      />
    </>
  );
}