import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/example" component={Example}></Route>
          <Route path="/" component={LandingPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
