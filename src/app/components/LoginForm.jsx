import { TextField } from "@mui/material";
import Form from "../components/Form";

export default function LoginForm() {
  return (
    <>
      <Form toolBarText={"Login"}>
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
