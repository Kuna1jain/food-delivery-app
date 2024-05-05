
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
export default Header;