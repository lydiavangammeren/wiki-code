import {TextField, FormGroup, FormControlLabel, Checkbox, Button} from "@mui/material";
import Banner from "../components/Banner";
import ButtonGroup from "../components/ButtonGroup";
import Form from "../components/Form";
import SimpleDialog from "../components/SimpleDialog";


export default function WriteArticle() {
  return (
    <>
      <Banner title={"Write a new Article"} />
      <Form>
      <TextField
          id="outlined-basic"
          aria-label="article title"
          label="Article title"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <TextField
        multiline
        minRows={5}
          id="outlined-basic"
          aria-label="article content"
          label="Article content"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
         <TextField
        multiline
        minRows={5}
          id="outlined-basic"
          aria-label="code example"
          label="Code example"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />            
        <h2>Tags:</h2>
        <FormGroup fullWidth sx={{ display: "inline" }}>
          <FormControlLabel control={<Checkbox />} label="Java" />
          <FormControlLabel control={<Checkbox />} label="React" />
          <FormControlLabel control={<Checkbox />} label="JavaScript" />
        </FormGroup>
        <br/>
        <Button sx={{m: 1}}
  variant="contained"
  component="label"
> 
Upload image
  <input
    type="file"
    id="code-image"
          name="code-image"
          accept="image/png, image/jpeg"
    hidden
  />
</Button>   
      </Form>     
      <SimpleDialog/>      
      <ButtonGroup
        buttonText1={"HOME"}
        link1={"/"}
        buttonText2={"CONTACT"}
        link2={"/contact"}
      />
    </>
  );
}
