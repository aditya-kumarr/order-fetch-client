import React, { useContext } from "react";
import OrderResultContainer from "../components/OrderResultContainer";
import QueryDate from "../components/QueryDate";
import { Page, PageContainer } from "../styles";
import { OrderContext } from "../contexts/OrderContext";

const FindName = () => {
  const { orders } = useContext(OrderContext);
  return (
    <>
      <Page>
        <PageContainer>
          <QueryDate />
          <OrderResultContainer orders={orders} />
        </PageContainer>
      </Page>
    </>
  );
};

export default FindName;
