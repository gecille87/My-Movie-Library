import { useEffect, useState } from "react";
import lodash from "lodash";

import "./MovieList.css";
// import fireIcon from "../../assets/emoji/fire.png";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ title, emoji, type }) => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filterMovies, setFilterMovies] = useState([]);
  const [sort, setSort] = useState({ by: "default", order: "desc" });
  // run logic on component render
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = lodash.orderBy(
        filterMovies,
        [sort.by],
        [sort.order]
      );
      setFilterMovies(sortedMovies);
    }
  }, [sort]);
  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=3c6ad81ba3f4d5977e7a0fc2ff266831`
    );
    const data = await res.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };
  //project question: what is await syntax?
  // project Question: Understand more about useEffect?
  //project question: how does useEffect syntax work?

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // console.log(sort);

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title}{" "}
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <FilterGroup
            ratings={[8, 7, 6]}
            minRating={minRating}
            onRatingClick={handleFilter}
          />
          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
