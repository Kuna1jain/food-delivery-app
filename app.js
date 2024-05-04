import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWVGesD3NiA5g2iJG8wQUOQu0zMU2htYgaZ_1MNdY6g&s" />
            </div>

            <div className="nav-items">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const Restaurant = () => (

    <div className="res-card">
        <img className="res-logo" src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0=" />
        <h3>Restaurant</h3>
        <h4>Cuisines</h4>
        <h4>Rating</h4>
        <h4>XX mins</h4>
    </div>
);
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search <textarea className="search-text"></textarea>  </div>
            <div className="res-container" >
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
            </div>
        </div>
    );
}
const App = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);