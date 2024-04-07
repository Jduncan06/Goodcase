import React from 'react';
import { Row, Col, Carousel, CarouselItem, CarouselControl } from "reactstrap";
// import SweaterClose from "../app/assets/headshots/SweaterClose.jpg";
// import Smile from "../app/assets/headshots/Smile.jpg";
// import Standup from "../app/assets/headshots/Standup.jpg";
import ContactForm from "../app/utils/ContactForm";

// const items = [
//   {
//     src: SweaterClose,
//     altText: 'Sweater Close',
//   },
//   {
//     src: Smile,
//     altText: 'Smile',
//   },
//   {
//     src: Standup,
//     altText: 'Standup',
//   }
// ];

const items = [
  {
    src: 'https://github.com/Jduncan06/Goodcase/blob/main/src/app/assets/img/SweaterClose.jpg?raw=true',
    altText: 'Sweater Close',
  },
  {
    src: 'https://github.com/Jduncan06/Goodcase/blob/main/src/app/assets/img/Smile.jpg?raw=true',
    altText: 'Smile',
  },
  {
    src: 'https://github.com/Jduncan06/Goodcase/blob/main/src/app/assets/img/Standup.jpg?raw=true',
    altText: 'Standup',
  }
];

const Contact = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

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

  return (
    <div className="contact" id="Contact">
      <Row id="Contact">
        <Col  xs="12" md="6">
          {/* <h1 className="contentContact">Contact Me</h1> */}
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
        <Col className=" contentContactText" xs="12" md="6">
          <br/>
          <h5>I'm kind of shy, message me first?</h5>
          <ContactForm/>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Contact;