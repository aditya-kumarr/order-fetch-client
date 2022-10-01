import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { InputForm, NavigationButton, SearchBox, SubmitButton } from "../styles";

const QueryName = () => {
  const [query, setQuery] = useState("");
  const { setUsers } = useContext(UserContext);

  const QueryHandler = async (e) => {
    e.preventDefault();
    const jsonRes = await fetch("https://orders-fetch-server.onrender.com/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: query }),
    });
    const res = await jsonRes.json();
    setQuery("");
    setUsers(res);
  };

  return (
    <>
      <NavigationButton to={"/orders"}>Serach By Date</NavigationButton>
      <InputForm onSubmit={QueryHandler}>
        <SearchBox
          placeholder="Enter first name.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SubmitButton>Find</SubmitButton>
      </InputForm>
    </>
  );
};



export default QueryName;
