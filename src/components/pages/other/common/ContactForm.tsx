import { Form, Input, Label, Row } from "reactstrap";
import { SendMessage } from "../../../../constants";
import RenderInput from "../../../commonComponents/RenderInput";
import UsePathName from "../../../../utils/UsePathName";

const ContactForm = () => {
  const Path = UsePathName();
  return (
    <Form className="login-form contact-form">
      <Row>
        <RenderInput placeholder="First Name" ColClass="col-lg-6" mainClass="form-input" review />
        <RenderInput placeholder="Last Name" ColClass="col-lg-6" mainClass="form-input" review />
        <RenderInput placeholder="Phone Number" ColClass="col-lg-6" mainClass="form-input" inputType="number" review />
        <RenderInput placeholder="Email" ColClass="col-lg-6" mainClass="form-input" inputType="email" review />
        <RenderInput placeholder="Message" ColClass="col-xs-12" mainClass="form-input" inputType="textarea" inputClass="mb-0" review />
        {Path[2] === "contact-3" && (
          <div className="form-check-box">
            <Input type="checkbox" id="message" required />
            <Label htmlFor="message">I agree to receive other communication message.</Label>
          </div>
        )}
        <RenderInput button={SendMessage} ColClass="col-xl-4 col-lg-5 col-xs-8" review />
      </Row>
    </Form>
  );
};

export default ContactForm;


