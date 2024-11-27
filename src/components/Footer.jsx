import "./Footer.css"
import {Link} from "react-router-dom";
const Footer =()=>{
    return(
        <div className={"footer"}>
            <p> &#169;Coffee shop</p>
            <p>{new Date().getFullYear()}</p>
            <p> <a href={"https://github.com/johnkinuthiaa/coffee_shop"}>&lt;&lt;&lt; sli &gt;&gt;&gt;</a> </p>
        </div>
    )
}
export default Footer;