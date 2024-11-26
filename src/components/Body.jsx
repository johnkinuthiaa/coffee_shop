import "./Body.css"
import CategoryButton from "./CategoryButton.jsx";
import Data from "/src/Data.js"
import Card from "./Card.jsx";
import {Link, useNavigate} from "react-router-dom";
import CoffeeDesc from "./CoffeeDesc.jsx";
import DataContainer from "./DataContainer.jsx";
const Body =()=>{
    const navigate =useNavigate()
    return(
        <div className={"home__body"}>
            <h2>Categories</h2>
            <div className={"category__selection"}>
                <CategoryButton title={"Espresso"} />
                <CategoryButton title={"Latte"} />
                <CategoryButton title={"Cappuccino"} />
                <CategoryButton title={"Americano"} />
                <CategoryButton title={"Cold Brew"} />
                <CategoryButton title={"Mocha"} />
                <CategoryButton title={"Flat-white"} />
                <CategoryButton title={"Affogato"} />

            </div>
            <DataContainer Data={Data}/>
        </div>
    )
}
export default Body