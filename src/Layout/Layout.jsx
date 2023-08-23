import React from "react";
import Sidebar from "../components/Sidebar"; // Your Sidebar component
import { Container, Row, Col } from "reactstrap"; // Replace with your UI library components

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col xs="2">
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col xs="10">
          {children} {/* This is where the content of each page will be rendered */}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;