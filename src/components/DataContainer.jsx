
import Card from "./Card.jsx";
import {useNavigate} from "react-router-dom";

const DataContainer =({Data})=>{
    const navigate =useNavigate()
    return (
        <div className={"coffee__available"}>
            {Data.length > 0 ?
                (Data.map((coffee,key) => (
                    <div className={"coffee_holder"} onClick={() => {
                        navigate(`/description/${coffee.id-1}`)

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
    )
}
export default DataContainer