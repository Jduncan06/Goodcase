import { Row, Col, Button } from "reactstrap";
import Host from "../app/assets/img/Host.JPG";
const Shows = () => {
  return (
    <div id="Shows">
      <Row>
        <Col className="background">
          <img src={Host} alt="host" className="showsPic" />
          <h1 className="me-auto contentShows">Upcoming Shows</h1>
        </Col>
        <Col className="dates">
          <div my="3">
            Date 1 <Button>Buy Tickets</Button>
          </div>
          <hr />

          <div my="3">
            Date 2 <Button>Buy Tickets</Button>
          </div>
          <hr />

          <div my="3">
            Date 3 <Button>Buy Tickets</Button>
          </div>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Shows;
