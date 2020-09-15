import React from "react";
import "./About.css";

import { Typography } from "@material-ui/core";

export default function About() {
  return (
    <div className="container">
      <div className="about-container">
        <Typography variant="overline">
          <h2>Carrito Simple (React - Redux)</h2>
        </Typography>
        <Typography variant="overline">
          Carrito usando React, Redux y Material-UI
        </Typography>
        <br />
        <Typography variant="overline">
          API de vinos{" "}
          <a
            href="https://www.globalwinescore.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            globalwinescore
          </a>
        </Typography>
      </div>
    </div>
  );
}
