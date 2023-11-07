import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import Fire from "./assets/emoji/fire.png";
import GlowingStar from "./assets/emoji/glowing-star.png";
import Bookmark from "./assets/emoji/Bookmark.png";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={GlowingStar} />
      <MovieList type="upcoming" title="Upcoming" emoji={Bookmark} />
    </div>
  );
};

export default App;
