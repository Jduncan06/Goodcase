import { Row, Col, Button } from "reactstrap";
import Host from "../app/assets/img/Host.JPG";
const Shows = () => {
  return (
    <div id="Shows">
      <Row>
        <Col className="background" md="6" xs="12">
          <img src={Host} alt="host" className="showsPic" background/>
          <h1 className='contentShows'>Upcoming Shows</h1>
        </Col>
        <Col className="dates" md="6" xs="12">
          <div>
            Date 1 <Button>Buy Tickets</Button>
          </div>
          <hr />

          <div>
            Date 2 <Button>Buy Tickets</Button>
          </div>
          <hr />

          <div>
            Date 3 <Button>Buy Tickets</Button>
          </div>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Shows;
