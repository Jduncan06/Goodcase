import { Row, Col } from "reactstrap";
import Standup from "../app/assets/img/Standup.jpg";
import ShowDates from "./ShowDates";
import { useMediaQuery } from 'react-responsive';



const Shows = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const fullHeightStyle = isDesktop ? { height: '100vh' } : {};

  return (
    <Row id="Shows" className="min-vh-100 align-items-stretch">
      <Col className="background d-flex flex-column justify-content-center" md="5" xs="12">
        <img src={Standup} alt="standup" className="showsPic" />
        <h1 className="contentShows">Tour</h1>
      </Col>
      <Col className="dates d-flex flex-column justify-content-center align-items-center" md="7" xs="12"
        style={fullHeightStyle}
      >
        <ShowDates />
      </Col>
      <hr />
    </Row>
  );
};

export default Shows;
