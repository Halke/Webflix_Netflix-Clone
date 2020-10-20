import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Movie from "./pages/MoviePage";
import Serie from "./pages/SeriePage";
import DisplayAll from "./pages/DisplayAll";
import Person from "./pages/PersonPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />

            {/* For components below LOGIN is required. */}
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/movies/:movieId" component={Movie} />
            <ProtectedRoute exact path="/series/:serieId" component={Serie} />
            <ProtectedRoute
              exact
              path="/persons/:personId"
              component={Person}
            />
            {/* contentType in the route under should be either 'tv' or 'movie' */}
            <ProtectedRoute
              exact
              path="/all/:contentType"
              component={DisplayAll}
            />
            <ProtectedRoute exact path="/my-profile" component={ProfilePage} />
            <Route path="*" component={() => "404 PAGE NOT FOUND"} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
