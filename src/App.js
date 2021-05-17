import "./App.css";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./Components/NavBar/Navbar.js";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import styled from "styled-components/macro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavLandingWrapper>
          <NavBar />
          <LandingPage />
        </NavLandingWrapper>
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </Router>
      <GlobalStyles />
    </>
  );
}
const NavLandingWrapper = styled.div`
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;
export default App;
