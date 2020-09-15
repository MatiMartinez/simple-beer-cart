import React, { useEffect } from "react";
import { Container, Grid, Button, Box } from "@material-ui/core";
import VinoCard from "./VinoCard";

// Redux
import {
  agregarVinoAction,
  getVinosAction,
} from "../../redux/actions/vinosActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";

export default function Home() {
  // Redux
  const dispatch = useDispatch();

  function agregarVino(vino) {
    dispatch(agregarVinoAction(vino));
  }

  function onClickAgregar(vino) {
    agregarVino(vino);
  }

  useEffect(() => {
    function getVinos() {
      dispatch(getVinosAction());
    }
    getVinos();
  }, []); //eslint-disable-line

  const vinos = useSelector((state) => state.vinos.vinos);

  const cargando = useSelector((state) => state.vinos.loading);

  return (
    <Container className="container">
      <Box className="box-title">
        <h2>NUESTROS VINOS</h2>
        <h4>Lista de vinos</h4>
      </Box>
      <Grid container spacing={4}>
        {cargando === true ? (
          <Loading />
        ) : (
          vinos.length !== 0 &&
          vinos.map((vino, index) => (
            <Grid item xs={3} key={index}>
              <VinoCard vino={vino}>
                <Button
                  className="btn-add"
                  onClick={() => onClickAgregar(vino)}
                >
                  Agregar
                </Button>
              </VinoCard>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
