import { Col, Container, Row } from "reactstrap";
import { routes } from "../../../routers/routes";
import { dynamicImage, Image } from "../../../utils";
import Breadcrumbs from "../../commonComponents/breadcrumbs";
import SignUpForm from "./common/SignUpForm";

const SignUp1Container = () => {
  return (
    <>
      <Breadcrumbs title="Sign Up" url={routes.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="section-b-space login-section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl="7" lg="6" className="d-lg-inline-block d-none">
              <div className="login-img">
                <Image src={dynamicImage("other/1.png")} alt="login-img" className="img-fluid" />
              </div>
            </Col>
            <Col xl="5" lg="6" sm="8">
              <SignUpForm />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SignUp1Container;
