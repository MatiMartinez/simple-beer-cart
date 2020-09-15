import React from "react";
import { Container, Box, Grid, IconButton } from "@material-ui/core";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import ItemEnCarrito from "./ItemEnCarrito";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { quitarVinoAction } from "../../redux/actions/vinosActions";

export default function Carrito() {
  const dispatch = useDispatch();

  const vinosEnCarrito = useSelector((state) => state.vinos.vinosEnCarro);

  function quitarVino(index) {
    dispatch(quitarVinoAction(index));
  }

  return (
    <Container className="container">
      <Box className="box-title mb">
        <h2>CARRITO</h2>
      </Box>
      <Container className="body-carrito">
        <Grid container spacing={3}>
          {vinosEnCarrito.length === 0 ? (
            <div className="vacio-container">Tu carro esta vacío</div>
          ) : (
            vinosEnCarrito.map((vino, index) => (
              <Grid item xs={12} key={index}>
                <ItemEnCarrito vino={vino}>
                  <IconButton
                    className="btn-delete"
                    onClick={() => quitarVino(index)}
                  >
                    <DeleteForeverSharpIcon />
                  </IconButton>
                </ItemEnCarrito>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Container>
  );
}
