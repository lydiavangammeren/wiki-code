import Link from 'next/link';
import Banner from "../components/Banner";
import Button from "../components/Button";
import Article2 from "../components/Article2";
import ButtonGroup from "../components/ButtonGroup";

export default function Author() {
  return (
    <>
      <Banner title={"USER NAME"} />
      <Link href="/writearticle">
        <Button buttonText={"Add new article"} />
      </Link>

      <Article2 />
      <Article2 />
      <ButtonGroup
        buttonText1={"HOME"}
        link1={"/"}
        buttonText2={"CONTACT"}
        link2={"/contact"}
      />
    </>
  );
}