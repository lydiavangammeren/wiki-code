import { TextField} from "@mui/material";
import Banner from "../components/Banner";
import Form from "../components/Form";
import ButtonGroup from "../components/ButtonGroup"

export default function SignUpForm() {  
  return (
    <>
      <Banner
        title={"Sign Up"}
        caption={
          "Sign up for Wiki Code and start contributing to this amazing code reference site! "
        }
      />
      <Form toolBarText={"Enter your information"}>
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
      <ButtonGroup
        buttonText1={"HOME"}
        link1={"/"}
        buttonText2={"CONTACT"}
        link2={"/contact"}
      />
    </>
  );
}