import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { InputForm, SearchBox, SubmitButton } from "../styles";

const QueryName = () => {
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
    setQuery("");
    setUsers(res);
  };

  return (
    <InputForm onSubmit={QueryHandler}>
      <SearchBox
        placeholder="Enter first name.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SubmitButton>Find</SubmitButton>
    </InputForm>
  );
};

export default QueryName;
