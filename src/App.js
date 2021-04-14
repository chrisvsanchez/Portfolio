import "./App.css";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./Components/NavBar/Navbar.js";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
// import styled from "styled-components/macro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <LandingPage />
        <About />
        <Projects />
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
