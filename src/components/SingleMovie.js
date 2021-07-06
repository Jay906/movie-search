import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovie } from "../services/apiCalls";
import Iframe from "./Iframe";
import Loading from "./Loading";

function SingleMovie() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  const { Poster, Title, Year } = movieData;
  const movieInfo = {
    Year: movieData.Year,
    Actors: movieData.Actors,
    Director: movieData.Director,
    Genre: movieData.Genre,
    Runtime: movieData.Runtime,
    Plot: movieData.Plot,
    Country: movieData.Country,
    Language: movieData.Language,
  };

  useEffect(() => {
    getMovie(id).then((data) => {
      setMovieData(data);
      setLoading(false);
    });
  }, [id]);

  const movieInfoContent = () => {
    const content = [];
    for (let key in movieInfo) {
      const elem = (
        <p key={key}>
          <strong>{key}</strong>: {movieInfo[key]}
        </p>
      );
      content.push(elem);
    }
    return content;
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      <div className="single-movie">
        <div className="single-movie-img">
          <img src={Poster} alt={`${Title} movie's Poster`} />
        </div>
        <div className="single-movie-content">
          <h2>{Title}</h2>
          <article className="movie-info">{movieInfoContent()}</article>
        </div>
      </div>
      <div className="single-movie-trailer">
        <Iframe title={Title} year={Year} />
      </div>
    </section>
  );
}

export default SingleMovie;
