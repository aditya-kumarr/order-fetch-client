import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { OrderContext } from "../contexts/OrderContext";
import {
  InputForm,
  SubmitButton,
  SearchBox,
  NavigationButton,
} from "../styles";
const QueryDate = () => {
  const [query, setQuery] = useState("");
  const { setOrders } = useContext(OrderContext);

  const QueryHandler = async (e) => {
    e.preventDefault();
    const jsonRes = await fetch(
      "https://orders-fetch-server.onrender.com/api/orders",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: query }),
      }
    );
    const res = await jsonRes.json();
    setOrders(res);
  };

  return (
    <>
      <NavigationButton to={"/"}>Serach by firstName</NavigationButton>
      <InputForm onSubmit={QueryHandler}>
        <SearchDateBox
          value={query}
          onChange={(e) => setQuery(e.target.value.toString())}
        />
        <SubmitButton>Find</SubmitButton>
      </InputForm>
    </>
  );
};

const SearchDateBox = styled(SearchBox).attrs({ type: "date" })`
  position: relative;
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    font-size: 3rem;
    background-color: transparent;
    right: 10px;
    margin-left: auto;
    cursor: pointer;
  }
`;

export default QueryDate;
