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
          Carrito usando React, Redux y Material-UI -{" "}
          <a
            href="https://github.com/MatiMartinez/simple-beer-cart"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo Github
          </a>
        </Typography>
        <br />
        <Typography variant="overline">
          API de Cervezas{" "}
          <a
            href="https://www.punkapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PUNK API
          </a>
        </Typography>
      </div>
    </div>
  );
}
