import React from "react";
import { Link } from "react-router-dom";

function SingleSuggestion({ movieData, onClickToMovie }) {
  console.log(onClickToMovie);
  const { Title, Poster, Year } = movieData;
  return (
    <div className="suggestion">
      <Link to={`/${Title.trim()}%20&y=${Year}`} onClick={onClickToMovie}>
        <h4>
          {Title} <span>Year: {Year}</span>
        </h4>
        <img src={Poster} alt={`${Title}'s Poster`} />
      </Link>
    </div>
  );
}

export default SingleSuggestion;
