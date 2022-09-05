import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col>
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/watch?v=CTT2-31gANI"
            >
              <i className="fa fa-youtube" />
            </a>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/ventshowlive"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/ventshowlive"
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
