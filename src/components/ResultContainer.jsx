import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { CardView } from "../styles";

const ResultContainer = () => {
  const { users } = useContext(UserContext);
  const noRes = users.length > 0;
  const serachResults = () => {
    return users.map((user, index) => (
      <User key={index}>
        <div>
          {user.firstName} {user.lastName}
        </div>
        <div>{user.customerId}</div>
        <div>bruh</div>
      </User>
    ));
  };
  if (users.length > 0) {
    return (
      <Container>
        <Heading>
          {" "}
          <div>
            <strong>Name: </strong>
          </div>
          <div>
            <strong>CustomerId: </strong>
          </div>
          <div>
            <strong>Orders:</strong>
          </div>
        </Heading>
        {serachResults()}
      </Container>
    );
  }
};

const Container = styled(CardView)`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  padding: 1em;
  min-width: 100%;
  height: 100%;
  gap: 0.5em;
`;

const Heading = styled(CardView)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5em 1.5em;
  & > * {
    width: 100%;
  }
  & > *:nth-child(2),
  & > *:nth-child(3) {
    display: flex;
    justify-content: center;
  }
`;

const User = styled(CardView)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1.5em;
  cursor: pointer;
  & > * {
    width: 100%;
  }
  & > *:nth-child(2),
  & > *:nth-child(3) {
    display: flex;
    justify-content: center;
  }
`;

export default ResultContainer;
