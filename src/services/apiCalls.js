import axios from "axios";

const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&`;

const apiKey = process.env.REACT_APP_OMDB_KEY;

export const getMovies = async (movieTitle) => {
  const movie = await axios.get(`${baseUrl}s=${movieTitle}`);
  return movie.data;
};

export const getMovie = async (url) => {
  console.log(url);
  const urlArray = url.split(" ");
  const title = urlArray.filter((item) => !item.startsWith("&y=")).join("+");
  const year = urlArray.find((item) => item.startsWith("&y="));
  console.log(`title: ${title}`, `year: ${year}`);
  const movieData = await axios.get(`${baseUrl}t=${title}${year}`);
  return movieData.data;
};

export const getMovieTrailer = async (movieTitle, movieYear) => {
  console.log(console.log(movieTitle, movieYear));
  const modifiedMovieTrailer = movieTitle.replace(/ /gi, "%20");
  const baseYoutubeUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&part=id&maxResults=1&q=${modifiedMovieTrailer}%20${movieYear}%20movie%20trailer&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
  console.log(baseYoutubeUrl);
  const movieTrailer = await axios.get(baseYoutubeUrl);
  return movieTrailer.data;
};
