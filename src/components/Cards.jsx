import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Container,
  Label,
  Input,
  FormGroup,
  Button,
} from "reactstrap";
import {
  FiberManualRecord,
  KeyboardDoubleArrowRightOutlined,
} from "@mui/icons-material";
import svg1 from "../assets/svgs/svg1.svg";
import svg2 from "../assets/svgs/svg2.svg";
import svg3 from "../assets/svgs/svg3.svg";
import { Eye } from "iconsax-react";
import Chart from "./Chart";

function addCommasToInteger(number) {
  // Convert the number to a string
  const numberString = number.toString();

  // Use regular expressions to add commas
  // This regex adds a comma every three digits from the right
  const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedNumber;
}

export function Cards(props) {
  const [selectedOption, setSelectedOption] = useState("");

  // Define a function to handle changes in the select element
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

 

  const numRows = props.numRows || 2; // Default to 2 rows if numRows prop is not provided

  return (
    <Card className="m-2 mx-0 p-2 bg-light border-0">
      <div className="card-inner bg-secondary p-3">
        <Row>
          <Col xs={6} className="pe-0" >
            <span className="text-muted label">
              {props.title ? props.title : "Total Transfer"}
            </span>
          </Col>
          <Col xs={6}>
            <FormGroup>
              <Input
                className="border-0 card-select"
                type="select"
                name="select"
                id="exampleSelect"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                {numRows <= 2 && (
                <option value="">Today</option>
                )}
                {numRows >= 3 && (
                <option value="">More</option>
                )}
                
              </Input>
            </FormGroup>
          </Col>
        </Row>

        {/* Render rows based on the number of rows specified */}
        {numRows >= 2 && (
          <Row className="daily-figures">
            <Col xs={6}>
              {props?.indicator && (
                <span className="label-indicator-container">
                  <FiberManualRecord
                    className="label-indicators me-2"
                    style={{ color: `${props.indicator1}` }}
                  />
                </span>
              )}
              <span className="figures-label text-muted">
                {props.figureLabel1 || "Figure Label 1"}
              </span>
              <p className="figures text-primary">
              {props?.currency1 ? "₦" : null}
                {props.figure1 ? addCommasToInteger(props.figure1) : "500"}
              </p>
            </Col>

            <Col xs={6}>
            {props?.indicator && (
                <span className="label-indicator-container">
                  <FiberManualRecord
                    className="label-indicators me-2"
                    style={{ color: `${props.indicator2}` }}
                  />
                </span>
              )}
              <span className="figures-label text-muted">
                {props.figureLabel2 || "Figure Label 2"}
              </span>
              <p className="figures text-primary">
              {props?.currency2 ? "₦" : null}
                {props.figure2 ? addCommasToInteger(props.figure2) : "200"}
              </p>
            </Col>
          </Row>
        )}

        {numRows === 3 && (
          <Row className="daily-figures">
            <Col xs={6}>
              <span className="figures-label text-muted">
                {props.figureLabel3 || "Figure Label 4"}
              </span>
              <p className="figures text-primary">
                ₦{props.figure3 ? addCommasToInteger(props.figure3) : "300"}
              </p>
            </Col>
            <Col xs={6}>
              <span className="figures-label text-muted">
                {props.figureLabel4 || "Figure Label 4"}
              </span>
              <p className="figures text-primary">
                ₦{props.figure4 ? addCommasToInteger(props.figure4) : "300"}
              </p>
            </Col>
          </Row>
        )}
      </div>
    </Card>
  );
}

export function ViewDetailsCards(props) {
  return (
    <Card className="m-2 mx-0 p-2 bg-light border-0">
      <div className="card-inner bg-secondary p-3">
        <Row>
          <Col xs={12} className="pe-0">
            <span className="text-muted label">
              {props.title ? props.title : "Total Savings Balance"}
            </span>
          </Col>
          <Col xs={12}>
            <strong className="figures text-primary">
              {props?.currency ? "₦" : null}
              {props.figure ? addCommasToInteger(props.figure) : "300"}
            </strong>
          </Col>
        </Row>
      </div>
      <p className="figures text-primary p-2">
        <Link className="text-primary figures-label" to="#">
          View details <KeyboardDoubleArrowRightOutlined />{" "}
        </Link>
      </p>
    </Card>
  );
}
export function ChartCards(props) {
  return (
    <Card className="m-2 mx-0 p-3 bg-light border-0 charts-card">
      <Row>
        <Col md={6}>
          <div>
            <span className="text-dark figures-label">
              {props.title ? props.title : "Total Savings Balance"}
            </span>
          </div>
          <div>
            <div className=" gx-0">
              <div>
                <div className="d-flex align-items-center">
                  <span className="label-indicator-container">
                    <FiberManualRecord
                      className="label-indicators me-2"
                      style={{ color: `${props.color1}` }}
                    />
                  </span>

                  <div className="flex-nowrap indicator-label">
                    {props.figureLabel1}
                  </div>
                </div>
                <strong className="figures text-dark">
                  {props?.currency ? "₦" : null}
                  {props.figure1 ? addCommasToInteger(props.figure1) : "3000000"}
                </strong>
              </div>

              <div className="divider my-2"></div>

              <div className="row">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <span className="label-indicator-container">
                      <FiberManualRecord
                        className="label-indicators me-2"
                        style={{ color: `${props.color2}` }}
                      />
                    </span>

                    <div className="flex-nowrap indicator-label">
                      {props.figureLabel2}
                    </div>
                  </div>
                  <strong className="figures text-dark">
                    {props?.currency ? "₦" : null}
                    {props.figure2 ? addCommasToInteger(props.figure2) : "3000000"}
                  </strong>
                </div>

                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <span className="label-indicator-container">
                      <FiberManualRecord
                        className="label-indicators me-2"
                        style={{ color: `${props.color3}` }}
                      />
                    </span>

                    <div className="flex-nowrap indicator-label">
                      {props.figureLabel3}
                    </div>
                  </div>
                  <strong className="figures text-dark">
                    {props?.currency ? "₦" : null}
                    {props.figure3 ? addCommasToInteger(props.figure3) : "3000000"}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <Chart
            label1={props.label1}
            figure1={props.figure1} // Replace with your actual value
            color1={props.color1} // Replace with your desired color
            label2={props.label2}
            figure2={props.figure2} // Replace with your actual value
            color2={props.color2} // Replace with your desired color
            label3={props.label3}
            figure3={props.figure3} // Replace with your actual value
            color3={props.color3} // Replace with your desired color
          />
        </Col>
      </Row>
    </Card>
  );
}

export function BlueCard(props) {
  return (
    <Card className="m-2 mx-0 p-4 bg-primary border-0 ">
      <div className="blue-card">
        <Row>
          <Col xs={12}>
            <span className="figures-label">
              {props.title ? props.title : "WalletBalance"}
            </span>
          </Col>
          <Col xs={12} className="d-flex align-items-center">
            <strong className="figures">
              ₦{props.figure ? addCommasToInteger(props.figure) : "300"}
            </strong>
            <Eye className="text-white ms-2" />
          </Col>
        </Row>

        <image className="svg1" src={svg1} alt="vectors" />
        <image className="svg2" src={svg2} alt="vectors" />
        <image className="svg3" src={svg3} alt="vectors" />

        <Row className="mt-3">
          <Col xs={6}>
            <Button className="btn-light w-100 w-md-100">{props.button1}</Button>
          </Col>
          <Col xs={6}>
            <Button className="btn-light w-100">{props.button2}</Button>
          </Col>
        </Row>
      </div>
    </Card>
  );
}