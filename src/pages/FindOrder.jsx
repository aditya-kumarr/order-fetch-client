import React, { useContext } from "react";
import OrderResultContainer from "../components/OrderResultContainer";
import QueryDate from "../components/QueryDate";
import { PageContainer } from "../styles";
import { OrderContext } from "../contexts/OrderContext";

const FindName = () => {
  const { orders } = useContext(OrderContext);
  return (
    <>
      <PageContainer>
        <QueryDate />
        <OrderResultContainer orders={orders} />
      </PageContainer>
    </>
  );
};

export default FindName;
