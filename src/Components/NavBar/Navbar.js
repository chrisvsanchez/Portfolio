import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Wrapper>
      <h3>Chris V Sanchez</h3>
      <ul className="nav-links">
        <li>
          <Link ClassName="anchorLink" to="/">
            Home
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
  background-color: lightblue;
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
`;

export default Navbar;
