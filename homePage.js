import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the E-Commerce App</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo
        euismod enim, eu vulputate erat fermentum ut. Maecenas quis massa at
        eros commodo mollis vel non ex.
      </p>
      <Link to="/shop">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={App} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
