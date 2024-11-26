import "./CoffeeDesc.css"
import CategoryButton from "./CategoryButton.jsx";
const CoffeeDesc =()=>{
    const ksh =100
    const id =window.location.pathname
    console.log(id)
    return(
        <div className={"coffee__description"}>
            <div className={"top__navigation"}></div>
            <div className={"bottom__description"}>
                <div className={"about"}>
                    <div>coffee</div>
                    <div>chocolate</div>
                    <div>medium roasted</div>
                </div>
                <div className={"size__buttons"}>
                    <CategoryButton title={'Small'}/>
                    <CategoryButton title={'medium'}/>
                    <CategoryButton title={'large'}/>
                </div>
                <div className={"more__info"}>
                    <div className={"text"}>
                        <h3>About</h3>
                        <p>description</p>
                    </div>
                    <div>
                        <CategoryButton title={`Add to cart  Ksh ${ksh}`}/>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default CoffeeDesc;