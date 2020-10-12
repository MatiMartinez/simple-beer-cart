import React, { useEffect } from "react";
import { Container, Grid, Button, Box } from "@material-ui/core";
import CervezaCard from "./CervezaCard";

// Redux
import {
  agregarCervezaAction,
  getCervezasAction,
} from "../../redux/actions/cervezaActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";

export default function Home() {
  // Redux
  const dispatch = useDispatch();

  function agregarCerveza(cerveza) {
    dispatch(agregarCervezaAction(cerveza));
  }

  function onClickAgregar(cerveza) {
    const { id, name, image_url, tagline, ibu, abv } = cerveza;
    agregarCerveza({ id, name, image_url, tagline, ibu, abv });
  }

  useEffect(() => {
    function getCervezas() {
      dispatch(getCervezasAction());
    }
    getCervezas();
  }, []); //eslint-disable-line

  const cervezas = useSelector((state) => state.cervezas.cervezas);

  const cargando = useSelector((state) => state.cervezas.loading);

  return (
    <Container className="container">
      <Box className="box-title">
        <h2>NUESTROS PRODUCTOS</h2>
        <h4>Cervezas</h4>
      </Box>
      <Grid container spacing={4}>
        {cargando === true ? (
          <Loading />
        ) : (
          cervezas.length !== 0 &&
          cervezas.map((cerveza, index) => (
            <Grid item xs={3} key={index}>
              <CervezaCard cerveza={cerveza}>
                <Button
                  className="btn-add"
                  onClick={() => onClickAgregar(cerveza)}
                >
                  Agregar
                </Button>
              </CervezaCard>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
