import React, { useState } from "react";
import { ListItem } from "../styles";
import OrderResultContainer from "./OrderResultContainer";

const User = ({ user }) => {
  const [show, setShow] = useState(false);
  const capitalize = (str = "") => {
    str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      <ListItem
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        <div>
          {capitalize(user.firstName)} {capitalize(user.lastName)}
        </div>
        <div>{user.customerId}</div>
        <div>{user.orders.length}</div>
      </ListItem>
      {show && <OrderResultContainer orders={user.orders} />}
    </>
  );
};

export default User;
