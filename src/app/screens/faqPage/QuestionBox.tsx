import { Form } from "react-router-dom";
import { FindAnAnswer, Send } from "../../../constants";
import { QuestionContent } from "../../../data/pages/Other";
import CommonHeader from "../../components/commonComponents/CommonHeader";
import RenderInput from "../../components/commonComponents/RenderInput";



const QuestionBox = () => {
  return (
    <div className="faq-section section-b-space">
      <div className="container">
        <CommonHeader
          title={FindAnAnswer}
          content={QuestionContent}
          headClass="text-center content-title faq-bottom-title"
        />
        <div className="question-box">
          <Form className="login-form">
            <RenderInput
              placeholder="Enter Your Email"
              mainClass="form-input"
              inputType="email"
              review
            />
            <RenderInput
              placeholder="Type Your Question here..."
              mainClass="form-input"
              inputType="textarea"
              review
            />
            <RenderInput button={Send} mainClass="form-input text-end" review />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
