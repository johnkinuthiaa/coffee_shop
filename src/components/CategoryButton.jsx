import "./Button.css"
import {useNavigate} from "react-router-dom";
const CategoryButton =({title ,navigateTO})=>{
    const navigate =useNavigate()

    function navigateToHome() {
        navigate(navigateTO)
    }

    return(
        <div className={"btn"}>
            <button onClick={()=>{
                navigateToHome()
            }}>{title}</button>
        </div>
    )
}
export default CategoryButton