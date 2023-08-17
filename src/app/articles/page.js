import Banner from "../components/Banner";
import Button from "../components/Button";
import Article2 from "../components/Article2";
import ButtonGroup from "../components/ButtonGroup";

export default function Articles() {
  return (
    <>
      <Banner
        title={"Articles"}
        caption={"tags/author: []"}
        content={"Filter by Rating"}
      />
      <Article2 />
      <Article2 />      
        <Button buttonText={"Scroll back to top"} />    
      <ButtonGroup buttonText1={"HOME"} link1={"/"} buttonText2={"CONTACT"} link2={"/contact"} />
    </>
  );
}