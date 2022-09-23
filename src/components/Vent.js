import microphone from "../app/assets/img/microphone.png";
import { Row, Col } from "reactstrap";
import VentForm from "../app/utils/VentForm";
import SubmitText from "../features/Form/SubmitText";
import { useState } from "react";

const Vent = () => {
  return (
    <div className="vent">
      <Row className="background" id="Vent">
        <Col className="ventForm" xs="12" md="5 order-1">
          <VentForm />
        </Col>
        <Col xs="12" md="7">
          <img src={microphone} alt="sneeze" className="overlay ventPic" />
          <h1 className=" contentVent">Submit Your Vent</h1>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Vent;
