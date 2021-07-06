import React, { useState } from "react";

function Input({ input, onInputChange }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={onInputChange}
        required={true}
        placeholder="Type movie title here..."
      />
      {/* <button type="button" onClick={() => onClick(title)}>
        Search
      </button> */}
    </div>
  );
}

export default Input;
