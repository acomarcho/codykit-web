import React, { useReducer } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Products from "./Products";
import Downloads from "./Downloads";
import Video from "./Video";
import Modal from "./Modal";
import Alert from "./Alert";
import ArmRobot from "./ArmRobot";
import MobileRobot from "./MobileRobot";
import ColorSorter from "./ColorSorter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

const reducer = (state, action) => {
  if (action.type === "SHOW_MODAL") {
    return { ...state, showModal: true, img: action.payload.img };
  } else if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false, img: null };
  } else if (action.type === "SHOW_ALERT") {
    return {
      ...state,
      showAlert: true,
      alertText: action.payload.alertText,
    };
  } else if (action.type === "CLOSE_ALERT") {
    return {
      ...state,
      showAlert: false,
    };
  } else if (action.type === "SHOW_ARM_VIDEO") {
    return {
      ...state,
      showModal: true,
    };
  }
};

const initialState = {
  showModal: false,
  img: null,
  showAlert: false,
  alertText: null,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Products />
        </Route>
        <Route path="/downloads">
          <Downloads dispatch={dispatch} />
        </Route>
        <Route path="/video">
          <Video />
        </Route>
        <Route path="/armrobot">
          <ArmRobot dispatch={dispatch} />
        </Route>
        <Route path="/mobilerobot">
          <MobileRobot dispatch={dispatch} />
        </Route>
        <Route path="/colorsorter">
          <ColorSorter dispatch={dispatch} />
        </Route>
      </Switch>
      <Modal dispatch={dispatch} state={state} />
      <Alert dispatch={dispatch} state={state} />
      <Footer />
    </Router>
  );
}

export default App;
