import "./App.css";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./Components/NavBar/Navbar.js";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import styled from "styled-components/macro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <LandingPage />
        <About />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
