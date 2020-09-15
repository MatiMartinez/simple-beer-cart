import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// MUI
import { StylesProvider } from "@material-ui/core/styles";

// Components
import Header from "./components/navegation/Header";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Carrito from "./components/carrito/Carrito";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <Provider store={store}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/carrito" component={Carrito} />
          </Switch>
        </Provider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
