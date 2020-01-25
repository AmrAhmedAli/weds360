import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/Home";
import categories from "./pages/Categories";
import images from "./pages/Images";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div className="home-wrapper">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/images" component={images} />
          <Route exact path="/categories" component={categories} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
