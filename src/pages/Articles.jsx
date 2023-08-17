import Banner from "../app/components/Banner";
import Button from "../app/components/Button";
import Article from "../app/components/Article";
import ButtonGroup from "../app/components/ButtonGroup";

export default function Articles() {
  return (
    <>
      <Banner
        title={"Articles"}
        caption={"tags/author: []"}
        content={"Filter by Rating"}
      />
      <Article />
      <Article />      
        <Button buttonText={"Scroll back to top"} />    
      <ButtonGroup buttonText1={"HOME"} link1={"/"} buttonText2={"CONTACT"} link2={"/contact"} />
    </>
  );
}
