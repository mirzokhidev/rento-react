import { Link } from "react-router-dom";
import { Button, Form, Input, Label } from "reactstrap";
import {
  AlreadyHaveAnAccount,
  CreateAnAccount,
  Href,
  LogIn,
  OR,
  SignUpAccount,
  Welcome,
} from "../../../constants";
import { LoginSocialData } from "../../../data/pages/Other";
import { routes } from "../../../routers/routes";
import { dynamicImage, Image } from "../../../utils";

import UsePathName from "../../../utils/UsePathName";
import { useAppDispatch } from "../../../reduxToolkit/hooks";
import {
  setLoginModal,
  setSignUpModal,
} from "../../../reduxToolkit/reducers/layoutSlice";
import RenderInput from "../../components/commonComponents/RenderInput";

const SignUpForm = () => {
  const Path = UsePathName();
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    Path[2] === "login-4" && dispatch(setLoginModal());
    dispatch(setSignUpModal());
  };
  return (
    <div className="form-box">
      <div className="login-title">
        <h3>{Welcome}</h3>
        <h5>{SignUpAccount}</h5>
      </div>
      <Form className="login-form">
        <RenderInput
          placeholder="Enter Your Full Name"
          mainClass="form-input"
          review
        />
        <RenderInput
          placeholder="Enter Your Email"
          mainClass="form-input"
          review
        />
        <RenderInput
          placeholder="Enter Your Password"
          mainClass="form-input"
          review
        />
        <div className="form-check-box align-items-start">
          <Input type="checkbox" id="Remember" />
         
         
        </div>
        <Button className="btn-solid">{CreateAnAccount}</Button>
        <div className="text-divider">
          <span>{OR}</span>
        </div>
        <ul className="login-social">
          {LoginSocialData.map((item, index) => (
            <li key={index}>
              <Link to={item.url} target="_blank">
                <Image src={dynamicImage(item.image)} className="img-fluid" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="signup-box">
          <h6>{AlreadyHaveAnAccount}</h6>
          <Link
            to={Path[2] === "login-4" ? Href : routes.Pages.Other.Login}
            onClick={handleNavigate}>
            {LogIn}
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
