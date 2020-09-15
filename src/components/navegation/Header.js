import React from "react";
import "./Header.css";

import LocalBarIcon from "@material-ui/icons/LocalBar";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";

import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

export default function Header() {
  const cantidadEnCarro = useSelector(
    (state) => state.vinos.vinosEnCarro.length
  );

  return (
    <AppBar position="static" color="secondary">
      <Toolbar className="nav">
        <Link className="link-unstyled" to="/">
          <IconButton edge="start">
            <LocalBarIcon fontSize="large" color="inherit" />
          </IconButton>
        </Link>
        <Typography variant="h6"></Typography>
        <Box className="nav-links">
          <Link className="link-unstyled" to="/carrito">
            <Button color="inherit">
              <ShoppingCartSharpIcon className="cart-icon" /> [{cantidadEnCarro}
              ]
            </Button>
          </Link>
          <Link className="link-unstyled" to="/about">
            <Button color="inherit">About</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
