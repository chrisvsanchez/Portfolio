import { React, useState } from "react";
import styled from "styled-components/macro";
import emailjs from "emailjs-com";
import QUERIES from "../Constants";
const FormContact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kb72sxx",
        "template_v8fo58n",
        e.target,
        "user_8yk2Co12K78YvjM6xp6Bq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail("");
    setName("");
    setMessage("");
  }

  return (
    <FormWrapper className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Message</label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="submitButton" type="submit" value="Send">
        Submit
      </button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  flex: 1 1 1;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  max-width: 100%;
  border-radius: 20px;
  padding: 20px;
  /* background-color: red; */
  box-shadow: 0px 2px 26px hsl(0deg 0% 0%/0.35);
  gap: 8px;
  label {
    font-size: 1.3rem;

    height: auto;
  }
  input {
    height: 3rem;
    width: 100%;
    border-radius: 20px;
    font-size: 1rem;
    padding-left: 8px;

    &:focus {
      outline: none;
      border-color: #719ece;
      box-shadow: 0 0 10px #719ece;
    }
  }
  textarea {
    height: 200px;
    border-radius: 20px;
    width: 100%;
    font-size: 1rem;
    font-family: inherit;
    resize: none;
    /* text-indent: 10px; */
    padding-left: 8px;
    &:focus {
      outline: none;
      border-color: #719ece;
      box-shadow: 0 0 10px #719ece;
    }
  }
  button {
    /* flex: 0 100% 100px; */
    align-self: center;
    width: 100%;
    height: 3rem;
    border-radius: 20px;
    text-transform: uppercase;
    box-shadow: 0px 2px 26px hsl(0deg 0% 0%/0.35);
    font-family: inherit;
    letter-spacing: 0.2rem;
    &:hover {
      background-color: greenyellow;
    }
    &:focus {
      outline: none;
      border-color: #719ece;
      box-shadow: 0 0 10px #719ece;
    }
  }
  @media ${QUERIES.laptopAndDown} {
  }
  @media ${QUERIES.tabletAndDown} {
  }
  @media ${QUERIES.mobileAndDown} {
    flex: 1 1 375px;
    width: 100%;
  }
`;

export default FormContact;
