import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Banner from "../components/Banner";
import Form from "../components/Form";
import ButtonGroup from "../components/ButtonGroup";

export default function SearchForm() {
  return (
    <>
      <Banner title={"Search"} />
      <Form toolBarText={"Search by author and/or tags"}>
        <select name="author" id="author">
          <option value="all" selected>
            All
          </option>
          <option value="author1">Author 1</option>
          <option value="author2">Author 2</option>
          <option value="author3">Author 3</option>
          <option value="author4">Author 4</option>
        </select>
        <br/>
        <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>
        <br />
        <input type="checkbox" id="language1" name="language1" value="Java" />
        <label for="language1">Java</label>
        <br />
        <input
          type="checkbox"
          id="language2"
          name="language2"
          value="JavaScript"
        />
        <label for="language2">JavaScript</label>
        <br />
        <input type="checkbox" id="language3" name="language3" value="React" />
        <label for="language3">React</label>
        <br />
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
