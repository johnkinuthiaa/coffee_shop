import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchSection.css"
import Data from "../Data.js";
import {useState} from "react";
import DataContainer from "./DataContainer.jsx";
import {ShoppingCart} from "@mui/icons-material";

const SearchSection =()=>{
    const[search,setSearch] =useState("")
    const[foundData,setData] =useState([])
    const searchForCoffee =(search)=>{
        const dt =Data.filter((data)=>{
            return data.name.toLowerCase() ===search.toLowerCase()
        })
        setData(dt)
    }
    return(
        <div className={"search__section"}>
            <div className={"search__section__profile"}>
                <img className={"profile__image"} alt={"profile"} src={"https://i.pinimg.com/236x/36/36/23/3636238a4005f70cc22ea2738b6a317d.jpg"}/>
                <div className={"location"}>
                    <LocationOnIcon />
                    <p>Nairobi,Kenya</p>
                </div>
                <NotificationsNoneIcon/>
                <div className={"shopping__cart"}>
                    <ShoppingCart className={"shopping__cart__icon"}/>
                    <p>1</p>
                </div>
            </div>
            <div className={"search__section__welcome"}>
                <h4>Good morning ,Angela</h4>
            </div>
            <div className={"search__section__search__section"}>
                <input type={"search"}
                       placeholder={"search for coffee"}
                       className={"search__section__search__section__input"}
                       onChange={(e)=>setSearch(e.target.value)}
                />
                <div className={"search__section__search__section__icon"}>
                    <button
                        type={"submit"}
                        onClick={(e)=>{
                            e.preventDefault()
                            searchForCoffee(search)
                        }}>
                        <SearchIcon/>
                    </button>
                </div>
            </div>
            <div className={"search__section__results"}>
                <DataContainer Data={foundData}/>
            </div>

        </div>
    )
}
export default SearchSection