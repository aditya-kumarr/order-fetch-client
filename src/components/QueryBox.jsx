import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

const QueryBox = () => {
  const [query, setQuery] = useState("");
  const { setUsers } = useContext(UserContext);

  const QueryHandler = async (e) => {
    e.preventDefault();
    console.log({ name: query });
    const jsonRes = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: query }),
    });
    const res = await jsonRes.json();
    console.log(res);
    setUsers(res);
  };

  return (
    <InputForm onSubmit={QueryHandler}>
      <SeachBox value={query} onChange={(e) => setQuery(e.target.value)} />
      <SubmitButton>Find</SubmitButton>
    </InputForm>
  );
};
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  margin: 0 auto;
  width: 80%;
`;

const SeachBox = styled.input`
  font-size: 1.2rem;
  padding: 1em;
  border-radius: 10em;
  background-color: #0004;
  width: 100%;
  color: white;
`;

const SubmitButton = styled.button`
  flex-grow: none;
  border-radius: 10em;

  border: 1px solid transparent;
  padding: 0.6em 3em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: all 0.25s ease;
  color: white;
  max-width: max-content;
  border-color: #646cff;
  &:hover {
    /* background: red; */
    background-color: #646cff;
    border-color: transparent;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export default QueryBox;
