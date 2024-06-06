import { Row, Col } from "reactstrap";
import ShowDates from "./ShowDates";
import HatRyan from "../app/assets/headshots/hat_ryan.jpeg";




const Shows = () => {
  return (
    <Row id="Shows" className="min-vh-100 d-flex align-items-center">
      <Col className="background d-flex flex-column justify-content-center" md="5" xs="12">
        <img src={HatRyan} alt="Hat Ryan" className="showsPic" />
        <h1 className="contentShows">Tour</h1>
      </Col>
      <Col className="dates d-flex flex-column justify-content-center align-items-center" md="7" xs="12">
        <ShowDates />
      </Col>
      <hr />
    </Row>
  );
};

export default Shows;
