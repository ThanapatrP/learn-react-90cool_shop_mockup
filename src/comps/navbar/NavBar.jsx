import NavButton from "./NavButton.jsx";
import NavSearchBox from "./NavSearchBox.jsx";

import "./NavBar.css";

function NavBar() {
  return (
    <div id="navBar" className="courier-prime-regular">
      <img src="src/assets/image.png" alt="90cool-logo" id="logo" />
      <div id="buttons">
        <NavButton name={"HOME"} path="/" />
        <NavButton name={"PRODUCTS"} path="/" />
        <NavButton name={"ABOUTUS"} path="/aboutus" />
      </div>
      <NavSearchBox />
    </div>
  );
}

export default NavBar;
