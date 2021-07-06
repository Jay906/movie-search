import React from "react";
import { VscLoading } from "react-icons/vsc";

function Loading() {
  return (
    <div className="loading-page">
      <VscLoading />
      <p>Please wait...</p>
    </div>
  );
}

export default Loading;
