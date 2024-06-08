import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode((prevNightMode) => !prevNightMode);
  };

  return (
    <div className={`Navbar ${nightMode ? "night-mode" : ""}`}>
      <h2 className={nightMode ? "night-mode-text" : ""}>
        Where in the world?
      </h2>
      <button
        className={`Dark-Mode ${nightMode ? "night-mode-text" : ""}`}
        onClick={toggleNightMode}
      >
        Dark Mode🌙
      </button>
    </div>
  );
};

export default Navbar;
