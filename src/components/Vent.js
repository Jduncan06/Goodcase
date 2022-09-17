import microphone from "../app/assets/img/microphone.png";
import { Row, Col } from "reactstrap";
import VentForm from "../app/utils/VentForm";
import SubmitText from "../features/Form/SubmitText";
import { useState } from "react";

const Vent = () => {
 
  if (window.width >= 576) {
    return (
      <div className="vent">
        <Row className="background" id="Vent">
          <Col className="ventForm" xs="12" md="4 order-1">
            <VentForm />
          </Col>
          <Col xs="12" md="8" className="ventPic">
            <img
              src={microphone}
              alt="microphone"
              className=" overlay ms-auto"
              background
              md="8"
            />
            <h1 className="ms-auto contentVent">Submit Your Vent</h1>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="vent">
        <Row className="background" id="Vent">
          <Col xs="12 order-1" md="8" className="ventPic">
            <img
              src={microphone}
              alt="microphone"
              className=" overlay ms-auto"
              background
              md="8"
            />
            <h1 className="ms-auto contentVent">Submit Your Vent</h1>
          </Col>
          <Col className="ventForm" xs="12 order-2" md="4">
            <VentForm />
          </Col>
        </Row>
        <hr/>
      </div>
    );
  }
};

export default Vent;
