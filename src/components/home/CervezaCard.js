import React from "react";

// MUI
import { Card, CardContent, Typography, CardActions } from "@material-ui/core";

export default function CervezaCard(props) {
  const { cerveza } = props;
  return (
    <Card className="cerveza-card" variant="outlined">
      <div className="img-container">
        <img src={cerveza.image_url} alt="beer-img" className="cerveza-img" />
      </div>
      <CardContent className="cerveza-card-content">
        <Typography variant="h6" gutterBottom>
          {cerveza.name}
        </Typography>
        <br />
        <Typography variant="overline" color="textSecondary">
          {cerveza.tagline}
        </Typography>
        <br />
        <Typography variant="caption" color="textSecondary">
          IBU {cerveza.ibu}
        </Typography>
        <br />
        <Typography variant="caption" color="textSecondary">
          ABV {cerveza.abv}
        </Typography>
      </CardContent>
      <CardActions className="cerveza-card-actions">
        {props.children}
      </CardActions>
    </Card>
  );
}
