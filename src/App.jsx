import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import Fire from "./assets/emoji/fire.png";
import GlowingStar from "./assets/emoji/glowing-star.png";
import Bookmark from "./assets/emoji/Bookmark.png";
import SingleMovie from "./components/MovieList/SingleMovie";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<MovieList type="popular" title="Popular" emoji={Fire} />}
          />
          <Route
            path="/top_rated"
            element={
              <MovieList
                type="top_rated"
                title="Top Rated"
                emoji={GlowingStar}
              />
            }
          />
          <Route
            path="/upcoming"
            element={
              <MovieList type="upcoming" title="Upcoming" emoji={Bookmark} />
            }
          />
          <Route path="/movie/:movieId" element={<SingleMovie />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
