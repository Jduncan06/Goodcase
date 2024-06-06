import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col>
            <a
              className="btnYoutube"
              href="https://www.youtube.com/channel/UCFxfyJKXtWwN7GzcTO4C38w?view_as=subscriber"
            >
              <i className="fa fa-youtube-play" />
            </a>{" "}
            <a
              className=" btnInstagram"
              href="https://www.instagram.com/ryangoodcase/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btnTwitter"
              href="https://twitter.com/ryangoodcase"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
