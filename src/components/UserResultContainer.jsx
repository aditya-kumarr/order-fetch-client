import React, { useContext } from "react";
import { CardView, ListContainer, ListHeading, ListItem } from "../styles";
import { UserContext } from "../contexts/UserContext";
import User from "./User";
const UserResultContainer = () => {
  const { users } = useContext(UserContext);
  const serachResults = () => {
    return users.map((user, index) => <User user={user} key={index} />);
  };
  if (users.length > 0) {
    return (
      <>
        <ListContainer>
          <ListHeading>
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
          </ListHeading>
          {serachResults()}
        </ListContainer>
      </>
    );
  }
};

export default UserResultContainer;
