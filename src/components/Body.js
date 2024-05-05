import Restaurant from "./RestaurantCard";
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search <textarea className="search-text"></textarea>  </div>
            <div className="res-container" >
                <Restaurant resName="Wah ji Wah" cuisines="North Indian, Tandoori, Snacks"/>
                <Restaurant resName="Wah Bhai Wah" cuisines="Chaap, Breads, North Indian"/>
                
            </div>
        </div>
    );
}
export default Body;
