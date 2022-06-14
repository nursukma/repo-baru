import React, { useState } from "react";
import logo from "../assets/model.jpg";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBNavLink } from "mdbreact";
import { NavLink } from "react-router-dom";
import { useAuth } from "../services/AuthContext";
import { useHistory } from "react-router-dom";

const TopNavigation = () => {

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
    <div className="sidebar-fixed position-fixed">
      <a href="#!" className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
        <NavLink exact={true} to="/dashboard" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="chart-pie" className="mr-3" />
            Dashboard
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/inputs" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="question-circle" className="mr-3" />
            Input Data
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/dataTables" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="table" className="mr-3" />
            Tables Data
          </MDBListGroupItem>
        </NavLink>
        {/* <MDBNavLink to="/login" activeClassName="activeClass" onClick={handleLogout}> */}
          <MDBListGroupItem onClick={handleLogout}>
            <MDBIcon icon="sign-out-alt" className="mr-3" />
            Logout
          </MDBListGroupItem>
        {/* </MDBNavLink> */}
      </MDBListGroup>
    </div>
  );
};

export default TopNavigation;
