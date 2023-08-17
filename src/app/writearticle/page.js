import Banner from "../components/Banner";
import ButtonGroup from "../components/ButtonGroup";
import Form from "../components/Form";
import SimplePopper from "../components/SimplePopper";

export default function WriteArticle() {
  return (
    <>
      <Banner title={"Write a new Article"} />
      <Form>
      <label for="title">Article title:</label>
        <input id="title" name="title"></input>
        <br />
        <label for="message">Article content:</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>
        <br />
        <label for="message">Code Example:</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>
        <br />
        <h2>Tags:</h2>
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
        <label for="code-image">Upload an image:</label>

        <input
          type="file"
          id="code-image"
          name="code-image"
          accept="image/png, image/jpeg"
        />
        <br />  
      </Form>
      <SimplePopper title="Add a tag" buttonText="Add a new tag"></SimplePopper>      
      <ButtonGroup
        buttonText1={"HOME"}
        link1={"/"}
        buttonText2={"CONTACT"}
        link2={"/contact"}
      />
    </>
  );
}
