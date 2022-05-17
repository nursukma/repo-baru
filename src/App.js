import "./index.css";
import React from "react";
import { AuthProvider } from "./services/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import PrivateRoute from "./components/PrivateRoute";

import DashboardPage from "./components/Dashboard";
import ProfilePage from "./components/pages/ProfilePage";
import TablesPage from "./components/pages/TablesPage";
import PrintPage from "./components/pages/PrintPage";
import SideNavigation from "./components/sideNavigation";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <div className="flexible-content">
            <SideNavigation />
            <main id="content" className="p-5">
              <PrivateRoute path="/dashboard" component={DashboardPage} />
              <PrivateRoute path="/inputs" component={ProfilePage} />
              <PrivateRoute path="/dataTables" component={TablesPage} />
              <PrivateRoute path="/print" component={PrintPage} />
            </main>
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
