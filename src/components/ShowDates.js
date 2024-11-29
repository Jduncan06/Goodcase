import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import { useState } from "react";
import Papa from "papaparse";
import { useEffect } from "react";


const ShowDates = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
  Papa.parse(
    "https://docs.google.com/spreadsheets/d/1Ng4Rb2fhZETYA5BYg2Pjr5Zqc2FgGonxP7tvHJKz5aA/pub?output=csv",
    {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    }
  );
  })
 
  const show = Array.from(data);
  
  return (
    
    <Container style={{margin:0, padding:0}}>
      {show.map((item, i) => (
        <Card
          className="datesCard"
          style={{ border: "1px solid #4a524d", margin:0, marginBottom:'3px', marginTop:'2px', padding:0 }}>
            
          <CardBody key={i} className="cardInfo" style={{backgroundColor: "black", color:"white"}}>
          <Row>
            <Col xs='3' className='dateTime'>
              <h3 style={{textStyle:'bold', color: 'darkolivegreen', margin: 0 }}>{item.month}</h3>
              <h3 style={{margin:0, padding:0}}>{item.day}</h3>
              <p style={{margin:0, padding:0}}>{item.time}</p>
            </Col>
            <Col xs='6' className="cardInfo">
              <p>{item.venue}</p>
              <p>{item.location}</p>
            </Col>
            
            <Col xs='3' className="cardButton">
              <Button
                
                href={item.tickets}
                style={{backgroundColor: "#29ba68"}}
              >Get Tickets</Button>
            </Col>
            </Row>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default ShowDates;
