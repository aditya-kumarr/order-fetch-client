import React, { useState } from "react";
import { ListItem } from "../styles";
import OrderResultContainer from "./OrderResultContainer";

const User = ({ user }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ListItem
        onClick={() => {
          setShow((prev) => !prev);
          console.log("clicked");
        }}
      >
        <div>
          {user.firstName} {user.lastName}
        </div>
        <div>{user.customerId}</div>
        <div>{user.orders.length}</div>
      </ListItem>
      {show && <OrderResultContainer orders={user.orders} />}
    </>
  );
};

export default User;
