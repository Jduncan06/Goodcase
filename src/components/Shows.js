import { Row, Col } from "reactstrap";
import Host from "../app/assets/img/Host.JPG";
import DatesList from "../features/dates/DatesList";
const Shows = () => {
  return (
    <Row id="Shows">
      <Col className="background" md="6" xs="12">
        <img src={Host} alt="host" className="showsPic" />
        <h1 className="contentShows">Upcoming Shows</h1>
      </Col>
      <Col className="dates" md="6" xs="12">
        <DatesList />
      </Col>
      <hr />
    </Row>
  );
};

export default Shows;
