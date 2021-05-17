import { React, useState } from "react";
import styled from "styled-components/macro";
import QUERIES from "../Constants";
import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Wrapper>
      <h3>CvS</h3>
      <ul className="nav-links">
        <li>
          <Link ClassName="anchorLink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link ClassName="anchorLink" to="/">
            About
          </Link>
        </li>
        <li>
          <Link ClassName="anchorLink" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link ClassName="anchorLink" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #0093e9; */
  background-image: none;
  /* background-color: lightblue; */
  height: auto;
  h3 {
    font-weight: 600;
    padding-left: 17px;
    font-size: 2rem;
  }
  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    gap: 50px;
    padding: 20px;
    list-style: none;
    font-size: 1.2rem;
    text-decoration: none;
  }

  a {
    display: block;
    text-decoration: none;
    color: black;
    &:hover {
      color: deeppink;
    }
  }
  @media ${QUERIES.laptopAndDown} {
  }
  @media ${QUERIES.tabletAndDown} {
  }
  @media ${QUERIES.mobileAndDown} {
    .nav-links {
      display: none;
    }
    h3 {
      padding: 17px;
    }
  }
`;

export default Navbar;
