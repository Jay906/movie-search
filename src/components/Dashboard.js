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
      {/* {!input && <Route exact path="/:id" component={SingleMovie} />} */}
      <Route exact path="/:id" component={SingleMovie} />
    </section>
  );
}

export default Dashboard;
