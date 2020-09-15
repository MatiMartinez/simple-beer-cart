import React from "react";
import { Container, Box, Grid, IconButton } from "@material-ui/core";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import ItemEnCarrito from "./ItemEnCarrito";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { quitarCervezaAction } from "../../redux/actions/cervezaActions";

export default function Carrito() {
  const dispatch = useDispatch();

  const cervezasEnCarro = useSelector(
    (state) => state.cervezas.cervezasEnCarro
  );

  function quitarCerveza(index) {
    dispatch(quitarCervezaAction(index));
  }

  return (
    <Container className="container">
      <Box className="box-title mb">
        <h2>CARRITO</h2>
      </Box>
      <Container className="body-carrito">
        <Grid container spacing={3}>
          {cervezasEnCarro.length === 0 ? (
            <div className="vacio-container">Tu carro esta vacío</div>
          ) : (
            cervezasEnCarro.map((cerveza, index) => (
              <Grid item xs={12} key={index}>
                <ItemEnCarrito cerveza={cerveza}>
                  <IconButton
                    className="btn-delete"
                    onClick={() => quitarCerveza(index)}
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
