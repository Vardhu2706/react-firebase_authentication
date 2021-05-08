// Importing Helpers
import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../Contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing Components
import SignUp from "./SignUp";
import DashBoard from "./DashBoard";
import Login from "./Login";

// Functional Component
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={DashBoard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

// Default Export
export default App;
