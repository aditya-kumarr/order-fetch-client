import styled from "styled-components";
import QueryName from "./components/QueryName";
import ResultContainer from "./components/UserResultContainer";
import OrderState from "./contexts/OrderContext";
import UserState from "./contexts/UserContext";
import GlobalStyles from "./GlobalStyles.style";
import Router from "./Router";
function App() {
  // A serch bar for seraching for users
  // A serch bar for seraching for orders
  // A container for lists of userData or order Data
  // when clicked on an a result show more information on a different page.
  return (
    <AppComponent>
      <UserState>
        <OrderState>
          <GlobalStyles />

          <Router />
        </OrderState>
      </UserState>
    </AppComponent>
  );
}
const AppComponent = styled.div`
  max-width: 100vw;
  min-height: 120vh;
  background-color: #181931;
  padding: 3em 0;
  overflow-y: hidden;
`;
export default App;
