const Restaurant = (props) => {
    const { resName, cuisines } = props;
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0=" />
            <h3>{resName}</h3>
            <h4>{cuisines}</h4>
            <h4>Rating</h4>
            <h4>XX mins</h4>
        </div>
    );
};
export default Restaurant;