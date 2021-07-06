// // import React from "react";
// // import Input from "./Input";

// // function Dashboard({ movie }) {
// //   console.log(movie);
// //   const newMovie = { ...movie };
// //   const { Poster, Ratings } = movie;
// //   delete newMovie.Poster;
// //   delete newMovie.Ratings;
// //   const generalInfoContent = [];
// //   for (let key in newMovie) {
// //     const info = (
// //       <div key={key}>
// //         {key}: {newMovie[key]}
// //       </div>
// //     );
// //     generalInfoContent.push(info);
// //   }
// //   return (
// //     <div className="container">
// //       <img src={Poster} alt="Show poster" height="auto" width="220px" />
// //       <div className="general-info">{generalInfoContent}</div>
// //     </div>
// //   );
// // }

// // export default Dashboard;

// import React, {useState} from 'react'
// import Input from './Input'

// function Dashboard() {
//   const [moviesData, setMovieData] = useState();
//   const onClick = (movieTitle) => {
//     console.log(movieTitle);
//     const modifiedMovieTitle = movieTitle.replace(/ /gi, "+");
//     getMovie(modifiedMovieTitle)
//       .then((data) => setMovieData(data))
//       .catch((err) => console.error(err));
//   };
//   return (
//     <div>

//     </div>
//   )
// }

// export default Dashboard

import React, { useState } from "react";
import { Route } from "react-router-dom";
import Input from "./Input";
import SuggestionsList from "./SuggestionsList";
import SingleMovie from "./SingleMovie";

function Dashboard() {
  const [input, setInput] = useState("");
  const onInputChange = (e) => setInput(e.target.value);
  const onClickToMovie = (e) => setInput("");
  return (
    <section>
      <Input input={input} onInputChange={onInputChange} />
      {input && (
        <SuggestionsList input={input} onClickToMovie={onClickToMovie} />
      )}
      {!input && <Route exact path="/:id" component={SingleMovie} />}
    </section>
  );
}

export default Dashboard;
