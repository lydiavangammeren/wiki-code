import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import Banner from "../components/Banner";
import Form from "../components/Form";
import ButtonGroup from "../components/ButtonGroup";

export default function SearchForm() {
  function handleChange() {}
  return (
    <>
      <Banner title={"Search"} />
      <Form toolBarText={"Search by author and/or tags"}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="author">Author</InputLabel>
          <Select
            labelId="author"
            id="author"
            value={"author"}
            label="author"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"Author 1"}>Author 1</MenuItem>
            <MenuItem value={"Author 2"}>Author 2</MenuItem>
            <MenuItem value={"Author 3"}>Author 3</MenuItem>
          </Select>
          <FormHelperText>Choose all authors or pick one</FormHelperText>
        </FormControl>

        <br />
        <FormGroup sx={{ display: "inline" }}>
          <FormControlLabel control={<Checkbox />} label="Java" />
          <FormControlLabel control={<Checkbox />} label="React" />
          <FormControlLabel control={<Checkbox />} label="JavaScript" />
        </FormGroup>
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
