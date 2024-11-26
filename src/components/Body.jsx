import "./Body.css"
import CategoryButton from "./CategoryButton.jsx";
import Data from "/src/Data.js"
import Card from "./Card.jsx";
import {Link, useNavigate} from "react-router-dom";
import CoffeeDesc from "./CoffeeDesc.jsx";
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
            <div className={"coffee__available"}>
                {Data.length>0?
                    (Data.map((coffee,key)=>(
                        <div className={"coffee_holder"}  onClick={()=>{
                            navigate(`/description/${key}`)

                        }}>
                            <Card name={coffee.name}
                                  image={coffee.image}
                                  price={coffee.price}
                                  incl={coffee.categories}
                                  description={coffee.description}

                            />
                        </div>
                    )))
                    :
                    (
                        <div>data is empty</div>
                    )
                }
            </div>
        </div>
    )
}
export default Body