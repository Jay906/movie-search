import React, { useState, useEffect } from "react";
import { getMovies } from "../services/apiCalls";
import SingleSuggestion from "./SingleSuggestion";
import { v4 as uuid } from "uuid";

function SuggestionsList({ input, onClickToMovie }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (input) {
      getMovies(input)
        .then((res) => res.Search)
        .then((data) => {
          if (Array.isArray(data)) {
            setMovies(data);
          }
        });
    }
  }, [input]);

  return (
    <div className="suggestions">
      {movies.map((movie) => (
        <SingleSuggestion
          movieData={movie}
          key={uuid()}
          onClickToMovie={onClickToMovie}
        />
      ))}
    </div>
  );
}

export default SuggestionsList;
