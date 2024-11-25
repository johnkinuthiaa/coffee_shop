import "./Homepage.css"
import CategoryButton from "../components/CategoryButton.jsx";
const HomePage =()=>{
    return (
        <div className={"homepage"}>
            <div className={"intro"}>
                <h2 className={"app_name"}>CRAVE</h2>
                <h2 className={"heading"}>Enjoy quality brew with the finest of flavours</h2>
            </div>
            <div className={"bottom"}>
                <h2 className={"desc"}>The best of its kind you can ever get with exquisite taste and quality flavours.</h2>
                <CategoryButton  title={"Get Started"} navigateTO={"/home"}/>
            </div>
        </div>
    )
}
export default HomePage