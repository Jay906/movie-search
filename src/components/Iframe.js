import React, { useState, useEffect } from "react";
import { getMovieTrailer } from "../services/apiCalls";

function Iframe({ title, year }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    getMovieTrailer(title, year).then((data) => {
      setUrl(`https://youtube.com/embed/${data.items[0].id.videoId}`);
    });
  }, []);
  return (
    <iframe src={url} title="Youtube Trailer" allowFullScreen={true}></iframe>
  );
}

export default Iframe;
