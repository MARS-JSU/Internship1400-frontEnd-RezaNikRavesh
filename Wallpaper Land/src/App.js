import AllWallPapers from "./pages/AllWallPapers";
import Favorites from "./pages/Favorites";
import AboutUs from "./pages/About-us";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllWallPapers />
        </Route>
        <Route path="/Favorites">
          <Favorites />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
