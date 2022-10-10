import { Row, Col } from "reactstrap";
import Audience from "../app/assets/img/Audience.jpg";
import DatesList from "../features/dates/DatesList";

const Shows = () => {
  return (
    <Row id="Shows">
      <Col className="background" md="7" xs="12">
        <img src={Audience} alt="host" className="showsPic" />
        <h1 className="contentShows">Upcoming Shows</h1>
      </Col>
      <Col className="dates" md="5" xs="12">
      <DatesList/>
      </Col>
      <hr />
    </Row>
  );
};

export default Shows;
