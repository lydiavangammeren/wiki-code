import Image from "next/image"
import codeImage from '../images/code-image.jpg'
import ratingIcon from '../images/rating-icon.jpg'

export default function Article() {
    return (
        <>
        <div style={{border: "solid black 3px", marginBottom: "2px" }}>
        <span>
        <h1>Article</h1>
        <Image src={ratingIcon} alt="rating" width="65" height="65" /> 
        </span>
        <p>Lorem ipsum dolo, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. </p>
        <span>
        <code>
        `function Welcome(props) 
        <h3>Hello, props.name</h3>;`
        </code>
        <Image src={codeImage} alt="code-image" width="300" height="300"></Image>
        </span>
        <span>#JavaScript #React</span>
        <p>Last day modified: xx-xx-xxxx</p>
        </div>
        </>
    )
}