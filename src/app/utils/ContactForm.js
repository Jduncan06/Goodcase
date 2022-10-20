import { useState, useRef } from "react";
import { FormGroup, Label, Button } from "reactstrap";
import { Formik, Field, Form } from "formik";

const ContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxpablIUdnnxPgAGxQ5vW0lZhcwA5FphtnyRFCyQFhoC-JaTe-1fzopRxQkIBQtbXVI/exec";

  const btnText = () => {
    if (loading) {
      return "Submitting...";
    } else if (submitted) {
      return "Thank you!";
    } else {
      return "Submit";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Formik
      initialValues={{
        Name: "",
        Email: "",
        Location: "",
        Comments: "",
      }}
    >
      <Form
        method="post"
        ref={formRef}
        name="google-sheet"
        className="contactForm"
        onSubmit={handleSubmit}
      >
        <FormGroup>
          <Label htmlFor="Name">
            Name? Or whatever you want me to call you in your email
          </Label>
          <Field
            type="text"
            name="Name"
            id="Name"
            placeholder="Your Name"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Email">Email</Label>
          <Field
            type="text"
            name="Email"
            id="Email"
            placeholder="Your Email"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Location">City and State?</Label>
          <Field
            type="text"
            name="Location"
            id="Location"
            placeholder="Where are you from?"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Comments">
            Comments! Tell me something good! Or don't, it's not required.
            Thanks for doing this it means a lot.
          </Label>
          <Field
            type="text"
            name="Comments"
            id="Comments"
            as="textarea"
            rows="6"
            placeholder="Your Message"
            className="form-control"
          />
        </FormGroup>
        <Button
          type="submit"
          className="formBtn"
          style={{ backgroundColor: "#29ba68" }}
        >
          {btnText()}
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
