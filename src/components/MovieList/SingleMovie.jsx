import React from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { movieId } = useParams();
  return <h>SingleMovie - {movieId}</h>;
};

export default SingleMovie;
