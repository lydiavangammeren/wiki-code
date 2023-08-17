// import ButtonGroup from "../components/ButtonGroup";
import Banner from "../components/Banner";

export default function About()  {
  return (
    <>
      
        <Banner title={"ABOUT"} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
          commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
          eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam
          nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet
          quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu
          diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
          sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula,
          a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci
          ullamcorper at ultricies metus viverra. Pellentesque arcu mauris,
          malesuada quis ornare accumsan, blandit sed diam.
        </p>
        <ul>
          {contributors.map((contributor, index) => {
            return <li key={index}>{contributor}</li>;
          })}
        </ul>
        {/* <ButtonGroup
          buttonText1={"HOME"}
          link1={"/"}
          buttonText2={"CONTACT"}
          link2={"/contact"}
        /> */}
     
    </>
  );
};

const contributors = [
  "Author 1",
  "Author 1",
  "Author 3",
  "Author 4",
  "Author 5",
];

