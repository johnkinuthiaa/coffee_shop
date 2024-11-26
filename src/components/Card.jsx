import "./Card.css"
import AddIcon from '@mui/icons-material/Add';
const Card =({image,name,incl,price,description})=>{
    return(
        <div className={"flavours"}>

            <div className={"card__image"}>
                <img src={image} alt={"image"}/>
            </div>
            <div className={"text__part"}>
                <div>
                    <h4>{name}</h4>
                    <p>{incl[0]}</p>
                    <p>Ksh: <span className={"amount"}>{price*130}</span></p>
                </div>
                {/*<p>{description}</p>*/}
                <div className={"add__to__cart"}>
                    <button><AddIcon/></button>
                </div>
            </div>

        </div>
    )
}
export default Card;