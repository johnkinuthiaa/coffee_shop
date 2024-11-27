import "./Footer.css"
const Footer =()=>{
    return(
        <div className={"footer"}>
            <p> &#169;Coffee shop</p>
            <p>{new Date().getFullYear()}</p>
            <p>&lt;&lt;&lt; sli &gt;&gt;&gt;</p>
        </div>
    )
}
export default Footer;