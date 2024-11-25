import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchSection.css"

const SearchSection =()=>{
    return(
        <div className={"search__section"}>
            <div className={"search__section__profile"}>
                <img className={"profile__image"} alt={"profile"} src={"https://i.pinimg.com/236x/36/36/23/3636238a4005f70cc22ea2738b6a317d.jpg"}/>
                <div className={"location"}>
                    <LocationOnIcon />
                    <p>Nairobi,Kenya</p>
                </div>
                <NotificationsNoneIcon/>
            </div>
            <div className={"search__section__welcome"}>
                <h4>Good morning ,Angela</h4>
            </div>
            <div className={"search__section__search__section"}>
                <input type={"search"} placeholder={"search for coffee"} className={"search__section__search__section__input"}/>
                <div className={"search__section__search__section__icon"}>
                    <button><SearchIcon/></button>

                </div>
            </div>
        </div>
    )
}
export default SearchSection