import React from "react";
import "./Loading.css";

import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading() {
  return (
    <div className="loading-container">
      <CircularProgress color="secondary" />
    </div>
  );
}
