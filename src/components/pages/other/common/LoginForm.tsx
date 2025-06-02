import { Link } from "react-router-dom";
import { Button, Form, Input, Label } from "reactstrap";
import { DonTHaveAnAccount, Href, LogIn, LogInYourAccount, OR, Remember, SignUp, Welcome } from "../../../../constants";
import { routes } from "../../../../routers/routes";
import { dynamicImage, Image } from "../../../../utils";
import { LoginSocialData } from "../../../../data/pages/Other";
import RenderInput from "../../../commonComponents/RenderInput";
import UsePathName from "../../../../utils/UsePathName";
import { useAppDispatch } from "../../../../reduxToolkit/hooks";
import { setLoginModal, setSignUpModal } from "../../../../reduxToolkit/reducers/layoutSlice";

const LoginForm = () => {
  const Path = UsePathName();
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    Path[2] === "login-4" && dispatch(setSignUpModal());
    dispatch(setLoginModal());
  };
  return (
    <div className="form-box">
      <div className="login-title">
        <h3>{Welcome}</h3>
        <h5>{LogInYourAccount}</h5>
      </div>
      <Form className="login-form">
        <RenderInput placeholder="Enter Your Email" mainClass="form-input" review />
        <RenderInput placeholder="Enter Your Password" mainClass="form-input" review />
        <div className="form-check-box">
          <Input type="checkbox" id="Remember" />
          <Label htmlFor="Remember">{Remember}</Label>
        </div>
        <Button className="btn-solid" type="button">
          {LogIn}
        </Button>
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
          <h6>{DonTHaveAnAccount}</h6>
          <Link to={Path[2] === "login-4" ? Href : routes.Pages.Other.SignUp1} onClick={handleNavigate}>
            {SignUp}
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
