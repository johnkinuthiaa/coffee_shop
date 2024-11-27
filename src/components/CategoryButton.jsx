import "./Button.css"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
const CategoryButton =({title ,navigateTO})=>{
    const navigate =useNavigate()
    const [loading,setLoading] =useState(false)

    function navigateToHome() {
        setTimeout(()=>{
            navigate(navigateTO)
            setLoading(false)
        },2000)

    }

    return(
        <div className={"btn"}>
            <button onClick={()=>{
                navigateToHome()
                setLoading(true)
            }}>{loading?"Loading...":title}</button>
        </div>
    )
}
export default CategoryButton