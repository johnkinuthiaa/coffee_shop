import "./CoffeeDesc.css"
import CategoryButton from "./CategoryButton.jsx";
import Data from "../Data.js";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    HeartBroken, KeyboardArrowLeft,
    Star
} from "@mui/icons-material";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
const CoffeeDesc =()=>{
    const id =window.location.pathname
    const itemId =id.substring(13,id.length)
    const item =Data[itemId]
    const[liked,setLiked] =useState(false)
    const[rating,setRating] =useState(false)
    const navigate =useNavigate()

    return(
        <div className={"coffee__description"}>
            <div className={"top__part"}
                 style={{
                     backgroundImage: `url(${item.image})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     height: '450px',
                     width: '100%' ,
                     margin:"0",
                     borderRadius:'10px'
                 }}
            >
                <div className={"like__back"}>
                    <button onClick={()=>navigate("/home")}><KeyboardArrowLeft/></button>
                    <button onClick={()=>{
                        setLiked(!liked)

                    }}>
                        {liked?(<FavoriteIcon style={{color:"red"}}/>):(<HeartBroken style={{color:"red"}}/>)}

                    </button>
                </div>
                <div className={"bottom__name"}>
                    <div>
                        <h2>{item.name}</h2>
                        {/*<h3>{item.categories}</h3>*/}
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
                    <div className={"about__categories"}>
                        {item.categories.map((cat)=>(
                            <p key={cat}>{cat}</p>
                        ))}
                    </div>

                </div>
                <div className={"size__buttons"}>
                    <button>Small</button>
                    <button>medium</button>
                    <button>large</button>
                </div>
                <div className={"more__info"}>
                    <div className={"text"}>
                        <h3>About</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className={"bottom__add__to__cart"} >
                        <CategoryButton title={`Buy Ksh ${item.price*130}`}/>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CoffeeDesc;