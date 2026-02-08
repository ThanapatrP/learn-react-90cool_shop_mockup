import { useNavigate } from "react-router-dom";

import "./NavBar.css";
import "./NavButton.css";

function NavButton({ name, path }) {
  const navigate = useNavigate();

  return (
    <button
      className="navButton courier-prime-bold"
      onClick={() => navigate(path)}
    >
      ${name}
    </button>
  );
}

export default NavButton;
