import React, { useState } from 'react';
import { Row, Col, Carousel, CarouselItem, CarouselControl, Collapse, Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import ContactForm from "../app/utils/ContactForm";
import HatRyan from "../app/assets/headshots/hat_ryan.jpeg";
import AngryRyan from "../app/assets/headshots/angry_ryan.jpeg";
import HatRedRyan from "../app/assets/headshots/hat_red_ryan.jpeg";
import RyanFromTheRing from "../app/assets/headshots/ryan_from_the_ring.jpeg";

const items = [
  {
    src:  HatRyan,
    altText: 'Hat Ryan',
  },
  {
    src:  AngryRyan,
    altText: 'Angry Ryan',
  },
  {
    src:  HatRedRyan,
    altText: 'Hat Red Ryan',
  },
  {
    src:  RyanFromTheRing,
    altText: 'Ryan From The Ring',
  },
];

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // state for the collapse

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const toggle = () => setIsOpen(!isOpen); // function to toggle the collapse

  const slides = items.map((item) => {
    return (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img src={item.src} alt={item.altText} className="contactPic md-4" />
    </CarouselItem>
    );
  });
  
  const [modal, setModal] = useState(false); // state for the modal

  const toggleModal = () => setModal(!modal); // function to toggle the modal

  return (
    <div className="contact" id="Contact">
      <Row id="Contact">
        <Col  xs="12" md="6">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Col>
        <Col className="contentContactText" xs="12" md="6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <br/>
          <h3>
            <strong>Manager:</strong><br/>
            Nick Harris - Avalon Management<br/>
            nharris@avalon-usa.com<br/><br/>
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