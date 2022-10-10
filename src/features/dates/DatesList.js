import { Card, CardBody, Button, Col, Row, Container } from "reactstrap";
import { useSelector } from "react-redux";
import { selectAllShows } from "./datesSlice";
import Loading from "../../components/loading";
import Error from '../../components/Error';

export const DatesList = () => {
  const shows = useSelector(selectAllShows);
  const isLoading = useSelector((state) => state.shows.isLoading);
  const errMsg = useSelector((state) => state.shows.errMsg);

  if(isLoading){
    return(
      <Row>
        <Loading/>
      </Row>
    )
  }

  if(errMsg){
    return(
      <Row>
        <Error errMsg={errMsg}/>
      </Row>
    )
  }

  return (
    <Container className="cardContainer" style={{margin:0, padding: 0}}>
      {shows.map((show) => (
        <Card className="datesCard" styles={{ backgroundColor: "black" }}>
          <CardBody
            key='show.id'
            className="cardInfo"
            style={{ backgroundColor: "black" }}
          >
            <Row>
              <Col xs="4" className="dateTime">
                <h4>{show.date}</h4>
                <p>{show.time}</p>
              </Col>
              <Col xs="5" className="cardInfo">
                <h4 style={{fontStyle:'bold', fontWeight:700}}>{show.location}</h4>
                <p style={{fontWeight:700}}>{show.venue}</p>
              </Col>
              <Col xs="2" className="cardButton">
                <Button
                  href={show.tickets}
                  style={{ backgroundColor: "#F16A74",
                          border: 'solid 1px #F16A74'
                        }}
                >
                  Get Tickets
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default DatesList;
