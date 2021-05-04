import { React, useState } from "react";
import styled from "styled-components/macro";
import emailjs from "emailjs-com";

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
      <div>
        <button className="submitButton" type="submit" value="Send">
          Submit
        </button>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  height: auto;
  border-radius: 20px;
  padding: 20px;
  background-color: red;
  label {
    font-size: 1.5rem;
  }
  input {
    height: 3em;
    width: 100%;
  }
  textarea {
    height: 6em;
    width: 100%;
  }
  button {
    /* flex: 0 100% 100px; */
    width: 300px;
    height: 3em;
    border-radius: 20px;
    text-transform: uppercase;

    &:hover {
      background-color: greenyellow;
    }
  }
`;

export default FormContact;
