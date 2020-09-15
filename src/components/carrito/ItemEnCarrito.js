import React from "react";

import { Typography } from "@material-ui/core";

export default function ItemEnCarrito(props) {
  const { cerveza } = props;

  return (
    <div className="item-on-cart">
      <div className="item-on-cart">
        <div style={{ marginRight: "20px" }}>
          <img src={cerveza.image_url} alt="beer-img" className="cerveza-img" />
        </div>
        <div>
          <Typography variant="h6">{cerveza.name}</Typography>
          <Typography variant="overline" color="textSecondary">
            IBU {cerveza.ibu} - ABV {cerveza.abv}
          </Typography>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
