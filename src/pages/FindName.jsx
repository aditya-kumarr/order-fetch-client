import React from "react";
import QueryName from "../components/QueryName";
import UserResultContainer from "../components/UserResultContainer";
import { PageContainer } from "../styles";

const FindName = () => {
  return (
    <>
      <PageContainer>
        <QueryName />
        <UserResultContainer />
      </PageContainer>
    </>
  );
};

export default FindName;
