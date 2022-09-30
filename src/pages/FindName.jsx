import React from "react";
import QueryName from "../components/QueryName";
import UserResultContainer from "../components/UserResultContainer";
import { Page, PageContainer } from "../styles";

const FindName = () => {
  return (
    <>
      <Page>
        <PageContainer>
          <QueryName />
          <UserResultContainer />
        </PageContainer>
      </Page>
    </>
  );
};

export default FindName;
