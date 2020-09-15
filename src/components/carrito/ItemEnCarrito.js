import React from "react";

import { Typography } from "@material-ui/core";

export default function ItemEnCarrito(props) {
  const { vino } = props;

  return (
    <div className="item-on-cart">
      <div>
        <Typography variant="h6">{vino.wine}</Typography>
        <Typography variant="overline" color="textSecondary">
          {vino.appellation} - {vino.country}
        </Typography>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
