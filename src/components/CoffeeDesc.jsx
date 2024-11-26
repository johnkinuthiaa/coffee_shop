import "./CoffeeDesc.css"
import CategoryButton from "./CategoryButton.jsx";
import Data from "../Data.js";
import {
    HeartBroken, KeyboardArrowLeft,
    Star
} from "@mui/icons-material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const CoffeeDesc =()=>{
    const id =window.location.pathname
    const itemId =id.substring(13,id.length)
    const item =Data[itemId]
    const[liked,setLiked] =useState(false)
    const[rating,setRating] =useState(false)
    const navigate =useNavigate()

    return(
        <div className={"coffee__description"}>
            <div className={"top__part"}>
                <div className={"like__back"}>
                    <button onClick={()=>navigate("/home")}><KeyboardArrowLeft/></button>
                    <button onClick={()=>{
                        setLiked(!liked)

                    }}>
                        {liked?(<HeartBroken />):(<HeartBroken style={{color:"red"}}/>)}

                    </button>
                </div>
                <div className={"bottom__name"}>
                    <div>
                        <h3>{item.name}</h3>
                        <h3>{item.categories}</h3>
                    </div>
                    <div>
                        <div className={"rating"}>
                            <Star />
                            <h3>4.0</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bottom__description"}>
                <div className={"about"}>
                    <div>{item.categories}</div>
                    <div>chocolate</div>
                    <div>medium roasted</div>
                </div>
                <div className={"size__buttons"}>
                    <CategoryButton title={'Small'} />
                    <CategoryButton title={'medium'}/>
                    <CategoryButton title={'large'}/>
                </div>
                <div className={"more__info"}>
                    <div className={"text"}>
                        <h3>About</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className={"bottom__add__to__cart"} >
                        <CategoryButton title={`Add to cart  Ksh ${item.price*130}`}/>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CoffeeDesc;