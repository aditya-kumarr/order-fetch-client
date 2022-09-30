import styled from "styled-components";
import QueryName from "./components/QueryName";
import ResultContainer from "./components/ResultContainer";
import UserState from "./contexts/UserContext";
import GlobalStyles from "./GlobalStyles.style";
function App() {
  // A serch bar for seraching for users
  // A serch bar for seraching for orders
  // A container for lists of userData or order Data
  // when clicked on an a result show more information on a different page.
  return (
    <AppComponent>
      <UserState>
        <GlobalStyles />
        <QueryName />
        <ResultContainer />
      </UserState>
    </AppComponent>
  );
}
const AppComponent = styled.div`
  max-width: 100vw;
  min-height: 120vh;
  background-color: #181931;
  padding: 3em;
  overflow-y: hidden;
`;
export default App;
