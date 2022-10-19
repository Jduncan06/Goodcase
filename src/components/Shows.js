import { Row, Col } from "reactstrap";
import Standup from "../app/assets/img/Standup.jpg";
import ShowDates from "./ShowDates";

const Shows = () => {
  return (
    <Row id="Shows">
      <Col className="background" md="5" xs="12">
        <img src={Standup} alt="standup" className="showsPic" />
        <h1 className="contentShows">Tour</h1>
      </Col>
      <Col className="dates" md="7" xs="12">
        <ShowDates />
      </Col>
      <hr />
    </Row>
  );
};

export default Shows;
