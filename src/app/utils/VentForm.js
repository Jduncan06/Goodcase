import { useState, useRef } from "react";
import { FormGroup, Label, Button } from "reactstrap";
import { Formik, Field, Form } from "formik";
import SubmitText from "../../features/Form/SubmitText";

const VentForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyt1PC_HN_xthB_I_qNbKvUBMA4-uUdpZdx_8-Q_ftI6Bwy-jzWi0Szos6EZR11Vn3q/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    new Date(Date.now()).toISOString();
    setLoading(true);

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  
    return (
      <Formik
        initialValues={{
          ventForm: "",
          name: "",
          email: "",
        }}
      >
        <Form
          method="post"
          ref={formRef}
          name="google-sheet"
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label htmlFor="ventText">Here is some space to vent</Label>
            <Field
              name="ventText"
              type="ventText"
              as="textarea"
              rows="6"
              className="form-control"
              placeholder="What grinds your gears?"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">
              First Name, Full Name, Fake Name, Whatever
            </Label>
            <Field
              name="name"
              type="name"
              placeholder="Max Rosenblum"
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Join our mailing list!</Label>
            <Field
              name="email"
              type="email"
              placeholder="ventlive@gmail.com"
              className="form-control"
            />
          </FormGroup>
          <Button
            type="submit"
            name="submitted"
            className="formBtn"
            value={loading ? "Loading..." : "Thank You!"}
          >
            Submit
          </Button>
        </Form>
      </Formik>
    );
};

export default VentForm;
