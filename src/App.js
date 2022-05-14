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
              <Route path="/" exact component={HomePage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/inputs" component={ProfilePage} />
              <Route path="/dataTables" component={TablesPage} />
              <Route path="/print" component={PrintPage} />
            </main>
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
