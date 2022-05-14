import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../../services/AuthContext";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import SideNavigation from "../../components/sideNavigation";
// import Routes from '../../components/Routes'

import DashboardPage from "../Dashboard";
// import ProfilePage from "./ProfilePage";
import TablesPage from "./TablesPage";
// import HomePage from './HomePage'
// import Routes from "../Routes"

export default function HomePage(){
  const [setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    // setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div className="flexible-content">
        <SideNavigation />
        <main id="content" className="p-5">
          <DashboardPage/>
          {/* <Switch> */}
            {/* <Route path="/" exact component={HomePage} /> */}
            {/* <Route path="/dashboard" component={DashboardPage} /> */}
            {/* <Route path="/profile" component={ProfilePage} /> */}
            {/* <Route path="/tables" component={TablesPage} /> */}
          {/* </Switch> */}
          {/* <Routes /> */}
        </main>
      </div>
      <div className="w-100 text-center mt-2">
        {/* <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button> */}
      </div>
    </>
  );
}
