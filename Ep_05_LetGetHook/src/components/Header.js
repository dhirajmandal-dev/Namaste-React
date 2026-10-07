import { LOGO_UR } from "../utils/constant";

// header
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={LOGO_UR} alt="logo" />
      </div>

      <div className="nav-container">
        <ul>
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
