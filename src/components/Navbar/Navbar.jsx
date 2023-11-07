import React from "react";
import "./Navbar.css";
import Darkmode from "../Darkmode/Darkmode";
import fireIcon from "../../assets/emoji/fire.png";
import starIcon from "../../assets/emoji/glowing-star.png";
import bookmarkIcon from "../../assets/emoji/Bookmark.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Movie Library</h1>
      <div className="navbar_links">
        <Darkmode />
        <a href="#popular">
          Popular{" "}
          <img className="navbar_emoji" src={fireIcon} alt="fire emoji" />
        </a>
        <a href="#top_rated">
          Top Rated{" "}
          <img className="navbar_emoji" src={starIcon} alt="star emoji" />
        </a>
        <a href="#upcoming">
          Upcoming{" "}
          <img
            className="navbar_emoji"
            src={bookmarkIcon}
            alt="bookmark emoji"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
