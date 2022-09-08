import { Container, Row, Col } from "reactstrap";
import {youtube} from '../app/assets/img/youtube.png'

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col>
            <a
              className="btnYoutube"
              href="http://youtube.com/watch?v=CTT2-31gANI"
            >
              <i className="fa fa-youtube-play" />
            </a>{" "}
            <a
              className=" btnInstagram"
              href="http://instagram.com/ventshowlive"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btnTwitter"
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
