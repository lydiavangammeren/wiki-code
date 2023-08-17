import { Link } from "react-router-dom";
import Banner from "../app/components/Banner";
import Button from "../app/components/Button";
import Article from "../app/components/Article";
import ButtonGroup from "../app/components/ButtonGroup";

export default function Author() {
  return (
    <>
      <Banner title={"USER NAME"} />
      <Link to="/writearticle">
        <Button buttonText={"Add new article"} />
      </Link>

      <Article />
      <Article />
      <ButtonGroup
        buttonText1={"HOME"}
        link1={"/"}
        buttonText2={"CONTACT"}
        link2={"/contact"}
      />
    </>
  );
}
