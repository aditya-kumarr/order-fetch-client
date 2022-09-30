import React from "react";
import { ListContainer, ListHeading, ListItem } from "../styles";
const OrderResultContainer = ({ orders }) => {
  const serachResults = () => {
    return orders.map((order, index) => (
      <ListItem key={index}>
        <div>{order.orderID}</div>
        <div>{order.amount}</div>
        <div>{order.date.substring(0, 10)}</div>
      </ListItem>
    ));
  };
  if (orders.length > 0) {
    return (
      <>
        <ListContainer>
          <ListHeading>
            <div>
              <strong>OrderID: </strong>
            </div>
            <div>
              <strong>Amount: </strong>
            </div>
            <div>
              <strong>Date:</strong>
            </div>
          </ListHeading>
          {serachResults()}
        </ListContainer>
      </>
    );
  }
};

export default OrderResultContainer;
