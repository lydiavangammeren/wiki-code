import Link from 'next/link';
import Banner from "../components/Banner";
import Button from "../components/Button";
import Article from "../components/Article";
import ButtonGroup from "../components/ButtonGroup";

export default function Author() {
  return (
    <>
      <Banner title={"USER NAME"} />
      <Link href="/writearticle">
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