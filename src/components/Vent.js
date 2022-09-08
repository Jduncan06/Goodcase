import microphone from "../app/assets/img/microphone.png";
import { Container, Row, Col, FormGroup, Label, Button } from "reactstrap";
import { Formik, Field, Form } from "formik";

const Vent = () => {
  return (
    <div className="vent" id="Vent">
      <Row className="background">
        <Col className="ventForm" xs="12" md="4">
          <Formik>
            <Form>
              <FormGroup>
                <Label>Here is some space to vent</Label>
                <Field
                  name="ventText"
                  as="textarea"
                  className="form-control"
                  placeholder="What grinds your gears?"
                />
              </FormGroup>
              <FormGroup>
                <Label>First Name, Full Name, Fake Name, Whatever</Label>
                <Field
                  name="author"
                  placeholder="Max Rosenblum"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label>Email address</Label>
                <Field name="email" placeholder="ventlive@gmail.com" />
              </FormGroup>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          </Formik>
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
      <hr />
    </div>
  );
};

export default Vent;
