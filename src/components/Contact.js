import React, { useState } from 'react';
import { Row, Col, Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import ContactForm from "../app/utils/ContactForm";
import AngryRyan from "../app/assets/headshots/angry_ryan.jpeg";



const Contact = () => {

  
  const [modal, setModal] = useState(false); // state for the modal

  const toggleModal = () => setModal(!modal); // function to toggle the modal

  const isDesktop = window.innerWidth > 756 

  const br = !isDesktop ? "order-1" : ''
  return (
    <div className="contact" id="Contact">
      <Row id="Contact" className='min-vh-100 align-items-stretch'>
        <Col  xs="12 br" md={`6 ${br}`}>
          <img src={AngryRyan} alt="Red Hat Ryan" className="contactPic" />
        </Col>
        <Col className={`${isDesktop? "vh-100": ""} contentContactText`} xs="12" md="6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <br/>
          <h3>
            <strong>Manager:</strong><br/>
            Nick Harris - Avalon Management<br/>
            nharris@avalon-usa.com<br/><br/>
            <strong>Booking Agents:</strong><br/>
            Peter DeSantis - peter@33andwest.com<br/>
            JJ Cassiere - jj@33andwest.com<br/><br/>
            <strong>My Email:</strong><br/>
            ryan.goodcase@gmail.com
          </h3>
          <br/>
          <Button color="primary" onClick={toggleModal} style={{ marginBottom: '1rem' }}>Join my Email List!</Button>
          <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Join my Email List!</ModalHeader>
            <ModalBody>
              <ContactForm/>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
      <hr />
      </div>
  );
};

export default Contact;