import { useRef, useState, memo } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCartPlus,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const navRef = useRef();
  const [isSearchSelected, setIsSearchSelected] = useState(false);

  //Hamburger Menu Icon logic
  const [isOpen, setOpen] = useState(false);

  function setOpenOrClose() {
    setOpen(!isOpen);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  function handleSearchBar() {
    setIsSearchSelected(!isSearchSelected);
  }

  function showNavBar() {
    navRef.current.classList.toggle("resp_nav");
  }
  return (
    <header>
      <img
        src="images/logo-samzareulo.png"
        alt=""
        className="logo"
        onClick={() => {
          console.log("test");
        }}
      />

      <div className={`menu ${isOpen ? "change" : ""}`}>
        <div
          className={`search-container ${
            isSearchSelected ? "search-bar-active" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Search for dishes..."
            onFocus={handleSearchBar}
            onBlur={handleSearchBar}
            className="search-input"
          ></input>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <nav className="navbar-links" ref={navRef}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Gift Cards</NavLink>
          <NavLink to="/">About Us</NavLink>
          <NavLink to="/">Career</NavLink>
          <NavLink to="/signin">SignIn</NavLink>
          <button className="cart-button">
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </nav>
      </div>

      <div
        className={`burger ${isOpen ? "change" : ""}`}
        onClick={setOpenOrClose}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
  );
}

export default NavBar;
