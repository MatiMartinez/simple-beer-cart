import React from "react";

// MUI
import { Card, CardContent, Typography, CardActions } from "@material-ui/core";

export default function VinoCard(props) {
  const { vino } = props;
  return (
    <Card className="vino-card" variant="outlined">
      <CardContent className="vino-card-content">
        <Typography variant="h6" gutterBottom>
          {vino.wine}
        </Typography>
        <br />
        <Typography variant="overline" color="textSecondary">
          {vino.appellation}
        </Typography>
        <br />
        <Typography variant="caption" color="textSecondary">
          {vino.country}
        </Typography>
        <br />
        <Typography variant="caption" color="textSecondary">
          {vino.vintage} - {vino.score}
        </Typography>
      </CardContent>
      <CardActions className="vino-card-actions">{props.children}</CardActions>
    </Card>
  );
}
