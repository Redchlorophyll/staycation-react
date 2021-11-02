import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Example from "pages/Example";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/example" component={Example}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/properties/:id" component={DetailsPage}></Route>
          <Route path="/" component={LandingPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
