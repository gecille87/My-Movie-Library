import React from "react";
import "./Navbar.css";
import Darkmode from "../Darkmode/Darkmode";
import fireIcon from "../../assets/emoji/fire.png";
import starIcon from "../../assets/emoji/glowing-star.png";
import bookmarkIcon from "../../assets/emoji/Bookmark.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Movie Library</h1>
      <div className="navbar_links">
        <Darkmode />
        <NavLink to="/">
          Popular{" "}
          <img className="navbar_emoji" src={fireIcon} alt="fire emoji" />
        </NavLink>
        <NavLink to="/top_rated">
          Top Rated{" "}
          <img className="navbar_emoji" src={starIcon} alt="star emoji" />
        </NavLink>
        <NavLink to="/upcoming">
          Upcoming{" "}
          <img
            className="navbar_emoji"
            src={bookmarkIcon}
            alt="bookmark emoji"
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
