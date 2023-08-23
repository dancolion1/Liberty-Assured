import { ChevronRight, ExpandMore, Home } from "@mui/icons-material";
import { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import { CardEdit, Cards, Category2, Home2, I3Dcube, MedalStar, Radar, SecurityUser, Shop, Strongbox } from "iconsax-react";


const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  
  const toggleCollapse = () => {
    setCollapseOpen((prevState) => !prevState);
  };

  // Function to toggle the sub-menu collapse
  const toggleSubMenu = () => {
    setSubMenuOpen((prevState) => !prevState);
  };

  // Function to close all collapses
  const closeCollapse = () => {
    setCollapseOpen(false);
    setSubMenuOpen(false);
  };

  return (
    <Navbar className="sidebar navbar-vertical fixed-left mt-5" expand="md">
      <Container fluid className="p-0">
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <NavbarBrand className="pt-0 text-left">
          <h1 className="brand-title m-0 p-0">Paybox</h1>
          <span className="brand-subtitle">by LibertyPay</span>
        </NavbarBrand>

        <div className="divider"></div>

        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen} className="gx-5">
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>

          <Nav navbar className="d-flex flex-column">
            <NavItem>
              <NavLink to="#" onClick={closeCollapse}>
                <Home2 />
                Home
              </NavLink>
            </NavItem>
            <NavItem className="active">
              <NavLink to="#" onClick={closeCollapse}>
                <Category2 />
                Analytics Dashboard
              </NavLink>
            </NavItem>
    


            <div className="divider"></div>

            <NavItem>
              <NavLink to="#" onClick={toggleSubMenu}>
                <Strongbox />
                Personal
                {subMenuOpen ? (
                  <ExpandMore className="float-end m-0" />
                ) : (
                  <ChevronRight className="float-end m-0" />
                )}
              </NavLink>
              <Collapse isOpen={subMenuOpen}>
                <ul className="sub-menu">
                  <NavItem>
                    <NavLink to="#" onClick={closeCollapse}>
                      Sub-Item 1
                    </NavLink>
                  </NavItem>
                </ul>
              </Collapse>
            </NavItem>
            <NavItem>
              <NavLink to="#" onClick={closeCollapse}>
                <Shop />
                Sales Hub
                {subMenuOpen ? (
                  <ExpandMore className="float-end m-0" />
                ) : (
                  <ChevronRight className="float-end m-0" />
                )}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#" onClick={closeCollapse}>
              <I3Dcube/>
                Talent Management
                {subMenuOpen ? (
                  <ExpandMore className="float-end m-0" />
                ) : (
                  <ChevronRight className="float-end m-0" />
                )}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#" onClick={closeCollapse}>
                <CardEdit />
                Spend Management
                {subMenuOpen ? (
                  <ExpandMore className="float-end m-0" />
                ) : (
                  <ChevronRight className="float-end m-0" />
                )}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#" onClick={closeCollapse}>
                <Cards />
                Cards
              </NavLink>
            </NavItem>

            <div className="divider"></div>

            <NavItem>
              <NavLink to="#" onClick={closeCollapse}>
                <MedalStar />
                Leaderboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#" onClick={closeCollapse}>
                <SecurityUser />
                Profile & Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#" onClick={closeCollapse}>
                <Radar />
                Bank performance
                {subMenuOpen ? (
                  <ExpandMore className="float-end m-0" />
                ) : (
                  <ChevronRight className="float-end m-0" />
                )}
              </NavLink>
            </NavItem>
          </Nav>
          {/* Divider */}
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;