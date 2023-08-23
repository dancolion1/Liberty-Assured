import React from "react";
import {
  BlueCard,
  Cards,
  ChartCards,
  ViewDetailsCards,
} from "../components/Cards";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../components/Sidebar";
import NavbarComponent from "../components/Navbar";

export default function Dashboard() {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col className="d-none d-md-block p-0 m-0" md={2} lg={2}>
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col sm={12} md={10} lg={10} className="content p-4">
          <Container fluid className="main-content">
            <NavbarComponent />
            <Row className="p-1">
              <Col xlg={3} md={6} lg={3} sm={12}>
                <BlueCard
                  title="Wallet Balance"
                  figure={50000.00}
                  button1="Add Fund"
                  button2="Withdraw"
                />
              </Col>
              <Col xlg={3} md={6} lg={3} sm={12}>
                <ViewDetailsCards
                  title="Total Savings Balance"
                  figure="194,000"
                  currency={true}
                />
              </Col>
              <Col xlg={3} md={6} lg={3} sm={12}>
                <ViewDetailsCards
                  title="Total Customers"
                  figure={919}
                  currency={true}
                />
              </Col>
              <Col xlg={3} md={6} lg={3} sm={12}>
                <ViewDetailsCards
                  title="Total POS"
                  figure={0}
                  currency={false}
                />
              </Col>



              <Col xlg={3} md={6} lg={3} sm={12}>
                <Cards
                  numRows={3}
                  title="Total Transfer"
                  figureLabel1="Today"
                  figureLabel2="Yesterday"
                  figureLabel3="This Week"
                  figureLabel4="Last Week"
                  figure1={500}
                  figure2={200}
                  figure3={500}
                  figure4={200}
                />
              </Col>
              <Col xlg={3} md={6} lg={3} sm={12}>
                <Cards
                  numRows={3}
                  title="Total Inflow"
                  figureLabel1="Today"
                  figureLabel2="Yesterday"
                  figureLabel3="This Week"
                  figureLabel4="Last Week"
                  figure1={2000000}
                  figure2={5000000}
                  figure3={5000000}
                  figure4={5000000}
                />
              </Col>
              <Col xlg={3} md={6} lg={3} sm={12}>
                <Cards
                  numRows={3}
                  title="Total Transactions"
                  figureLabel1="Today"
                  figureLabel2="Yesterday"
                  figureLabel3="This Week"
                  figureLabel4="Last Week"
                  figure1={2000000}
                  figure2={5000000}
                  figure3={5000000}
                  figure4={5000000}
                />
              </Col>
              <Col xlg={3} md={6} lg={3} sm={12}>
                <Cards
                  numRows={3}
                  title="Total Count"
                  figureLabel1="Today"
                  figureLabel2="Yesterday"
                  figureLabel3="This Week"
                  figureLabel4="Last Week"
                  figure1={2000000}
                  figure2={5000000}
                  figure3={5000000}
                  figure4={5000000}
                  
                />
              </Col>
              <Col xlg={3} md={6} lg={3} sm={12}>
                <Cards
                  numRows={2}
                  title="Total Cashout"
                  figureLabel1="Today"
                  figureLabel2="Yesterday"
                  figure1={422}
                  figure2={18}
                  currency1={true}
                  currency2={true}
                  
                />
              </Col>
              <Col xlg={3} md={6} lg={3} sm={12}>
                <Cards
                  numRows={2}
                  title="Transaction Status"
                  figureLabel1="Successful"
                  figureLabel2="Failed"
                  figure1={422}
                  figure2={18}
                  indicator1="#00ff00"
                  indicator2  ="#ff0000"
                  currency1={false}
                  currency2={false}
                  indicator={true}
                  
                />
              </Col>
              <Col xlg={3} md={6} lg={3} sm={12}>
                <Cards
                  numRows={2}
                  title="Average Transaction Count"
                  figureLabel1="Value"
                  figureLabel2="Count"
                  figure1={20400}
                  figure2={422}
                  currency1={true}
                  currency2={false}
                  
                />
              </Col>
              <Col xlg={3} md={6} lg={3} sm={12}>
                <Cards
                  numRows={2}
                  title="Total commission"
                  figureLabel1="POS commission"
                  figureLabel2="Lotto commission"
                  figure1={500}
                  figure2={200}
                  currency1={true}
                  currency2={true}
                  
                />
              </Col>
              <Col xlg={3} md={6} lg={3} sm={12}>
                <Cards
                  numRows={2}
                  title="Total commission"
                  figureLabel1="POS commission"
                  figureLabel2="Lotto commission"
                  figure1={87000}
                  figure2={102000}
                  currency1={true}
                  currency2={true}
                  
                />
              </Col>


              <Col lg={6} md={12} sm={12}>
                <ChartCards
                  numRows={3}
                  title="Transaction Comparative"

                  figureLabel1="Send Money"
                  figureLabel2="Cashout"
                  figureLabel3="Utilities and Bills"
                  figure1={105000000}
                  figure2={12000000}
                  figure3={4200000}
                  color1="#032282"
                  color2="#F4BE37"
                  color3="#EDE1FF"
                  currency={true}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}